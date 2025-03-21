// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const {Message,MessageValidation} = require('./models/sendMessage')
const  sendEmail  = require('./utils/sendEmail'); // استيراد دالة sendEmail
require("dotenv").config();
const i18n = require('i18n');


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
