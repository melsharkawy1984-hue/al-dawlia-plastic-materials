import { type Locale } from "@/lib/content";

type Props = {
    locale: Locale;
};

export default function ProductionLines({ locale }: Props) {

    const lines =
        locale === "ar"
            ? [
                {
                    title: "تغذية المواد الخام",
                    image: "/images/factory/line-01.jpg",
                    description:
                        "يتم اختيار وتجهيز خامات البولي إيثيلين عالية الجودة بعناية قبل دخولها إلى مرحلة البثق.",
                },
                {
                    title: "بثق الفيلم البلاستيكي",
                    image: "/images/factory/machine-01.jpg",
                    description:
                        "تضمن تقنية البثق الإيطالية المتقدمة الحصول على سماكة موحدة وجودة عالية للمنتج النهائي.",
                },
                {
                    title: "القص والتشطيب",
                    image: "/images/factory/machine-01.jpg",
                    description:
                        "تعمل ماكينات القص واللحام الأوتوماتيكية على إنتاج أبعاد دقيقة وفقاً لمتطلبات كل طلب.",
                },
                {
                    title: "الفحص والتعبئة",
                    image: "/images/factory/machine-02.jpg",
                    description:
                        "يمر كل منتج بعمليات فحص دقيقة للجودة قبل التعبئة والتجهيز للشحن.",
                },
            ]
            : [
                {
                    title: "Raw Material Feeding",
                    image: "/images/factory/line-01.jpg",
                    description:
                        "Premium polyethylene raw materials are carefully selected and prepared before extrusion.",
                },
                {
                    title: "Film Extrusion",
                    image: "/images/factory/machine-01.jpg",
                    description:
                        "Advanced Italian extrusion technology ensures uniform thickness and superior quality.",
                },
                {
                    title: "Cutting & Finishing",
                    image: "/images/factory/machine-01.jpg",
                    description:
                        "Automatic cutting and sealing machines produce accurate dimensions for every order.",
                },
                {
                    title: "Inspection & Packing",
                    image: "/images/factory/machine-02.jpg",
                    description:
                        "Every product passes strict quality inspection before packaging and shipment.",
                },
            ];

    const isArabic = locale === "ar";

    return (
        <section
            id="production"
            className="bg-slate-900 py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-orange-500/20 px-5 py-2 text-sm font-bold tracking-[0.2em] text-orange-300">
                        {isArabic ? "خطوط الإنتاج" : "PRODUCTION LINES"}
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
                        {isArabic ? (
                            <>
                                خطوط تصنيع
                                <span className="block text-orange-400">
                                    متطورة
                                </span>
                            </>
                        ) : (
                            <>
                                Advanced
                                <span className="block text-orange-400">
                                    Manufacturing Lines
                                </span>
                            </>
                        )}
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-slate-300">
                        {isArabic
                            ? "يتم مراقبة كل مرحلة من مراحل الإنتاج باستخدام أحدث المعدات والتقنيات لضمان جودة ثابتة وحلول تغليف بولي إيثيلين موثوقة."
                            : "Every production stage is monitored using modern machinery to guarantee consistent quality and reliable polyethylene packaging solutions."}
                    </p>

                </div>

                {[
                    {
                        id: "polyethylene-line",
                        title: isArabic ? "خط إنتاج أفلام البولي إيثيلين" : "Polyethylene Film Production Line",
                        stages: lines,
                    },
                    {
                        id: "promea-cast-film",
                        title: "Promea Cast Film",
                        stages: (isArabic
                            ? [
                                { number: 1, title: "تجهيز الخط", description: "نظرة عامة على تجهيزات خط الكاست." },
                                { number: 2, title: "تشكيل الفيلم", description: "تشكيل طبقة الفيلم على الأسطوانة." },
                                { number: 4, title: "مرور الفيلم", description: "انتقال الفيلم عبر مجموعة الأسطوانات." },
                                { number: 3, title: "لف الرولات", description: "تجميع الفيلم في رولات بعد التشكيل." },
                            ]
                            : [
                                { number: 1, title: "Line Setup", description: "An overview of the cast film equipment." },
                                { number: 2, title: "Film Forming", description: "Forming the film layer on the roller." },
                                { number: 4, title: "Film Handling", description: "Guiding the film through the roller assembly." },
                                { number: 3, title: "Roll Winding", description: "Collecting the formed film into rolls." },
                            ]).map((stage) => ({ ...stage, image: `/images/factory/promea-cast-film-${stage.number}.jpg` })),
                    },
                ].map((series, seriesIndex) => (
                    <section key={series.id} aria-labelledby={`${series.id}-title`} className={seriesIndex === 0 ? "" : "mt-28 border-t border-white/15 pt-24"}>
                        <div className="mb-16 text-center">
                            <span className="text-sm font-bold text-orange-300">{isArabic ? `خط الإنتاج ${seriesIndex + 1}` : `Production Line ${seriesIndex + 1}`}</span>
                            <h3 id={`${series.id}-title`} className="mt-4 text-3xl font-black text-white md:text-4xl">{series.title}</h3>
                        </div>
                        <div className="space-y-24">
                            {series.stages.map((stage, index) => (
                                <div key={stage.title} data-aos="fade-up" className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                                    <div className="group overflow-hidden rounded-[32px] shadow-2xl">
                                        <img src={stage.image} alt={stage.title} loading="lazy" className={`aspect-[3/2] w-full transition duration-700 group-hover:scale-105 ${seriesIndex === 1 ? "bg-white object-contain" : "object-cover"}`} />
                                    </div>
                                    <div>
                                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-black text-white shadow-lg">{index + 1}</div>
                                        <h4 className="text-3xl font-black text-white md:text-4xl">{stage.title}</h4>
                                        <p className="mt-6 text-lg leading-9 text-slate-300">{stage.description}</p>
                                        <div className="mt-8 h-1 w-28 rounded-full bg-orange-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

            </div>
        </section>
    );
}