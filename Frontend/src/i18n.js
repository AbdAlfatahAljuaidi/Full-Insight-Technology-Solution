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
                         //main
                         "STREAMLINE": "STREAMLINE YOUR BUSINESS OPERATIONS",
                         "Epicor ERP Solutions": "Epicor ERP Solutions",
                         "Manage": "Manage your operations seamlessly, from procurement to production and sales.",
                         "Microsoft D365 Business Central": "Microsoft D365 Business Central",
                         
"An ERP system": "An ERP system to boost efficiency, manage employees and payroll, provide financial reports, control inventory, enhance productivity, and support strategic decisions with analytics.",
"Read More": "Read More",
"Microsoft D365 Finance and Operation": "Microsoft D365 Finance and Operation",
"A solution": "A solution to streamline finance, operations, inventory, payroll, and support decision-making with real-time insights.",
"Microsoft": "Microsoft D365 Business Central is an all-in-one solution that streamlines finance, sales, customer service, and inventory management with real-time insights for better decision-making.",
"ERP Development": "ERP Development",
"What we provide":"What we provide",
"erp_for_pharmaceutical_industries": "ERP for pharmaceutical industries optimizes inventory, production, regulatory compliance, and financial management, improving efficiency, accuracy, and decision-making across operations.",
"ERP_for_Pharmaceutical_Industries":"ERP For Pharamcetual Industries",
 "ERP_development": "ERP development involves designing and customizing ERP systems to meet business needs, streamline operations, and enhance efficiency and scalability.",
 
  "ERP_Consultation_and_Implementation": "ERP Consultation and Implementation",
    "ERP_Consultation_and_Implementation_Services": "ERP consultation and implementation services help businesses select, customize, and integrate ERP systems to improve operations and efficiency.",
  "Our_Methodology": "Our Methodology",
   "Efficient_Workflow": "Efficient Workflow",
    "Our_Process": "Our process is designed to ensure efficiency and quality in every project we undertake.",
   "Achieve_Success": "Achieve Success",
   "We_Begin": "We begin by understanding your goals and requirements to build a strong foundation for the project.",
     "Develop_Strategies": "Develop Strategies",
     "Our_Team_Collaborates": "Our team collaborates to create a detailed plan, ensuring smooth execution and optimal results.",
     "Define_Objectives": "Define Objectives",

      "Team_Collaboration": "Our team collaborates to create a detailed plan, ensuring smooth execution and optimal results.",
     "Why_Choose_Us": "Why Choose Us",
       "Unlock_Your_Business_Potential_with_FITS": "Unlock Your Business Potential with FITS",
         "Why_Choose_Usp": "Maximize Your Investment: As certified Microsoft and Epicor partners, we ensure you get the most out of your ERP investment. Streamline Operations: Our tailored solutions and expert implementation drive efficiency and optimize your business processes. Gain a Competitive Edge: Leverage the power of leading ERP platforms to improve decision-making and stay ahead of the competition. Experience Peace of Mind: Our comprehensive support and proactive approach ensure your ERP system runs smoothly, allowing you to focus on your core business. Partnership You Can Trust: We are committed to your success, providing transparent communication and building lasting relationships.",

         "Speed_of_Operation": "Speed of Operation",
         "High_Quality": "High Quality",
         "Customizability": "Customizability",
         "Easy_Integration": "Easy Integration",
         "Excellent_Support": "Excellent Support",
         "Powerful_Analytics": "Powerful Analytics",
          "Stay_Updated_with_Our_Partners_Tweets": "Stay Updated with Our Partners' Tweets",
           "More_Info": "More Info",
             "Some_Companies_Weve_Worked_With": "Some of the Companies We've Worked With",
              "Join_Our_Growing_List_Of_Satisfied_Customers": "Join our growing list of satisfied customers",
                "Join_Our_Team": "Join Our Team",
                 "Apply_for_a_Job": "Apply for a Job",
                  "Fill_out_the_form_to_apply_for_a_position_with_us": "Fill out the form to apply for a position with us.",
  "Why_do_you_want_to_join_us": "Why do you want to join us?",
 "Submit": "Submit",
  "Sending": "Sending",
   "ERP_Solution": "A comprehensive ERP solution that streamlines business processes, from finance to supply chain management",
"ERP_Cloud_Solution": "A cloud-based ERP system that optimizes financial management, operations, and supply chain efficiency",
"ERP_Business_Management_Solution": "An all-in-one business management solution for finance, sales, customer service, and operations",
 "ERP_Specialized_Pharmaceutical": "A specialized ERP system that ensures compliance, manages inventory, and enhances efficiency in pharmaceutical businesses",
 "ERP_Consultation_Services": "Services that help businesses select, customize, and integrate ERP systems for better efficiency",
   "ERP_Customization_Services": "Customizing and building ERP solutions to optimize business processes and scalability",
   "Epicor_ERP_Overview": "Epicor ERP: A Comprehensive Overview",
    "Epicor_ERP_Description": "Epicor ERP is a cutting-edge enterprise resource planning system designed to enhance business operations, drive efficiency, and provide real-time insights. Tailored for industries such as manufacturing, distribution, retail, and services, Epicor offers a scalable and flexible solution to meet diverse business needs.",

 "Why_Choose_Epicor_ERP": "Why Choose Epicor ERP?",
  "AI_Automation": "AI & Automation",
   "User_Friendly_Interface": "User-Friendly Interface",
    "Modern_Intuitive_UI": "Modern and intuitive UI that simplifies navigation and enhances user experience",
     "AI_Predictive_Analytics": "Leverage artificial intelligence for predictive analytics and automated workflows",
      "Cloud_OnPremise": "Cloud & On-Premise",
        "Flexible_Deployment": "Flexible deployment options that adapt to your business infrastructure.",
        "Customizable_Solutions": "Customizable solutions designed for manufacturing, retail, and more.",
          "Industry_Specific_Solutions": "Industry-Specific Solutions",
           "Industries_Benefiting_Epicor": "Industries Benefiting from Epicor ERP",
           "Manufacturing": "Manufacturing",
           "Healthcare": "Healthcare",
           "Automotive": "Automotive",
           "Distribution": "Distribution",
           "Retail": "Retail",
            "Benefits of Using Epicor ERP": "Benefits of Using Epicor ERP",
             "Improved operational efficiency and productivity": "Improved operational efficiency and productivity",
             "Enhanced decision-making through data-driven insights": "Enhanced decision-making through data-driven insights",
             "Streamlined supply chain and inventory management": "Streamlined supply chain and inventory management",
             "Better customer relationship management": "Better customer relationship management",
























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
              //main
"STREAMLINE": "تبسيط عمليات عملك",
"Epicor ERP Solutions": "حلول Epicor ERP",
"Manage": "إدارة عملياتك بسلاسة، من المشتريات إلى الإنتاج والمبيعات.",
"Microsoft D365 Business Central": "مايكروسوفت D365 بيزنس سنترال",
"An ERP system": "نظام ERP لتعزيز الكفاءة، وإدارة الموظفين وكشوف الرواتب، وتوفير التقارير المالية، والتحكم في المخزون، وزيادة الإنتاجية، ودعم القرارات الاستراتيجية من خلال التحليلات.",
"Read More": "اقرأ المزيد",
"Microsoft D365 Finance and Operation": "مايكروسوفت D365 للمالية والعمليات",
"A solution": "حل يساعد على تبسيط المالية والعمليات والمخزون وكشوف الرواتب، ودعم اتخاذ القرار من خلال رؤى فورية.",
"Microsoft": "مايكروسوفت D365 بيزنس سنترال هو حل متكامل يعمل على تبسيط المالية والمبيعات وخدمة العملاء وإدارة المخزون مع رؤى فورية لاتخاذ قرارات أفضل.",
"ERP Development": "تطوير ERP",
"What we provide":"ماذا نقدم لكم",

  "erp_for_pharmaceutical_industries": "نظام ERP للصناعات الدوائية يعمل على تحسين إدارة المخزون، الإنتاج، الامتثال التنظيمي، والإدارة المالية، مما يعزز الكفاءة والدقة واتخاذ القرارات عبر العمليات.",
"ERP_for_Pharmaceutical_Industries": "ERP لصناعات الأدوية",

  "ERP_development": "تطوير ERP يتضمن تصميم وتخصيص أنظمة ERP لتلبية احتياجات الأعمال، تبسيط العمليات، وتعزيز الكفاءة والقابلية للتوسع.",
  
    "ERP_Consultation_and_Implementation": "استشارات وتنفيذ ERP",
    "ERP_Consultation_and_Implementation_Services": "خدمات استشارات وتنفيذ ERP تساعد الشركات في اختيار وتخصيص ودمج أنظمة ERP لتحسين العمليات والكفاءة.",
    "Our_Methodology": "منهجيتنا",
     "Efficient_Workflow": "سير العمل الفعال",
      "Our_Process": "تم تصميم عمليتنا لضمان الكفاءة والجودة في كل مشروع نتعامل معه.",
  "Achieve_Success": "تحقيق النجاح",
   "We_Begin": "نبدأ بفهم أهدافك ومتطلباتك لبناء أساس قوي للمشروع.",
    "Develop_Strategies": "تطوير الاستراتيجيات",
     "Our_Team_Collaborates": "يعمل فريقنا معًا لإنشاء خطة مفصلة، مما يضمن تنفيذًا سلسًا ونتائج مثلى.",
      "Define_Objectives": "حدد الأهداف",
        "Team_Collaboration": "يتعاون فريقنا لإنشاء خطة مفصلة، مما يضمن تنفيذ سلس ونتائج مثالية.",
   "Why_Choose_Us": "لماذا تختارنا",
     "Unlock_Your_Business_Potential_with_FITS": "افتح إمكانيات عملك مع FITS",
  


     "Why_Choose_Usp": "حقق أقصى استفادة من استثمارك: بصفتنا شركاء معتمدين من مايكروسوفت وإيبيكور، نضمن لك الاستفادة القصوى من استثمارك في ERP. تبسيط العمليات: حلولنا المخصصة وتنفيذنا الخبير يعززان الكفاءة ويحسنان العمليات التجارية. تحقيق ميزة تنافسية: استفد من قوة منصات ERP الرائدة لتحسين اتخاذ القرارات والبقاء في صدارة المنافسة. تجربة راحة البال: دعمنا الشامل ونهجنا الاستباقي يضمنان أن يعمل نظام ERP بسلاسة، مما يسمح لك بالتركيز على أعمالك الأساسية. شراكة يمكنك الوثوق بها: نحن ملتزمون بنجاحك، نقدم تواصل شفاف ونبني علاقات طويلة الأمد.",
    


     "Speed_of_Operation": "سرعة العمليات",
     "High_Quality": "جودة عالية",
     "Customizability": "قابلة للتخصيص",
     "Easy_Integration": "تكامل سهل",
     "Excellent_Support": "دعم ممتاز",
     "Powerful_Analytics": "تحليلات قوية",

  "Stay_Updated_with_Our_Partners_Tweets": "تابع آخر تغريدات شركائنا",
   "More_Info": "مزيد من المعلومات",
     "Some_Companies_Weve_Worked_With": "بعض الشركات التي عملنا معها",
           "Join_Our_Growing_List_Of_Satisfied_Customers": "انضم إلى قائمة عملائنا الراضين التي تنمو باستمرار",
           "Join_Our_Team": "انضم إلى فريقنا",
            "Apply_for_a_Job": "قدم لوظيفة",
             "Fill_out_the_form_to_apply_for_a_position_with_us": "املأ النموذج للتقديم على وظيفة معنا.",
"Why_do_you_want_to_join_us": "لماذا ترغب في الانضمام إلينا؟",
            
           "Submit": "إرسال",
  "Sending": "جاري الإرسال",
  "ERP_Solution": "حل ERP شامل يبسط العمليات التجارية من المالية إلى إدارة سلسلة الإمداد",
   "ERP_Cloud_Solution": "نظام ERP سحابي يحسن إدارة المالية، العمليات، وكفاءة سلسلة الإمداد",
             "ERP_Business_Management_Solution": "حل إدارة الأعمال الشامل للمالية، المبيعات، خدمة العملاء، والعمليات",
        "ERP_Specialized_Pharmaceutical": "نظام ERP متخصص يضمن الامتثال، يدير المخزون، ويعزز الكفاءة في الأعمال الصيدلانية",
  "ERP_Consultation_Services": "خدمات تساعد الشركات في اختيار وتخصيص ودمج أنظمة ERP من أجل تحسين الكفاءة",
   "ERP_Customization_Services": "تخصيص وبناء حلول ERP لتحسين العمليات التجارية وقابلية التوسع",
    "Epicor_ERP_Overview": "إيبيكور ERP: نظرة شاملة",
    "Epicor_ERP_Description": "إيبيكور ERP هو نظام تخطيط موارد المؤسسات المتطور المصمم لتحسين العمليات التجارية، وزيادة الكفاءة، وتوفير رؤى لحظية. تم تصميمه خصيصًا للصناعات مثل التصنيع، والتوزيع، والتجزئة، والخدمات، ويوفر إيبيكور حلاً مرنًا وقابلًا للتوسع لتلبية احتياجات الأعمال المتنوعة.",
 "Why_Choose_Epicor_ERP": "لماذا تختار إيبيكور ERP؟",
  "AI_Automation": "الذكاء الاصطناعي والأتمتة",
   "User_Friendly_Interface": "واجهة مستخدم سهلة الاستخدام",
    "Modern_Intuitive_UI": "واجهة مستخدم حديثة وبديهية تسهل التنقل وتعزز تجربة المستخدم",
      "AI_Predictive_Analytics": "استخدم الذكاء الاصطناعي للتحليلات التنبؤية وتدفقات العمل المؤتمتة",
       "Cloud_OnPremise": "السحابة والمحلي",
         "Flexible_Deployment": "خيارات نشر مرنة تتكيف مع بنية عملك التحتية.",
          
           "Customizable_Solutions": "حلول قابلة للتخصيص مصممة للتصنيع والتجزئة والمزيد.",
            "Industry_Specific_Solutions": "حلول متخصصة حسب الصناعة",
            "Industries_Benefiting_Epicor": "الصناعات المستفيدة من نظام Epicor ERP",
              "Manufacturing": "التصنيع",
              "Healthcare": "الرعاية الصحية",
              "Automotive": "صناعة السيارات",
              "Distribution": "التوزيع",
              "Retail": "التجزئة",
                "Benefits of Using Epicor ERP": "فوائد استخدام نظام Epicor ERP",
                 "Improved operational efficiency and productivity": "تحسين الكفاءة التشغيلية والإنتاجية", "Enhanced decision-making through data-driven insights": "تعزيز اتخاذ القرار من خلال رؤى مستندة إلى البيانات",
                  "Streamlined supply chain and inventory management": "إدارة سلسلة التوريد والمخزون بسلاسة",
                  "Better customer relationship management": "إدارة علاقات العملاء بشكل أفضل",


























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
