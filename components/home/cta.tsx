import Link from "next/link";
import { Locale } from "@/lib/content";

type Props = {
    locale: Locale;
};

export default function CTA({ locale }: Props) {
    const isArabic = locale === "ar";

    return (
        <section
            data-aos="zoom-in"
            className="bg-orange-500 py-24"
        >
            <div className="mx-auto max-w-5xl px-6 text-center">

                <h2 className="text-5xl font-black text-white">
                    {isArabic
                        ? "هل أنت مستعد للعمل معنا؟"
                        : "Ready To Work Together?"}
                </h2>

                <p className="mt-8 text-xl leading-9 text-orange-100">
                    {isArabic
                        ? "تواصل مع الدولية للمواد البلاستيكية اليوم واحصل على عرض سعر مخصص لاحتياجاتك من منتجات تغليف البولي إيثيلين."
                        : "Contact AL DAWLIA FOR PLASTIC MATERIALS today and receive a customized quotation for your polyethylene packaging requirements."}
                </p>

                <Link
                    href={
                        isArabic
                            ? "/ar/request-quote"
                            : "/en/request-quote"
                    }
                    className="mt-12 inline-block rounded-2xl bg-white px-10 py-5 text-lg font-bold text-orange-500 transition hover:scale-105"
                >
                    {isArabic
                        ? "اطلب عرض سعر مجاني"
                        : "Request a Free Quote"}
                </Link>

            </div>
        </section>
    );
}