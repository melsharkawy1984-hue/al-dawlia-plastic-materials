import { ReactNode } from "react";

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
            {children}
        </div>
    );
}