import {
    ShieldCheck,
    Clock,
    SlidersHorizontal,
    BadgeDollarSign,
} from "lucide-react";

import { type Locale } from "@/lib/content";

type WhyChooseUsProps = {
    locale: Locale;
};

const items = {
ar: [
{ icon: ShieldCheck, title: "ثبات الجودة", text: "لاحظنا وجود فجوة في السوق تتمثل في عدم ثبات جودة الخامات من مورد إلى آخر، أو حتى بين الطلبات المتكررة من المورد نفسه، مما قد يؤثر بشكل مباشر على جودة المنتج النهائي لشركات التعبئة والتغليف والمصانع الغذائية. ومن هنا، نحرص في شركة الدولية لصناعة البلاستيك على تقديم جودة ثابتة ومواصفات مؤكدة في كل طلب، لضمان ثبات جودة المنتج النهائي واستقرار عملية الإنتاج لدى عملائنا." },
{ icon: Clock, title: "تسليم في الموعد المحدد لكل عميل", text: "نعلم أن موعد وصول الخامة جزء أساسي من استقرار إنتاجك والتزامك بمواعيد تسليم عملائك، لذلك نحرص على تسليم كل طلب في الموعد المتفق عليه، مع متابعة الطلب حتى وصوله. وبالنسبة لنا، العميل هو الأولوية، وأي تأخير نتحمل مسؤوليته ونعمل على التعامل معه لضمان استمرار أعمالك دون تعطّل." },
{ icon: SlidersHorizontal, title: "مواصفات تناسب كل عميل", text: "ندرك أن لكل عميل متطلبات ومواصفات تختلف وفقًا لطبيعة منتجاته واحتياجاته الإنتاجية، لذلك نوفّر حلولًا مرنة يتم تصنيعها وفقًا للمواصفات المطلوبة لكل عميل، بما يشمل السُمك والعرض والأبعاد والمقاسات والمواصفات الفنية، لضمان توافق المنتج النهائي مع متطلبات كل عميل." },
{ icon: BadgeDollarSign, title: "أسعار مناسبة", text: "ندرك أهمية التكلفة بالنسبة لعملائنا، لذلك نحرص على تقديم أسعار مناسبة وفقًا لاحتياجات كل عميل، مع مراعاة الكميات والمواصفات المطلوبة، بما يحقق أفضل قيمة ممكنة مع الحفاظ على مستوى الجودة والموثوقية." }],
en: [
{ icon: ShieldCheck, title: "Consistent Quality", text: "We identified a gap in the market: raw material quality can vary between suppliers and even between repeat orders from the same supplier. This can directly affect the finished products of packaging companies and food manufacturers. At AL DAWLIA, we focus on consistent quality and confirmed specifications in every order to support reliable finished products and stable production for our customers." },
{ icon: Clock, title: "On-Time Delivery for Every Customer", text: "We know that raw material delivery is essential to stable production and meeting your own customer deadlines. We strive to deliver every order on the agreed date and follow it through to arrival. Our customers come first: we take responsibility for any delay and work to resolve it so your business can continue without disruption." },
{ icon: SlidersHorizontal, title: "Specifications Tailored to Each Customer", text: "Every customer has different requirements depending on their products and production needs. We provide flexible solutions manufactured to your requested specifications, including thickness, width, dimensions, sizes and technical requirements, so the finished product meets your needs." },
{ icon: BadgeDollarSign, title: "Competitive Pricing", text: "We understand the importance of cost. We offer pricing suited to each customer’s needs, taking quantities and specifications into account to deliver the best possible value while maintaining quality and reliability." }],
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
            className={`bg-[#FCFCF7] py-24 ${isArabic ? "font-arabic" : ""
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

                        {isArabic ? "لماذا نحن الخيار الأفضل بالنسبة لمصنعك" : "Why We Are the Best Choice for Your Factory"}

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

                <div className="mt-20 grid gap-8 md:grid-cols-2">

                    {currentItems.map((item) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group rounded-3xl border border-slate-200 bg-[#FCFCF7] p-10 shadow-sm transition duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-2xl"
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

                                <p className="mt-4 leading-8 text-slate-600">
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