import { SiteHeader } from "@/components/site-header";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import About from "@/components/home/about";
import WhyChooseUs from "@/components/home/why-choose-us";
import FeaturedProducts from "@/components/home/featured-products";
import ProductionProcess from "@/components/home/production-process";
import ProductionLines from "@/components/home/production-lines";
import Quality from "@/components/home/quality";
import Export from "@/components/home/export";
import Gallery from "@/components/home/gallery";
import CTA from "@/components/home/cta";
import SiteFooter from "@/components/site-footer";

import { type Locale } from "@/lib/content";

type Props = {
    params: Promise<{
        locale: string;
    }>;
};

export default async function HomePage({ params }: Props) {
    const { locale } = await params;

    const currentLocale: Locale =
        locale === "ar" ? "ar" : "en";

    return (
        <main
            dir={currentLocale === "ar" ? "rtl" : "ltr"}
            className={currentLocale === "ar" ? "font-arabic" : ""}
        >
            <SiteHeader />

            <Hero locale={currentLocale} />

            <Stats locale={currentLocale} />

            <About locale={currentLocale} />

            <WhyChooseUs locale={currentLocale} />

            <FeaturedProducts locale={currentLocale} />

            <ProductionProcess locale={currentLocale} />

            <ProductionLines locale={currentLocale} />

            <Quality locale={currentLocale} />

            <Export locale={currentLocale} />

            <Gallery locale={currentLocale} />

            <CTA locale={currentLocale} />

            <SiteFooter locale={currentLocale} />
        </main>
    );
}