import VisitSource from "@/components/visit-source";
import { SiteHeader } from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { ReactNode, Suspense } from "react";

type Props = {
    children: ReactNode;
    params: Promise<{
        locale: string;
    }>;
};

export default async function LocaleLayout({
    children,
    params,
}: Props) {
    const { locale } = await params;

    const isArabic = locale === "ar";

    return (
        <div
            dir={isArabic ? "rtl" : "ltr"}
            lang={isArabic ? "ar" : "en"}
            className={isArabic ? "font-arabic" : ""}
        >
            <Suspense fallback={null}><SiteHeader /></Suspense>
            <VisitSource />
            {children}
            <SiteFooter locale={isArabic ? "ar" : "en"} />
        </div>
    );
}