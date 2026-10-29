import MissionValues from "@/components/home/mission-values";
import SectionPreviews from "@/components/home/section-previews";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import CTA from "@/components/home/cta";

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

            <Hero locale={currentLocale} />

            <Stats locale={currentLocale} />

            <SectionPreviews locale={currentLocale} />

            <MissionValues locale={currentLocale} />

            <CTA locale={currentLocale} />

        </main>
    );
}