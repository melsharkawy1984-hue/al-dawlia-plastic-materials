import ContactForm from "@/components/contact-form";
import Link from "next/link";
import type { Locale } from "@/lib/content";

type Props = {
    params: Promise<{
        locale: string;
    }>;
    searchParams: Promise<{
        product?: string;
    }>;
};

export default async function RequestQuotePage({
    params,
    searchParams,
}: Props) {
    const { locale } = await params;
    const { product } = await searchParams;

    const currentLocale: Locale =
        locale === "ar" ? "ar" : "en";

    const isArabic = currentLocale === "ar";

    const t = isArabic
        ? {
            eyebrow: "تواصل مع فريق المبيعات",
            title: "اطلب عرض سعر",
            description:
                "أخبرنا عن احتياجاتك من منتجات تغليف البولي إيثيلين وسيتواصل معك فريق التصدير لدينا قريبًا.",

            company: "اسم الشركة",
            contactPerson: "اسم مسؤول الاتصال",
            email: "البريد الإلكتروني",
            phone: "رقم الهاتف",
            country: "الدولة",
            product: "المنتج المطلوب",
            quantity: "الكمية التقديرية",
            message: "رسالتك",
            send: "إرسال الطلب",

            contactInformation: "معلومات الاتصال",
            emailLabel: "البريد الإلكتروني",
            phoneLabel: "الهاتف",
            whatsappLabel: "واتساب",
            whatsappChat: "تواصل عبر واتساب",

            immediateTitle: "تحتاج إلى مساعدة فورية؟",
            immediateText:
                "فريق مبيعات التصدير لدينا جاهز لمساعدتك في اختيار المنتجات والمواصفات وعروض الأسعار.",
            whatsappButton: "تواصل معنا عبر واتساب",
        }
        : {
            eyebrow: "CONTACT OUR SALES TEAM",
            title: "Request a Quote",
            description:
                "Tell us about your polyethylene packaging requirements and our export team will contact you shortly.",

            company: "Company Name",
            contactPerson: "Contact Person",
            email: "Email Address",
            phone: "Phone Number",
            country: "Country",
            product: "Requested Product",
            quantity: "Estimated Quantity",
            message: "Message",
            send: "Send Request",

            contactInformation: "Contact Information",
            emailLabel: "Email",
            phoneLabel: "Phone",
            whatsappLabel: "WhatsApp",
            whatsappChat: "Chat on WhatsApp",

            immediateTitle: "Need Immediate Assistance?",
            immediateText:
                "Our export sales team is ready to assist with product selection, specifications and quotations.",
            whatsappButton: "Contact via WhatsApp",
        };

    return (
        <main
            dir={isArabic ? "rtl" : "ltr"}
            className={`bg-slate-50 ${isArabic ? "font-arabic" : ""}`}
        >
            {/* Hero */}

            <section className="bg-slate-950 py-24">
                <div className="mx-auto max-w-7xl px-6">

                    <span className="font-bold uppercase tracking-[0.35em] text-orange-400">
                        {t.eyebrow}
                    </span>

                    <h1 className="mt-6 text-5xl font-black text-white">
                        {t.title}
                    </h1>

                    <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                        {t.description}
                    </p>

                </div>
            </section>

            {/* Content */}

            <section className="py-20">

                <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">

                    {/* Form */}

                    <div className="rounded-3xl bg-[#FCFCF7] p-10 shadow-xl lg:col-span-2">

                        <ContactForm locale={currentLocale} product={product} />

                    </div>

                    {/* Sidebar */}

                    <div className="space-y-6">

                        <div className="rounded-3xl bg-[#FCFCF7] p-8 shadow-xl">

                            <h3 className="text-2xl font-bold text-slate-900">
                                {t.contactInformation}
                            </h3>

                            <div className="mt-8 space-y-6">

                                <div>

                                    <p className="text-sm uppercase text-orange-500">
                                        {t.emailLabel}
                                    </p>

                                    <a
                                        href="mailto:info@aldawlia-plastic.com"
                                        className="mt-2 block font-semibold text-slate-700"
                                    >
                                        info@aldawlia-plastic.com
                                    </a>

                                </div>

                                <div>

                                    <p className="text-sm uppercase text-orange-500">
                                        {t.phoneLabel}
                                    </p>

                                    <a
                                        href="https://wa.me/2010975131375"
                                        dir="ltr"
                                        className="mt-2 block font-semibold text-slate-700"
                                    >
                                        +2010975131375
                                    </a>

                                </div>

                                <div>

                                    <p className="text-sm uppercase text-orange-500">
                                        {t.whatsappLabel}
                                    </p>

                                    <a
                                        href="https://wa.me/2010975131375"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 block font-semibold text-green-600"
                                    >
                                        {t.whatsappChat}
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div className="rounded-3xl bg-orange-500 p-8 text-white">

                            <h3 className="text-2xl font-bold">
                                {t.immediateTitle}
                            </h3>

                            <p className="mt-5 leading-8">
                                {t.immediateText}
                            </p>

                            <Link
                                href="https://wa.me/2010975131375"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-block rounded-xl bg-[#FCFCF7] px-6 py-4 font-bold text-orange-500"
                            >
                                {t.whatsappButton}
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}