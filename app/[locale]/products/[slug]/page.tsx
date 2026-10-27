import { notFound } from "next/navigation";
import Link from "next/link";
import {
    getProduct,
    getProducts,
} from "@/lib/products";

import type { Locale } from "@/lib/content";

type Props = {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
};

export default async function ProductDetails({ params }: Props) {
    const { locale, slug } = await params;

    const currentLocale: Locale =
        locale === "ar" ? "ar" : "en";

    const isArabic = currentLocale === "ar";

    const product = getProduct(
        currentLocale,
        slug
    );

    if (!product) {
        notFound();
    }

    const productList = getProducts(
        currentLocale
    );

    const relatedProducts = productList
        .filter((item) => item.slug !== product.slug)
        .slice(0, 3);

    return (
        <main
            dir={isArabic ? "rtl" : "ltr"}
            className={isArabic ? "font-arabic" : ""}
        >

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative overflow-hidden bg-slate-950">

                <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-25"
                />

                <div className="absolute inset-0 bg-slate-950/70" />

                <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-6">

                    <div className="max-w-3xl">

                        <div className="mb-6">

                            <Link
                                href={`/${currentLocale}/products`}
                                className="text-orange-400 transition hover:text-orange-300"
                            >
                                {isArabic
                                    ? "← العودة إلى المنتجات"
                                    : "← Back to Products"}
                            </Link>

                        </div>

                        <h1 className="text-6xl font-black text-white">
                            {product.title}
                        </h1>

                        <p className="mt-8 text-xl leading-9 text-slate-300">
                            {product.description}
                        </p>

                        <div className="mt-12 flex flex-wrap gap-5">

                            <Link
                                href={`/${currentLocale}/request-quote?product=${encodeURIComponent(product.title)}`}
                                className="button-primary"
                            >
                                {isArabic
                                    ? "اطلب عرض سعر لهذا المنتج"
                                    : "Request Quote for This Product"}
                            </Link>

                            <a
                                href="https://wa.me/2010975131375"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-ghost"
                            >
                                WhatsApp
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                TECHNICAL SPECIFICATIONS
            ===================================================== */}

            <section className="bg-[#FCFCF7] py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-14">

                        <span className="font-bold uppercase tracking-[0.35em] text-orange-500">
                            {isArabic
                                ? "المواصفات"
                                : "Specifications"}
                        </span>

                        <h2 className="mt-4 text-5xl font-black text-slate-900">
                            {isArabic
                                ? "المواصفات الفنية"
                                : "Technical Specifications"}
                        </h2>

                    </div>

                    <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">

                        <table className="w-full">

                            <tbody>

                                {Object.entries(
                                    product.specifications
                                ).map(([key, value]) => (

                                    <tr
                                        key={key}
                                        className="border-b last:border-b-0"
                                    >

                                        <td className="w-1/3 bg-slate-50 px-8 py-6 font-bold text-slate-800">
                                            {key}
                                        </td>

                                        <td className="px-8 py-6 text-slate-600">
                                            {value}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>


            {/* =====================================================
                APPLICATIONS
            ===================================================== */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-14 text-center">

                        <span className="font-bold uppercase tracking-[0.35em] text-orange-500">
                            {isArabic
                                ? "الاستخدامات"
                                : "Applications"}
                        </span>

                        <h2 className="mt-4 text-5xl font-black text-slate-900">
                            {isArabic
                                ? "استخدامات المنتج"
                                : "Product Applications"}
                        </h2>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        {product.applications.map((item) => (

                            <div
                                key={item}
                                className="rounded-3xl bg-[#FCFCF7] p-10 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >

                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">

                                    <span className="text-4xl">
                                        ✓
                                    </span>

                                </div>

                                <h3 className="text-xl font-bold text-slate-900">
                                    {item}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                RELATED PRODUCTS
            ===================================================== */}

            <section className="bg-[#FCFCF7] py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-14">

                        <span className="font-bold uppercase tracking-[0.35em] text-orange-500">
                            {isArabic
                                ? "منتجات أخرى"
                                : "More Products"}
                        </span>

                        <h2 className="mt-4 text-5xl font-black text-slate-900">
                            {isArabic
                                ? "منتجات ذات صلة"
                                : "Related Products"}
                        </h2>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {relatedProducts.map((item) => (

                            <Link
                                key={item.slug}
                                href={`/${currentLocale}/products/${item.slug}`}
                                className="group overflow-hidden rounded-3xl bg-[#FCFCF7] shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="p-8">

                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600">
                                        {item.description}
                                    </p>

                                    <span className="mt-6 inline-block font-bold text-orange-500">
                                        {isArabic
                                            ? "عرض المنتج ←"
                                            : "View Product →"}
                                    </span>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
}