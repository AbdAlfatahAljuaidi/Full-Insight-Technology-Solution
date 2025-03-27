// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "hello": "Hello",
        "welcome": "Welcome to our site",
        "Title explanation": `We are a team of passionate professionals dedicated to transforming businesses through innovative
    technology solutions. Our mission is to empower organizations to achieve operational excellence and drive
    sustainable growth in an ever-evolving market landscape.`,
    "Our Vision":"Our Vision",
    "Vision explanation":"To be the global leader in delivering cutting-edge solutions that drive business transformation.",
    "Our Team":"Our Team",
      "Team explanation":` A diverse team of experts, from technology innovators to industry specialists, working together to
              deliver excellence.`,
              "Our Approach":"Our Approach",
              "Approach explanation":"We focus on continuous innovation, agility, and customer-centric solutions to drive real business value.",
               "Our Story":"Our Story",
               "Story explanation":"We start by thoroughly understanding your goals and requirements, establishing a strong foundation for the project. Then, our team collaborates to develop detailed strategies that ensure smooth execution and the best possible outcomes. Finally, we deliver high-quality, innovative solutions that are perfectly aligned with your vision, driving success and achieving your objectives.",
                "Join Us" :"Join Us in Shaping the Future",

                'Join Us explanation':"Whether you're a potential client or a future team member, we’re always excited to connect with like-minded individuals and organizations who share our passion for growth and transformation.",                "Get In Touch":"Get In Touch",
                //footer
                "fits":"Full Insight Technology Solutions",
                  "fits explanation":"We are a leading company in the industry, providing innovative solutions to our clients worldwide.",
                  "Quick Links":"Quick Links",
                    "Contact":"Contact Us",
                    "Saudi Arabia":"Saudi Arabia",
                    "HQ":"HQ",
                    "Phone":"Phone",
                     "Address": "Address Riyadh, Saudi Arabia",
                     "Jordan":"Jordan",
                     "Addresst": "Address: Amman, Jordan",
                       "Follow":"Follow Us",
                         "final":"Full Insight Technology Solution. All Rights Reserved.",
                         "Client Success Stories":"Client Success Stories",
                         "Impact of modern technologies in improving operational efficiency": "Impact of modern technologies in improving operational efficiency",
                         "Tailored services": "Tailored services that provide solutions to unique business challenges",
                         "Achieving measurable": "Achieving measurable results such as cost reduction and increased customer satisfaction",
                         "Industries transformed": "Industries transformed through scalable solutions, including manufacturing, healthcare, and retail",    
                         "Pharma Pharmaceutical Industries": "Pharma Pharmaceutical Industries",     
                         "We developed": "We developed an ERP system for the pharma company to improve efficiency and streamline key operations like inventory, sales, and finance, enabling better decision-making and business growth",  
                         "Learn More": "Learn More",      
                         "Start Your Success Story with Us": "Start Your Success Story with Us", 
                         "Let us": "Let us help you transform your business operations with our innovative solutions and services",    
                         "Get Started": "Get Started",   
                         //FORM
                         "fill out": "We’d love to hear from you. Please fill out this form.",
                         "First Name": "First Name",
                         "Last Name": "Last Name",
                         "Email": "Email",
                         "Phone Number": "Phone Number",
                         "Your Message": "Your Message",






      }
    },
    ar: {
      translation: {
        //Nav Page
        "Home": "الصفحة الرئيسية",
        "About": "عنا",
        "Service": "خداماتنا",
        "Successful Story": "قصص نجاحنا",
        "Most Questions": " الاسئلة الشائعة ",
        "Contact Us": "للتواصل",
        "Career Page":"صفحة المهنة",
        // About Page
        "About Us":"عنا",
        "Title explanation":"نحن فريق من المهنيين المتحمسين الملتزمين بتحويل الأعمال من خلال حلول تكنولوجية مبتكرة. تتمثل مهمتنا في تمكين المؤسسات من تحقيق التميز التشغيلي ودفع النمو المستدام في بيئة سوقية دائمة التطور.",
        "Our Vision":"رؤيتنا",
        "Vision explanation":"أن نكون الرائد العالمي في تقديم الحلول المتطورة التي تقود تحول الأعمال.",
        "Our Team":"فريقنا",
        "Team explanation":"فريق متنوع من الخبراء، من مبتكري التكنولوجيا إلى المتخصصين في الصناعة، يعملون معًا لتحقيق التميز.",
        "Our Approach":"نهجنا",
        "Approach explanation":"نحن نركز على الابتكار المستمر والمرونة والحلول التي تركز على العملاء لتعزيز القيمة التجارية الحقيقية.",
        "Our Story":"قصتنا",
        "Story explanation":"نبدأ بفهم أهدافكم ومتطلباتكم بدقة، لنرسي أساسًا متينًا للمشروع. ثم يتعاون فريقنا لوضع استراتيجيات مفصلة تضمن تنفيذًا سلسًا وتحقيق أفضل النتائج الممكنة. وأخيرًا، نقدم حلولًا مبتكرة وعالية الجودة تتوافق تمامًا مع رؤيتكم، مما يدفعكم نحو النجاح وتحقيق أهدافكم.",
        "Join Us" :"انضم إلينا في تشكيل المستقبل",
         'Join Us explanation':`سواء كنت عميلاً محتملاً أو عضوًا مستقبليًا في الفريق، فنحن دائمًا متحمسون للتواصل مع الأفراد والمؤسسات المتشابهة في التفكير والذين يشاركوننا شغفنا بالنمو والتحول.`,
         "Get In Touch":"تواصل معنا ",
         //footer
         "fits":"حلول تقنية الرؤية الكاملة",
         "fits explanation":"نحن شركة رائدة في الصناعة، نقدم حلولاً مبتكرة لعملائنا في جميع أنحاء العالم.",
         "Quick Links":"روابط سريعة",
           "Contact":"تواصل معنا ",
           "Saudi Arabia":"المملكة العربية السعودية",
           "HQ":"المقر الرئيسي",
           "Phone":"الرقم",
            "Address": "العنوان :الرياض, المملكة العربية السعودية",
            "Jordan":"الاردن",
            "Addresst":"عمان, الاردن",
            "Follow":"تابعنا",
              "final":"حلول تقنية شاملة. جميع الحقوق محفوظة.",
              //story success
              "Client Success Stories":"قصص نجاح العملاء",
              "Impact of modern technologies in improving operational efficiency": "تأثير التقنيات الحديثة في تحسين الكفاءة التشغيلية",
              "Tailored services": "خدمات مخصصة تقدم حلولًا للتحديات التجارية الفريدة",
              "Achieving measurable": "تحقيق نتائج قابلة للقياس مثل خفض التكاليف وزيادة رضا العملاء",
              "Industries transformed": "الصناعات التي تم تحويلها من خلال الحلول القابلة للتوسع، بما في ذلك التصنيع والرعاية الصحية والتجزئة",
              "Pharma Pharmaceutical Industries": "صناعات الأدوية والصيدلة",
              "We developed": "طورنا نظام ERP لشركة الأدوية لتحسين الكفاءة وتبسيط العمليات الرئيسية مثل المخزون والمبيعات والمالية، مما يمكّن من اتخاذ قرارات أفضل ونمو الأعمال",
              "Learn More": "تعرف أكثر",
              "Start Your Success Story with Us": "ابدأ قصة نجاحك معنا",
              "Let us": "دعنا نساعدك في تحويل عمليات أعمالك من خلال حلولنا وخدماتنا المبتكرة",
              "Get Started": "ابدأ الآن",
              //FORM 
              "fill out": "نود سماع رأيك. يرجى ملء هذا النموذج.",
              "First Name": "الاسم الأول",
              "Last Name": "الاسم الأخير",
              "Email": "البريد الإلكتروني",
              "Phone Number": "رقم الهاتف",
              "Your Message": "رسالتك",




          

            
          
           
       

      }
    }
  },
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en", // في حال لم تكن اللغة موجودة
  interpolation: {
    escapeValue: false // React already safes from xss
  }
});

export default i18n;
