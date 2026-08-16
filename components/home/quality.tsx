import {
    Award,
    BadgeCheck,
    Factory,
    Globe2,
    ShieldCheck,
    Utensils,
} from "lucide-react";

import { content, type Locale } from "@/lib/content";

type Props = {
    locale: Locale;
};

export default function Quality({ locale }: Props) {
    const isArabic = locale === "ar";

    const qualityItems = isArabic
        ? [
            {
                icon: Award,
                title: "معايير جودة ISO",
                description:
                    "تتبع عمليات الإنتاج لدينا إجراءات صارمة لإدارة الجودة مصممة لضمان منتجات ثابتة وموثوقة.",
            },
            {
                icon: Utensils,
                title: "خامات مناسبة للمواد الغذائية",
                description:
                    "خامات بولي إيثيلين مختارة بعناية ومناسبة لتطبيقات تغليف المواد الغذائية والمنتجات الاستهلاكية.",
            },
            {
                icon: Factory,
                title: "تكنولوجيا إيطالية",
                description:
                    "تضمن تقنيات البثق الإيطالية المتقدمة ثبات جودة الفيلم والتحكم الدقيق في السماكة وكفاءة الإنتاج.",
            },
            {
                icon: ShieldCheck,
                title: "مراقبة الجودة",
                description:
                    "يتم إجراء فحوصات الجودة طوال مراحل الإنتاج للحفاظ على المواصفات والأداء بشكل ثابت.",
            },
            {
                icon: BadgeCheck,
                title: "تصنيع مخصص",
                description:
                    "يمكن تصنيع المنتجات وفقاً لمتطلبات العملاء من حيث المقاسات والسماكات والألوان والاستخدامات المختلفة.",
            },
            {
                icon: Globe2,
                title: "جودة مخصصة للتصدير",
                description:
                    "يتم تجهيز منتجاتنا لتلبية متطلبات العملاء والأسواق المحلية والدولية وأسواق التصدير.",
            },
        ]
        : [
            {
                icon: Award,
                title: "ISO Quality Standards",
                description:
                    "Our production processes follow strict quality management procedures designed to ensure consistent and reliable products.",
            },
            {
                icon: Utensils,
                title: "Food Grade Materials",
                description:
                    "Selected polyethylene materials suitable for demanding food and consumer packaging applications.",
            },
            {
                icon: Factory,
                title: "Italian Technology",
                description:
                    "Advanced Italian extrusion technology provides excellent film consistency, thickness control and production efficiency.",
            },
            {
                icon: ShieldCheck,
                title: "Quality Control",
                description:
                    "Quality checks are performed throughout production to maintain consistent specifications and product performance.",
            },
            {
                icon: BadgeCheck,
                title: "Custom Manufacturing",
                description:
                    "Products can be manufactured according to customer requirements, dimensions, thicknesses, colors and applications.",
            },
            {
                icon: Globe2,
                title: "Export Quality",
                description:
                    "Our products are prepared to meet the requirements of local and international customers and export markets.",
            },
        ];

    return (
        <section
            id="quality"
            className="relative overflow-hidden bg-slate-950 py-28"
        >
            {/* Background Effects */}

            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />

            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[150px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="font-bold tracking-[0.25em] text-orange-400">
                        {isArabic
                            ? "الجودة والاعتمادات"
                            : "QUALITY & CERTIFICATIONS"}
                    </span>

                    <h2 className="mt-5 text-5xl font-black leading-tight text-white md:text-6xl">
                        {isArabic ? (
                            <>
                                جودة يمكنك
                                <span className="block text-orange-400">
                                    الوثوق بها
                                </span>
                            </>
                        ) : (
                            <>
                                Quality You Can
                                <span className="block text-orange-400">
                                    Trust
                                </span>
                            </>
                        )}
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-slate-300">
                        {isArabic
                            ? "بدءاً من اختيار المواد الخام وحتى التعبئة النهائية، تتم مراقبة كل مرحلة من مراحل التصنيع بعناية لضمان جودة ثابتة وأداء موثوق."
                            : "From raw materials to final packaging, every stage of our manufacturing process is carefully controlled to deliver consistent quality and reliable performance."}
                    </p>
                </div>

                {/* Quality Commitment */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="mx-auto mt-16 max-w-5xl"
                >
                    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl md:p-10">

                        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-500/10 blur-[100px]" />

                        <div
                            className={`relative flex flex-col items-center gap-8 text-center md:flex-row ${isArabic ? "md:text-right" : "md:text-left"
                                }`}
                        >

                            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-orange-500 text-white shadow-[0_0_40px_rgba(249,115,22,.35)]">
                                <Award size={48} strokeWidth={1.8} />
                            </div>

                            <div className="flex-1">

                                <span className="text-sm font-bold tracking-[0.2em] text-orange-400">
                                    {isArabic
                                        ? "التزامنا بالجودة"
                                        : "QUALITY COMMITMENT"}
                                </span>

                                <h3 className="mt-3 text-3xl font-black text-white">
                                    {isArabic
                                        ? "معايير جودة عالمية"
                                        : "International Quality Standards"}
                                </h3>

                                <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                                    {isArabic
                                        ? "نلتزم بتطبيق إجراءات صارمة للجودة في جميع عمليات التصنيع، بدءاً من اختيار المواد الخام والبثق وحتى التشطيب والفحص والتعبئة."
                                        : "We are committed to maintaining rigorous quality procedures across our manufacturing operations, from material selection and extrusion to finishing, inspection and packing."}
                                </p>

                            </div>

                            <div className="shrink-0 rounded-2xl border border-orange-400/20 bg-orange-500/10 px-7 py-5 text-center">

                                <div className="text-3xl font-black text-orange-400">
                                    ISO
                                </div>

                                <div className="mt-1 text-sm font-semibold text-slate-300">
                                    {isArabic
                                        ? "معايير الجودة"
                                        : "Quality Standards"}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* Quality Cards */}

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {qualityItems.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 80}
                                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-orange-400/30 hover:bg-white/[0.09] hover:shadow-[0_25px_70px_rgba(0,0,0,.35)]"
                            >

                                {/* Glow */}

                                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />

                                {/* Icon */}

                                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400 transition-all duration-500 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(249,115,22,.4)]">
                                    <Icon size={30} strokeWidth={1.8} />
                                </div>

                                {/* Content */}

                                <h3 className="mt-7 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-400">
                                    {item.description}
                                </p>

                                {/* Bottom Accent */}

                                <div className="mt-7 h-1 w-12 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-24" />

                            </div>
                        );
                    })}

                </div>

                {/* Bottom Statement */}

                <div
                    data-aos="fade-up"
                    className="mt-16 text-center"
                >
                    <p className="text-sm font-semibold tracking-[0.2em] text-slate-500">
                        {isArabic
                            ? "الثبات • الموثوقية • الأداء • الجودة"
                            : "Consistency • Reliability • Performance • Quality"}
                    </p>
                </div>

            </div>
        </section>
    );
}