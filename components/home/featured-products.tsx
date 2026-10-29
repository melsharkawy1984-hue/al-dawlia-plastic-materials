"use client";

import Link from "next/link";
import { getProducts } from "@/lib/products";
import type { Locale } from "@/lib/content";

type FeaturedProductsProps = {
    locale: Locale;
};

export default function FeaturedProducts({
    locale,
}: FeaturedProductsProps) {
    const isArabic = locale === "ar";

    const products = getProducts(locale);

    return (
        <section
            data-aos="zoom-in"
            className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-28"
        >
            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-[0.35em] text-orange-600">
                        {isArabic ? "منتجاتنا" : "Our Products"}
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900 md:text-6xl">
                        {isArabic ? "حلول تغليف" : "Premium Packaging"}

                        <span className="block text-orange-500">
                            {isArabic ? "متميزة" : "Solutions"}
                        </span>
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-slate-600">
                        {isArabic
                            ? "حلول تغليف عالية الجودة من البولي إيثيلين يتم تصنيعها باستخدام تقنيات إنتاج متقدمة للاستخدامات الصناعية والتجارية والغذائية."
                            : "High-quality polyethylene packaging manufactured using advanced production technology for industrial, commercial and food packaging applications."
                        }
                    </p>

                </div>

                {/* Products */}

                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

                    {products.map((product) => (

                        <Link
                            key={product.slug}
                            href={`/${locale}/products/${product.slug}`}
                            className="group overflow-hidden rounded-[30px] border border-slate-200 bg-[#FCFCF7] shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
                        >

                            <div className="relative overflow-hidden">

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                <div className="absolute bottom-5 left-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
                                    {isArabic ? "متميز" : "Premium"}
                                </div>

                            </div>

                            <div className="p-7">

                                <h3 className="text-2xl font-black text-slate-900 transition group-hover:text-orange-500">
                                    {product.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {product.description}
                                </p>

                                <div className="mt-8 flex items-center justify-between">

                                    <span className="font-bold text-orange-500 transition group-hover:translate-x-2">
                                        {isArabic
                                            ? "اكتشف المزيد ←"
                                            : "Discover More →"
                                        }
                                    </span>

                                    <div className="h-10 w-10 rounded-full bg-orange-100 transition duration-500 group-hover:bg-orange-500" />

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    );
}