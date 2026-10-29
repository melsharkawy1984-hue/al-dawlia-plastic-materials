import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import About from "@/components/home/about";
import WhyChooseUs from "@/components/home/why-choose-us";
import ProductionProcess from "@/components/home/production-process";
import ProductionLines from "@/components/home/production-lines";
import Quality from "@/components/home/quality";
import Export from "@/components/home/export";
import Gallery from "@/components/home/gallery";
import CTA from "@/components/home/cta";
import { getSection, sections } from "@/lib/sections";
import type { Locale } from "@/lib/content";

const components = {
  about: About,
  "why-choose-us": WhyChooseUs,
  "production-process": ProductionProcess,
  "production-lines": ProductionLines,
  quality: Quality,
  export: Export,
  gallery: Gallery,
};
type Props = { params: Promise<{ locale: string; section: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section } = await params;
  const item = getSection(section);
  if (!item) return {};
  const text = item[locale === "ar" ? "ar" : "en"];
  return { title: `${text.title} | AL DAWLIA`, description: text.summary };
}

export default async function SectionPage({ params }: Props) {
  const { locale, section } = await params;
  if (!(locale === "ar" || locale === "en") || !Object.prototype.hasOwnProperty.call(components, section)) notFound();
  const currentLocale: Locale = locale;
  const item = getSection(section)!;
  const Content = components[section as keyof typeof components];
  const isArabic = currentLocale === "ar";
  return (
    <main>
      <section className="bg-slate-950 pb-12 pt-40 text-white md:pt-44">
        <div className="mx-auto max-w-7xl px-6">
          <Link href={`/${currentLocale}`} className="text-sm font-semibold text-orange-300 hover:text-orange-200">
            {isArabic ? "العودة إلى الرئيسية" : "Back to Home"}
          </Link>
          <h1 className="mt-5 text-4xl font-black md:text-5xl">{item[currentLocale].title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{item[currentLocale].summary}</p>
        </div>
      </section>
      <Content locale={currentLocale} />
      <nav aria-label={isArabic ? "استكشف الأقسام الأخرى" : "Explore other sections"} className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6">
          {sections.filter((other) => other.slug !== section).map((other) => (
            <Link key={other.slug} href={`/${currentLocale}/${other.slug}`} className="rounded-full border border-slate-200 bg-[#FCFCF7] px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-600 hover:text-orange-700">{other[currentLocale].title}</Link>
          ))}
        </div>
      </nav>
      <CTA locale={currentLocale} />
    </main>
  );
}
