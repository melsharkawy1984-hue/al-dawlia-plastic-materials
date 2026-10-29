import { content, type Locale } from "@/lib/content";

type Props = {
    locale: Locale;
};

export default function ProductionLines({ locale }: Props) {
    const t = content[locale];

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

                {/* Production Lines */}

                <div className="space-y-24">

                    {lines.map((line, index) => (

                        <div
                            key={line.title}
                            data-aos="fade-up"
                            className={`grid items-center gap-16 lg:grid-cols-2 ${index % 2 === 1
                                ? "lg:[&>*:first-child]:order-2"
                                : ""
                                }`}
                        >

                            {/* Image */}

                            <div className="group overflow-hidden rounded-[32px] shadow-2xl">

                                <img
                                    src={line.image}
                                    alt={line.title}
                                    className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                            </div>

                            {/* Content */}

                            <div>

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-black text-white shadow-lg">
                                    {index + 1}
                                </div>

                                <h3 className="text-4xl font-black text-white">
                                    {line.title}
                                </h3>

                                <p className="mt-8 text-lg leading-9 text-slate-300">
                                    {line.description}
                                </p>

                                <div className="mt-10 h-1 w-28 rounded-full bg-orange-500" />

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}