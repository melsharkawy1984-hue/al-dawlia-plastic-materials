import Link from "next/link";
import { getProducts } from "@/lib/products";
import type { Locale } from "@/lib/content";

type Props = {
    params: Promise<{
        locale: string;
    }>;
};

export default async function ProductsPage({ params }: Props) {
    const { locale } = await params;

    const currentLocale: Locale =
        locale === "ar" ? "ar" : "en";

    const products = getProducts(currentLocale);

    const isArabic = currentLocale === "ar";

    return (
        <main
            dir={isArabic ? "rtl" : "ltr"}
            className={isArabic ? "font-arabic" : ""}
        >

            {/* Hero */}

            <section className="bg-slate-900 py-28 text-white">

                <div className="mx-auto max-w-7xl px-6 text-center">

                    <p className="font-semibold uppercase tracking-[0.35em] text-orange-400">
                        AL DAWLIA FOR PLASTIC MATERIALS
                    </p>

                    <h1 className="mt-6 text-6xl font-extrabold">
                        {isArabic ? "منتجاتنا" : "Our Products"}
                    </h1>
<p className="mt-3 text-sm text-slate-300">{isArabic ? "صور المنتجات للتوضيح." : "Product images are for illustration."}</p>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                        {isArabic
                            ? "نقدم حلول تغليف متطورة من البولي إيثيلين للأسواق الصناعية والتجارية وأسواق التصدير."
                            : "We manufacture premium polyethylene packaging solutions for industrial, commercial and export markets."
                        }
                    </p>

                </div>

            </section>

            {/* Products */}

            <div className="mx-auto max-w-7xl px-6 py-24 space-y-24">
            {(["blown", "cast"] as const).map((category) => (
            <section key={category} id={`${category}-film`} aria-labelledby={`${category}-title`}>
                <h2 id={`${category}-title`} className="mb-10 border-s-4 border-orange-500 ps-5 text-4xl font-black text-slate-900">{category === "blown" ? (isArabic ? "بالون فيلم" : "Blown Film") : (isArabic ? "كاست فيلم" : "Cast Film")}</h2>

                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

                    {products.filter((product) => (product.category ?? "blown") === category).map((product) => (

                        <article
                            key={product.slug}
                            className="group overflow-hidden rounded-3xl bg-[#FCFCF7] shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={product.slug === "textile-backsheet" ? { clipPath: "inset(0 2px)" } : undefined}
                                    className={`h-64 w-full transition duration-500 group-hover:scale-105 ${product.category === "cast" ? "object-contain bg-white" : "object-cover"}`}
                                />

                            </div>

                            <div className="p-7">

                                <h3 className="text-2xl font-bold text-slate-900">
                                    {product.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {product.description}
                                </p>

                                <Link
                                    href={`/${currentLocale}/products/${product.slug}`}
                                    className="mt-8 inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                                >
                                    {isArabic
                                        ? "اكتشف المزيد ←"
                                        : "Discover More →"
                                    }
                                </Link>

                            </div>

                        </article>

                    ))}

                </div>

            </section>
            ))}
            </div>

            {/* CTA */}

            <section className="bg-orange-500 py-24 text-center text-white">

                <h2 className="text-5xl font-bold">
                    {isArabic
                        ? "هل تبحث عن تغليف مخصص؟"
                        : "Looking for custom packaging?"
                    }
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-xl">
                    {isArabic
                        ? "تواصل مع فريق المبيعات اليوم واحصل على عرض سعر مخصص وفقاً لمواصفاتك."
                        : "Contact our sales team today and receive a customized quotation based on your specifications."
                    }
                </p>

                <Link
                    href={`/${currentLocale}/request-quote`}
                    className="mt-10 inline-block rounded-xl bg-[#FCFCF7] px-8 py-4 text-lg font-bold text-orange-600 transition hover:bg-slate-100"
                >
                    {isArabic
                        ? "اطلب عرض سعر"
                        : "Request a Quote"
                    }
                </Link>

            </section>

        </main>
    );
}