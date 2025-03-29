const { createTransport } = require("nodemailer");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

module.exports = async (to, firstName, lastName, phone, email, message,file, subject, template) => {
  try {
    const transporter = createTransport({
      host: process.env.HOST,
      port: 587,
      auth: {
        user: process.env.USER, 
        pass: process.env.PASS,
      },
    });

    // إعدادات قالب البريد الإلكتروني باستخدام handlebars
    const handlebarsOptions = {
      viewEngine: {
        extname: ".handlebars",
        partialsDir: path.resolve("./views"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./views"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(handlebarsOptions));

    // إعداد خيارات البريد الإلكتروني
    const mailOptions = {
      from: {
        name: " طلب من العميل ",
        address: process.env.EMAIL,
      },
      to: to,
      subject: subject,
      template: template,
      context: {
        firstName,  // الاسم الأول
        lastName,   // الاسم الأخير
        phone,      // رقم الهاتف
        email,      // البريد الإلكتروني
        message,    // الرسالة
file
      },
     
    };

    // إرسال البريد الإلكتروني
    return transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
