"use client";

import { useEffect, useState } from "react";

import { type Locale } from "@/lib/content";

function Counter({
    target,
    suffix = "",
}: {
    target: number;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let current = 0;

        const step = Math.ceil(target / 50);

        const timer = setInterval(() => {
            current += step;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            setCount(current);
        }, 30);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
}

type StatsProps = {
    locale: Locale;
};

export default function Stats({ locale }: StatsProps) {
    const isArabic = locale === "ar";

    const items = [
        {
            number: 10,
            suffix: "+",
            label: isArabic ? "سنوات من الخبرة" : "Years Experience",
        },
        {
            number: 500,
            suffix: "+",
            label: isArabic ? "عميل" : "Customers",
        },
        {
            number: 15,
            suffix: "+",
            label: isArabic ? "دولة للتصدير" : "Export Countries",
        },
        {
            number: 5000,
            suffix: "+",
            label: isArabic ? "طن سنويًا" : "Tons / Year",
        },
    ];

    return (
        <section
            className={`relative z-30 -mt-1 pb-20 ${isArabic ? "font-arabic" : ""
                }`}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div
                    className={`grid grid-cols-2 overflow-hidden rounded-[32px] border border-white/40 bg-white/90 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:grid-cols-4 ${isArabic ? "direction-rtl" : ""
                        }`}
                >
                    {items.map((item, index) => (
                        <div
                            key={item.label}
                            className={`border-slate-100 p-10 text-center transition duration-300 hover:bg-orange-50 ${index % 2 !== 1
                                    ? "border-r"
                                    : ""
                                } lg:border-r ${index === items.length - 1
                                    ? "lg:border-r-0"
                                    : ""
                                }`}
                        >
                            <h3 className="text-5xl font-black text-orange-500">
                                <Counter
                                    target={item.number}
                                    suffix={item.suffix}
                                />
                            </h3>

                            <p className="mt-3 font-semibold text-slate-600">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}