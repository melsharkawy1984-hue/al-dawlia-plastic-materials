import {
    Package,
    Factory,
    Printer,
    Scissors,
    Boxes,
    Ship,
} from "lucide-react";

import { type Locale } from "@/lib/content";

type ProductionProcessProps = {
    locale: Locale;
};

const steps = {
    en: [
        {
            icon: Package,
            image: "/images/products/raw-material-illustration.png",
            title: "Raw Materials",
            description:
                "Carefully selected premium polyethylene raw materials from trusted suppliers.",
        },
        {
            icon: Factory,
            image: "/images/process/extrusion.jpg",
            title: "Film Extrusion",
            description:
                "Advanced Italian extrusion lines ensure uniform thickness, consistent quality, and reliable performance.",
        },
        {
            icon: Printer,
            image: "/images/process/printing.jpg",
            title: "Printing",
            comingSoon: true,
            description:
                "High-resolution printing with vibrant colors and durable ink technology.",
        },
        {
            icon: Scissors,
            image: "/images/products/pe-film-illustration.png",
            title: "Cutting & Sealing",
            description:
                "Precision cutting and sealing for customized product dimensions and specifications.",
        },
        {
            icon: Boxes,
            image: "/images/products/shrink-film-illustration.png",
            title: "Packing",
            description:
                "Every product is inspected and packed according to the required specifications and quality standards.",
        },
        {
            icon: Ship,
            image: "/images/products/stretch-film-illustration.png",
            title: "Worldwide Export",
            description:
                "Reliable logistics and export solutions serving customers and markets around the world.",
        },
    ],

    ar: [
        {
            icon: Package,
            image: "/images/products/raw-material-illustration.png",
            title: "المواد الخام",
            description:
                "مواد خام من البولي إيثيلين عالية الجودة يتم اختيارها بعناية من موردين موثوقين.",
        },
        {
            icon: Factory,
            image: "/images/process/extrusion.jpg",
            title: "بثق الفيلم البلاستيكي",
            description:
                "خطوط بثق إيطالية متطورة تضمن انتظام السماكة وجودة المنتج وثبات الأداء.",
        },
        {
            icon: Printer,
            image: "/images/process/printing.jpg",
            title: "الطباعة",
            comingSoon: true,
            description:
                "طباعة عالية الدقة بألوان زاهية وتقنيات أحبار متطورة لضمان جودة وثبات الطباعة.",
        },
        {
            icon: Scissors,
            image: "/images/products/pe-film-illustration.png",
            title: "القص واللحام",
            description:
                "عمليات قص ولحام دقيقة لإنتاج المنتجات وفقًا للأبعاد والمواصفات المطلوبة.",
        },
        {
            icon: Boxes,
            image: "/images/products/shrink-film-illustration.png",
            title: "التعبئة والتغليف",
            description:
                "يتم فحص كل منتج وتعبئته وفقًا للمواصفات المطلوبة ومعايير الجودة.",
        },
        {
            icon: Ship,
            image: "/images/products/stretch-film-illustration.png",
            title: "التصدير العالمي",
            description:
                "حلول لوجستية وشحن موثوقة لخدمة العملاء والأسواق في مختلف أنحاء العالم.",
        },
    ],
};

export default function ProductionProcess({
    locale,
}: ProductionProcessProps) {
    const isArabic = locale === "ar";
    const currentSteps = steps[locale];

    return (
        <section
            id="process"
            className={`overflow-hidden bg-[#FCFCF7] py-28 ${isArabic ? "font-arabic" : ""
                }`}
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="text-center">

                    <span className="font-bold uppercase tracking-[0.35em] text-orange-500">
                        {isArabic
                            ? "مراحل الإنتاج"
                            : "Production Process"}
                    </span>

                    <h2 className="mt-5 text-5xl font-black text-slate-900">

                        {isArabic ? (
                            <>
                                من المادة الخام
                                <br />
                                إلى التسليم العالمي
                            </>
                        ) : (
                            <>
                                From Raw Material
                                <br />
                                To Global Delivery
                            </>
                        )}

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">

                        {isArabic
                            ? "تمر جميع مراحل الإنتاج بإجراءات دقيقة لمراقبة الجودة لضمان تقديم منتجات تغليف من البولي إيثيلين تتميز بالجودة والأداء والموثوقية."
                            : "Every production stage follows strict quality procedures to guarantee reliable polyethylene packaging products with consistent performance."}

                    </p>

                </div>

                {/* Timeline */}

                <div className="relative mt-24">

                    {/* Timeline Line */}

                    <div
                        className={`absolute top-0 h-full w-[6px] rounded-full bg-gradient-to-b from-orange-400 via-orange-500 to-orange-300 shadow-[0_0_30px_rgba(35,131,102,.45)] lg:left-1/2 lg:-translate-x-1/2 ${isArabic
                                ? "right-6 lg:right-auto"
                                : "left-6"
                            }`}
                    />

                    <div className="space-y-20">

                        {currentSteps.map((step, index) => {

                            const Icon = step.icon;

                            return (

                                <div
                                    key={step.title}
                                    data-aos="fade-up"
                                    className={`flex flex-col gap-8 lg:flex-row ${index % 2 === 0
                                            ? "lg:flex-row"
                                            : "lg:flex-row-reverse"
                                        }`}
                                >

                                    {/* Card */}

                                    <div className="flex-1">

                                        <div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-[#FCFCF7] p-8 shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,.18)]">

                                            {/* Number */}

                                            <span
                                                className={`absolute top-6 text-8xl font-black text-slate-100 ${isArabic
                                                        ? "left-8"
                                                        : "right-8"
                                                    }`}
                                            >
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            {/* Image */}

                                            <div className="relative overflow-hidden rounded-2xl">

                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    className="h-60 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                                />

                                                {step.image.includes("illustration") && <span className="absolute bottom-2 start-2 rounded bg-slate-950/80 px-2 py-1 text-xs text-white">{isArabic ? "صورة توضيحية" : "Illustrative image"}</span>}
                                                {/* Coming Soon */}

                                                {step.comingSoon && (
                                                    <div
                                                        className={`absolute top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg ${isArabic
                                                                ? "right-5"
                                                                : "left-5"
                                                            }`}
                                                    >
                                                        {isArabic
                                                            ? "قريبًا"
                                                            : "Coming Soon"}
                                                    </div>
                                                )}

                                            </div>

                                            {/* Icon */}

                                            <div className="mb-6 mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
                                                <Icon size={30} />
                                            </div>

                                            {/* Title */}

                                            <h3 className="text-3xl font-bold text-slate-900">
                                                {step.title}
                                            </h3>

                                            {/* Description */}

                                            <p className="mt-4 leading-8 text-slate-600">
                                                {step.description}
                                            </p>

                                        </div>

                                    </div>

                                    {/* Timeline Circle */}

                                    <div className="hidden w-24 items-center justify-center lg:flex">

                                        <div className="relative">

                                            <div className="absolute inset-0 animate-ping rounded-full bg-orange-400 opacity-30" />

                                            <div className="relative h-8 w-8 rounded-full border-4 border-white bg-orange-500 shadow-[0_0_30px_rgba(35,131,102,.8)]" />

                                        </div>

                                    </div>

                                    <div className="flex-1" />

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
}