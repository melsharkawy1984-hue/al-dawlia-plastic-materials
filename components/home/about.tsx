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
            className={`bg-white py-28 ${isArabic ? "font-arabic" : ""}`}
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

                            {isArabic ? (
                                <>
                                    الشركة الرائدة في
                                    <br />
                                    حلول تغليف البولي إيثيلين
                                </>
                            ) : (
                                <>
                                    Premium Polyethylene
                                    <br />
                                    Packaging Manufacturer
                                </>
                            )}

                        </h2>

                        <p className="mt-8 text-lg leading-9 text-slate-600">

                            {isArabic ? (
                                <>
                                    الدولية للمواد البلاستيكية هي إحدى الشركات
                                    المصرية المتخصصة في تصنيع حلول تغليف البولي
                                    إيثيلين للأسواق المحلية والدولية.
                                    <br />
                                    <br />
                                    يعمل مصنعنا باستخدام تكنولوجيا بثق إيطالية
                                    متقدمة لإنتاج أفلام وأكياس ورولات البولي
                                    إيثيلين عالية الجودة، بالإضافة إلى حلول
                                    التغليف الصناعية المصممة وفقًا لاحتياجات
                                    العملاء.
                                </>
                            ) : (
                                <>
                                    AL DAWLIA FOR PLASTIC MATERIALS is one of
                                    Egypt's leading manufacturers of polyethylene
                                    packaging solutions.
                                    <br />
                                    <br />
                                    Our factory operates advanced Italian extrusion
                                    technology capable of producing high-quality PE
                                    film, bags, rolls and customized industrial
                                    packaging for local and international markets.
                                </>
                            )}

                        </p>

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