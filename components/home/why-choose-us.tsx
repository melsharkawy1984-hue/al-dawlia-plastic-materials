import {
    ShieldCheck,
    Factory,
    Globe2,
    Award,
} from "lucide-react";

import { type Locale } from "@/lib/content";

type WhyChooseUsProps = {
    locale: Locale;
};

const items = {
    en: [
        {
            icon: ShieldCheck,
            title: "Premium Quality",
            text: "Manufactured using high-grade raw materials with strict quality control.",
        },
        {
            icon: Factory,
            title: "Modern Production",
            text: "Advanced extrusion and converting lines ensure consistent performance.",
        },
        {
            icon: Globe2,
            title: "Worldwide Export",
            text: "Supplying customers across the Middle East, Africa and Europe.",
        },
        {
            icon: Award,
            title: "Trusted Experience",
            text: "Reliable manufacturing partner with customized packaging solutions.",
        },
    ],

    ar: [
        {
            icon: ShieldCheck,
            title: "جودة فائقة",
            text: "نستخدم مواد خام عالية الجودة مع تطبيق أنظمة صارمة لمراقبة الجودة في جميع مراحل الإنتاج.",
        },
        {
            icon: Factory,
            title: "إنتاج متطور",
            text: "خطوط بثق وتحويل متقدمة تضمن ثبات الجودة والأداء في جميع المنتجات.",
        },
        {
            icon: Globe2,
            title: "تصدير عالمي",
            text: "نورد منتجاتنا للعملاء في الشرق الأوسط وأفريقيا وأوروبا والأسواق الدولية.",
        },
        {
            icon: Award,
            title: "خبرة موثوقة",
            text: "شريك تصنيع موثوق يقدم حلول تغليف مخصصة وفقًا لمتطلبات كل عميل.",
        },
    ],
};

export default function WhyChooseUs({
    locale,
}: WhyChooseUsProps) {
    const isArabic = locale === "ar";
    const currentItems = items[locale];

    return (
        <section
            data-aos="fade-right"
            id="why-us"
            className={`bg-white py-24 ${isArabic ? "font-arabic" : ""
                }`}
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="font-semibold uppercase tracking-[0.3em] text-orange-500">
                        {isArabic
                            ? "لماذا الدولية؟"
                            : "Why Choose Us"}
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">

                        {isArabic ? (
                            <>
                                نبني حلول تغليف عالية الجودة
                                <br />
                                للأسواق العالمية
                            </>
                        ) : (
                            <>
                                Building Quality Packaging
                                <br />
                                For Global Markets
                            </>
                        )}

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">

                        {isArabic ? (
                            <>
                                تقدم الدولية للمواد البلاستيكية حلول تغليف موثوقة
                                من البولي إيثيلين، تجمع بين التكنولوجيا الحديثة
                                والمواد عالية الجودة والخدمة المتميزة للعملاء.
                            </>
                        ) : (
                            <>
                                AL DAWLIA FOR PLASTIC MATERIALS delivers reliable
                                polyethylene packaging solutions combining modern
                                technology, premium materials and exceptional
                                customer service.
                            </>
                        )}

                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {currentItems.map((item) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-2xl"
                            >

                                {/* Icon */}

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition duration-500 group-hover:bg-orange-500">

                                    <Icon className="h-8 w-8 text-orange-600 transition duration-500 group-hover:text-white" />

                                </div>

                                {/* Title */}

                                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                {/* Description */}

                                <p className="mt-4 leading-7 text-slate-600">
                                    {item.text}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}