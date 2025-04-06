// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const {Message,MessageValidation} = require('./models/sendMessage')
const  sendEmail  = require('./utils/sendEmail'); // استيراد دالة sendEmail
require("dotenv").config();
const i18n = require('i18n');
const router = express.Router()
const multer = require('multer');
const path = require('path');

const {  cloudinary } = require('./config/cloudinary'); // استيراد الإعدادات





app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is ready to take off");
    });
}).catch((err) => {
    console.log(err);
});


i18n.configure({
    locales: ['en', 'ar'],
    directory: __dirname + '/locales',
    defaultLocale: 'en',
    objectNotation: true
  });
  
  app.use(i18n.init);
  
  app.get('/', (req, res) => {
    res.send(res.__('Hello')); // سيعرض النص المترجم بناءً على اللغة المختارة
  });


  

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


// POST endpoint لتلقي البيانات من الفورم وإرسالها عبر البريد الإلكتروني
app.post('/submit-form', async (req, res) => {
    try {
        // التحقق من البيانات المدخلة باستخدام MessageValidation
        const { error } = MessageValidation(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // استخراج البيانات من جسم الطلب
        const { firstName, lastName, phone, email, message } = req.body;

      
        

        // تحديد الموضوع والقالب
        const subject = "تفاصيل العميل الجديد";
        const template = "clientDetails"; // اسم القالب الذي ستستخدمه

        // إرسال البيانات عبر البريد الإلكتروني باستخدام دالة sendEmail
        await sendEmail( process.env.EMAIL, firstName, lastName, phone, email, message, subject, template);
   
        // إرسال رد النجاح
        res.status(200).json({ message: "تم إرسال الرسالة بنجاح!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "حدث خطأ في الخادم. يرجى المحاولة لاحقًا." });
    }
});





app.post('/submit-Resume', upload.single('file'), async (req, res) => {
    try {
        const { firstName, lastName, phone, email, message } = req.body;

        const { error } = MessageValidation({ firstName, lastName, phone, email, message });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        if (!req.file) {
            return res.status(400).json({ error: "يرجى إرفاق السيرة الذاتية." });
        }
        
      
        
        const filePath = path.join(__dirname, `./uploads/${req.file.filename}`);
        const file = await cloudinary.uploader.upload(filePath);
        
        

        const subject = "طلب توظيف";
        const template = "clientDetails";
        await sendEmail(process.env.EMAIL, firstName, lastName, phone, email, message, file.url, subject, template);

        res.status(200).json({ message: "تم إرسال الرسالة بنجاح!", file });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "حدث خطأ في الخادم. يرجى المحاولة لاحقًا." });
    }
});
