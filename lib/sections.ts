export const sections = [
  { slug: "about", anchor: "about", en: { title: "About Us", summary: "Get to know AL DAWLIA and our polyethylene packaging manufacturing capabilities." }, ar: { title: "عن الشركة", summary: "تعرّف على الدولية للمواد البلاستيكية وقدراتنا في تصنيع حلول تغليف البولي إيثيلين." } },
  { slug: "why-choose-us", anchor: "why-us", en: { title: "Why Choose Us", summary: "Consistent quality, on-time delivery, tailored specifications and competitive pricing." }, ar: { title: "لماذا الدولية؟", summary: "ثبات الجودة، والتسليم في الموعد، ومواصفات تناسب مصنعك، وأسعار مناسبة." } },
  { slug: "products", anchor: "products", en: { title: "Our Products", summary: "Explore our bags, film rolls and packaging solutions, with specifications and applications." }, ar: { title: "منتجاتنا", summary: "اكتشف الأكياس ورولات الأفلام وحلول التغليف مع المواصفات الفنية والاستخدامات." } },
  { slug: "production-process", anchor: "production-process", en: { title: "Production Process", summary: "Follow each stage, from raw materials and extrusion to printing, packing and shipping." }, ar: { title: "مراحل الإنتاج", summary: "تعرّف على مراحل التصنيع من المواد الخام والبثق إلى الطباعة والتعبئة والشحن." } },
  { slug: "production-lines", anchor: "production", en: { title: "Production Lines", summary: "Discover the equipment and production lines behind our packaging solutions." }, ar: { title: "خطوط الإنتاج", summary: "اكتشف المعدات وخطوط التصنيع التي نعتمد عليها لإنتاج حلول التغليف." } },
  { slug: "quality", anchor: "quality", en: { title: "Quality", summary: "Learn about our quality controls and commitment to consistent product performance." }, ar: { title: "الجودة", summary: "تعرّف على ضوابط الجودة والتزامنا بثبات مواصفات المنتجات وأدائها." } },
  { slug: "export", anchor: "export", en: { title: "Export", summary: "Explore our export capabilities, shipping options and packaging for international markets." }, ar: { title: "التصدير", summary: "اكتشف قدراتنا التصديرية وخيارات الشحن والتغليف للأسواق الدولية." } },
  { slug: "gallery", anchor: "gallery", en: { title: "Gallery", summary: "Take a closer look at our factory, production equipment and products." }, ar: { title: "المعرض", summary: "شاهد صور المصنع ومعدات الإنتاج والمنتجات وتعرّف على تفاصيل العمل عن قرب." } },
] as const;

export function getSection(slug: string) {
  return sections.find((section) => section.slug === slug);
}
