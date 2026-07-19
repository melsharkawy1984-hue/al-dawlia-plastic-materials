export const routes = ["about", "products", "production-lines", "quality", "gallery", "contact"] as const;
export type Route = (typeof routes)[number];
export type Locale = "en" | "ar";

export type Product = { title: string; description: string; image: string };

const images = {
  hero: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=90",
  rolls: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=1200&q=85",
  line: "https://images.unsplash.com/photo-1581092919535-7146ff1a5901?auto=format&fit=crop&w=1200&q=85",
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
  lab: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
  logistics: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=85",
  factory: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=85",
};

type Copy = {
  nav: Record<"home" | Route, string>; brand: string; tag: string;
  hero: { eyebrow: string; title: string; text: string; primary: string; secondary: string };
  about: { title: string; text: string }; products: { title: string; text: string; items: Product[] };
  production: { title: string; text: string; stages: string[] }; quality: { title: string; text: string; checks: string[] };
  why: { title: string; items: string[] }; stats: [string, string][]; gallery: { title: string; text: string };
  contact: { title: string; text: string; address: string; form: string[]; send: string }; footer: string;
};

const products: Product[] = [
  ["PE Bags", "Strong, versatile bags manufactured to your exact size and thickness.", images.rolls],
  ["PE Film Rolls", "Clear and colored polyethylene films for every packaging application.", images.line],
  ["Shrink Film", "Reliable protection and polished presentation for grouped products.", images.warehouse],
  ["Stretch Film", "High-performance load stability for storage and transport.", images.logistics],
  ["Garbage Bags", "Durable, practical solutions for commercial and household use.", images.factory],
  ["Agricultural Film", "Resilient films engineered for demanding growing conditions.", images.hero],
  ["Custom Packaging", "Tailored specifications, colors, printing, and finishing.", images.lab],
].map(([title, description, image]) => ({ title, description, image }));

export const content: Record<Locale, Copy> = {
  en: {
    brand: "AL DAWLIA", tag: "FOR PLASTIC MATERIALS",
    nav: { home: "Home", about: "About Us", products: "Products", "production-lines": "Production Lines", quality: "Quality", gallery: "Gallery", contact: "Contact" },
    hero: { eyebrow: "Egyptian manufacturing excellence", title: "AL DAWLIA FOR\nPLASTIC MATERIALS", text: "High Quality Polyethylene Packaging Solutions", primary: "Explore Products", secondary: "Contact Us" },
    about: { title: "Engineered to protect. Built to perform.", text: "AL DAWLIA FOR PLASTIC MATERIALS is an Egyptian manufacturer specializing in polyethylene packaging solutions for local and international markets. We combine technical know-how, reliable production, and attentive service to create packaging that works harder for your business." },
    products: { title: "Packaging designed around your needs.", text: "A broad portfolio of polyethylene solutions made with dependable performance, practical detail, and your operation in mind.", items: products },
    production: { title: "Precision at every stage of production.", text: "Our integrated manufacturing process gives us the control to deliver consistent quality, from resin to finished roll or bag.", stages: ["Advanced extrusion lines", "High-definition printing", "Precision cutting & sealing", "Quality inspection", "Secure packaging & dispatch"] },
    quality: { title: "Quality is part of every layer.", text: "We apply disciplined process controls and inspection across every production stage, so each order meets the specifications our partners rely on.", checks: ["Carefully selected raw materials", "In-process thickness controls", "Visual & mechanical testing", "Traceable final inspection"] },
    why: { title: "A dependable partner from specification to delivery.", items: ["Premium Quality", "Fast Delivery", "Export Ready", "Custom Manufacturing", "Experienced Team", "Competitive Prices"] },
    stats: [["25+", "Years Experience"], ["500+", "Clients"], ["120+", "Employees"], ["20+", "Countries Exported"]],
    gallery: { title: "Inside AL DAWLIA", text: "A closer look at the people, technology, and care behind every finished package." },
    contact: { title: "Let’s build the right packaging solution.", text: "Tell us about your project and our commercial team will get back to you shortly.", address: "162 Maqtorem Compound,\n10th of Ramadan City,\nBelbis Road, Egypt", form: ["Full Name", "Company Email", "Phone Number", "Your Message"], send: "Send Enquiry" },
    footer: "Egyptian polyethylene packaging, made for performance."
  },
  ar: {
    brand: "الدولية", tag: "للمواد البلاستيكية",
    nav: { home: "الرئيسية", about: "عن الشركة", products: "المنتجات", "production-lines": "خطوط الإنتاج", quality: "الجودة", gallery: "المعرض", contact: "اتصل بنا" },
    hero: { eyebrow: "تميز صناعي مصري", title: "الدولية للمواد\nالبلاستيكية", text: "حلول تغليف بولي إيثيلين عالية الجودة", primary: "استكشف المنتجات", secondary: "تواصل معنا" },
    about: { title: "مصممة للحماية. ومبنية للأداء.", text: "الدولية للمواد البلاستيكية هي شركة مصرية متخصصة في حلول تغليف البولي إيثيلين للأسواق المحلية والدولية. نجمع بين الخبرة التقنية والإنتاج الموثوق والخدمة المتميزة لتقديم تغليف يدعم أعمالك." },
    products: { title: "تغليف مصمم حسب احتياجاتك.", text: "مجموعة واسعة من حلول البولي إيثيلين بأداء موثوق وتفاصيل عملية تلائم عملياتك.", items: products.map((item, i) => ({ ...item, title: ["أكياس بولي إيثيلين", "رولات فيلم", "شرنك فيلم", "استرتش فيلم", "أكياس قمامة", "أفلام زراعية", "تغليف مخصص"][i], description: "حلول تغليف موثوقة مصممة وفقاً لمتطلباتك." })) },
    production: { title: "دقة في كل مرحلة إنتاج.", text: "تمنحنا عملية التصنيع المتكاملة تحكماً كاملاً لتقديم جودة ثابتة من المادة الخام إلى المنتج النهائي.", stages: ["خطوط بثق متقدمة", "طباعة عالية الدقة", "قص ولحام دقيق", "فحص الجودة", "تعبئة وشحن آمن"] },
    quality: { title: "الجودة في كل طبقة.", text: "نطبق ضوابط وفحوصات دقيقة عبر كل مراحل الإنتاج، حتى يطابق كل طلب المواصفات التي يعتمد عليها شركاؤنا.", checks: ["مواد خام مختارة بعناية", "ضوابط سماكة أثناء الإنتاج", "اختبارات بصرية وميكانيكية", "فحص نهائي قابل للتتبع"] },
    why: { title: "شريك موثوق من المواصفات إلى التسليم.", items: ["جودة فائقة", "تسليم سريع", "جاهزون للتصدير", "تصنيع مخصص", "فريق ذو خبرة", "أسعار تنافسية"] },
    stats: [["+25", "عاماً من الخبرة"], ["+500", "عميل"], ["+120", "موظف"], ["+20", "دولة نصدر إليها"]],
    gallery: { title: "من داخل الدولية", text: "نظرة أقرب إلى الأفراد والتكنولوجيا والعناية خلف كل عبوة نهائية." },
    contact: { title: "لنصنع حل التغليف المناسب.", text: "أخبرنا عن مشروعك وسيتواصل معك فريقنا التجاري قريباً.", address: "162 Maqtorem Compound،\nمدينة العاشر من رمضان،\nطريق بلبيس، مصر", form: ["الاسم بالكامل", "البريد الإلكتروني للشركة", "رقم الهاتف", "رسالتك"], send: "إرسال الطلب" },
    footer: "تغليف بولي إيثيلين مصري، صُنع للأداء."
  }
};

export { images };
