import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/content";
import { sections } from "@/lib/sections";

const images: Record<typeof sections[number]["slug"], { src: string; ar: string; en: string }> = {
  about: { src: "/images/factory/hero-machine.jpg", ar: "مصنع الدولية للمواد البلاستيكية", en: "AL DAWLIA plastic materials factory" },
  "why-choose-us": { src: "/images/factory/machine-01.jpg", ar: "معدات تصنيع الدولية", en: "AL DAWLIA manufacturing equipment" },
  products: { src: "/images/products/pe-film-rolls.webp", ar: "رولات فيلم البولي إيثيلين", en: "Polyethylene film rolls" },
  "production-process": { src: "/images/process/extrusion.jpg", ar: "مرحلة بثق أفلام البولي إيثيلين", en: "Polyethylene film extrusion" },
  "production-lines": { src: "/images/factory/line-01.jpg", ar: "خط إنتاج داخل مصنع الدولية", en: "Production line at AL DAWLIA" },
  quality: { src: "/images/process/packing.jpg", ar: "تجهيز وتعبئة المنتجات", en: "Product preparation and packing" },
  export: { src: "/images/factory/export.jpg", ar: "تجهيز المنتجات للتصدير", en: "Products prepared for export" },
  gallery: { src: "/images/factory/line-02.jpg", ar: "من داخل مصنع الدولية", en: "Inside the AL DAWLIA factory" },
};

export default function SectionPreviews({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  return (
    <>
      {sections.map((section, index) => {
        const image = images[section.slug];
        return (
          <section
            key={section.slug}
            id={section.anchor}
            aria-labelledby={`${section.anchor}-title`}
            className={`scroll-mt-24 border-t border-slate-100 py-12 md:py-16 ${index % 2 === 0 ? "bg-[#FCFCF7]" : "bg-slate-50"}`}
          >
            <div data-aos="fade-up" data-aos-duration="550" className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-2 md:gap-12 lg:gap-20">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <span aria-hidden="true" className="mb-5 block h-1 w-12 rounded-full bg-orange-500" />
                <h2 id={`${section.anchor}-title`} className="text-3xl font-black leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                  {section[locale].title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
                  {section[locale].summary}
                </p>
                <Link
                  href={`/${locale}/${section.slug}`}
                  aria-label={`${isArabic ? "عرض تفاصيل" : "Explore"} ${section[locale].title}`}
                  className="mt-7 inline-flex items-center gap-3 rounded-xl bg-orange-600 px-6 py-3.5 font-bold text-white shadow-sm transition hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
                >
                  {isArabic ? "اكتشف المزيد" : "Discover More"}
                  <Arrow size={20} aria-hidden="true" />
                </Link>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-3 shadow-lg md:p-4">
                <img
                  src={image.src}
                  alt={image[locale]}
                  width={720}
                  height={480}
                  loading="lazy"
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
