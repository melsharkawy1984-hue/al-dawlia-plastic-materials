import { type Locale } from "@/lib/content";

type AboutProps = {
    locale: Locale;
};

export default function About({ locale }: AboutProps) {
    const isArabic = locale === "ar";

    return (
        <section
            id="about"
            data-aos="fade-up"
            className={`bg-[#FCFCF7] py-28 ${isArabic ? "font-arabic" : ""}`}
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Image */}

                    <div className="relative">

                        <img
                            src="/images/factory/hero-machine.jpg"
                            alt={
                                isArabic
                                    ? "مصنع الدولية للمواد البلاستيكية"
                                    : "AL DAWLIA Factory"
                            }
                            className="h-full w-full rounded-3xl object-cover shadow-2xl"
                        />

                        <div
                            className={`absolute -bottom-8 rounded-3xl bg-orange-500 p-8 text-white shadow-2xl ${isArabic
                                    ? "-left-8"
                                    : "-right-8"
                                }`}
                        >
                            <h3 className="text-5xl font-black">
                                10+
                            </h3>

                            <p className="mt-2 font-semibold">
                                {isArabic
                                    ? "سنوات من الخبرة"
                                    : "Years Experience"}
                            </p>
                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <span className="font-bold uppercase tracking-[0.35em] text-orange-500">
                            {isArabic ? "عن الشركة" : "ABOUT US"}
                        </span>

                        <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">

                            {isArabic ? "نبذة عن الدولية" : "About AL DAWLIA"}

                        </h2>

                        <p className="mt-8 text-lg leading-9 text-slate-600">

                            {isArabic ? "نقدّم لعملائنا من المصانع الغذائية وشركات التعبئة والتغليف حلولًا من مواد البولي إيثيلين، مستندين إلى خبرة تمتد لعشر سنوات في صناعة المواد البلاستيكية، بالاعتماد على أحدث التقنيات الإيطالية والالتزام بمعايير صارمة للجودة. كما أنشأنا مصنعنا وخطوط إنتاجنا الخاصة، لتصبح عمليات التصنيع تحت إدارتنا وإشرافنا المباشر. ومع تزايد عدد عملائنا، نواصل النمو والتوسع لتلبية احتياجات السوق." : "We provide food manufacturers and packaging companies with polyethylene material solutions, drawing on ten years of experience in plastics manufacturing, advanced Italian technology and strict quality standards. We have established our own factory and production lines, bringing manufacturing under our direct management and supervision. As our customer base grows, we continue to expand to meet market needs."}

                        </p>

                        <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-6"><h3 className="text-2xl font-bold text-slate-900">{isArabic ? "رؤيتنا" : "Our Vision"}</h3><p className="mt-4 text-lg leading-9 text-slate-600">{isArabic ? "أن تصبح الدولية الشركة الرائدة في مجال Flexible Packaging، مع التوسع مستقبلًا في العديد من المجالات الأخرى، وبناء حضور قوي في الأسواق المستهدفة، مع الاهتمام دائمًا باحتياجات العميل وتقديم حلول مبتكرة تناسب احتياجات عملائه." : "Our vision is to become a leading company in flexible packaging, expand into other fields in the future and build a strong presence in our target markets, while always focusing on our customers and delivering innovative solutions that meet the needs of their own customers."}</p></div>
{/* Statistics */}

                        <div className="mt-12 grid grid-cols-2 gap-8">

                            <div>
                                <h3 className="text-4xl font-black text-orange-500">
                                    500+
                                </h3>

                                <p className="mt-2 text-slate-600">
                                    {isArabic
                                        ? "عميل"
                                        : "Customers"}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-black text-orange-500">
                                    15+
                                </h3>

                                <p className="mt-2 text-slate-600">
                                    {isArabic
                                        ? "دولة للتصدير"
                                        : "Export Countries"}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-black text-orange-500">
                                    ISO
                                </h3>

                                <p className="mt-2 text-slate-600">
                                    {isArabic
                                        ? "معايير الجودة"
                                        : "Quality Standards"}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-4xl font-black text-orange-500">
                                    24/7
                                </h3>

                                <p className="mt-2 text-slate-600">
                                    {isArabic
                                        ? "دعم العملاء"
                                        : "Customer Support"}
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}