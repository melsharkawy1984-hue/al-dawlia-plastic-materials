import {
    Globe2,
    Ship,
    Truck,
    PackageCheck,
} from "lucide-react";

import { type Locale } from "@/lib/content";

type Props = {
    locale: Locale;
};

export default function ExportSection({ locale }: Props) {
    const isArabic = locale === "ar";

    const items = isArabic
        ? [
            {
                icon: Globe2,
                title: "15+ دولة للتصدير",
            },
            {
                icon: Ship,
                title: "الشحن البحري",
            },
            {
                icon: Truck,
                title: "النقل البري",
            },
            {
                icon: PackageCheck,
                title: "تغليف آمن",
            },
        ]
        : [
            {
                icon: Globe2,
                title: "15+ Export Countries",
            },
            {
                icon: Ship,
                title: "Sea Freight",
            },
            {
                icon: Truck,
                title: "Land Transportation",
            },
            {
                icon: PackageCheck,
                title: "Secure Packaging",
            },
        ];

    return (
        <section
            id="export"
            data-aos="zoom-in-up"
            className="bg-slate-50 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Content */}

                    <div>

                        <span className="font-bold tracking-[0.3em] text-orange-500">
                            {isArabic ? "التصدير" : "EXPORT"}
                        </span>

                        <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
                            {isArabic ? (
                                <>
                                    جودة تغليف مصرية
                                    <span className="block text-orange-500">
                                        تصل إلى العالم
                                    </span>
                                </>
                            ) : (
                                <>
                                    Exporting Premium Packaging
                                    <span className="block text-orange-500">
                                        Worldwide
                                    </span>
                                </>
                            )}
                        </h2>

                        <p className="mt-8 text-lg leading-9 text-slate-600">
                            {isArabic
                                ? "توفر الدولية منتجات تغليف البولي إيثيلين للعملاء في الشرق الأوسط وأفريقيا والأسواق الدولية، مع الحرص على توفير خدمات لوجستية موثوقة وأسعار تنافسية وجودة ثابتة."
                                : "AL DAWLIA supplies polyethylene packaging products to customers across the Middle East, Africa and international markets while ensuring reliable logistics, competitive pricing and consistent quality."}
                        </p>

                        {/* Export Features */}

                        <div className="mt-12 grid grid-cols-2 gap-6">

                            {items.map((item) => {

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
                                    >

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 transition-all duration-300 group-hover:bg-orange-500">
                                            <Icon className="h-7 w-7 text-orange-500 transition-colors duration-300 group-hover:text-white" />
                                        </div>

                                        <h3 className="mt-5 text-lg font-bold text-slate-900">
                                            {item.title}
                                        </h3>

                                    </div>
                                );

                            })}

                        </div>

                    </div>

                    {/* Image */}

                    <div className="relative">

                        <div className="absolute -inset-4 rounded-[36px] bg-orange-500/10 blur-2xl" />

                        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

                            <img
                                src="/images/factory/export.jpg"
                                alt={
                                    isArabic
                                        ? "تصدير منتجات الدولية"
                                        : "AL DAWLIA Export"
                                }
                                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                            />

                            {/* Image Overlay */}

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-8">

                                <div className="flex items-end justify-between gap-6">

                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                                            {isArabic
                                                ? "الوصول العالمي"
                                                : "GLOBAL REACH"}
                                        </p>

                                        <p className="mt-2 text-2xl font-black text-white">
                                            {isArabic
                                                ? "جاهزون لأسواق العالم"
                                                : "Ready for Global Markets"}
                                        </p>
                                    </div>

                                    <Globe2 className="h-12 w-12 shrink-0 text-orange-400" />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}