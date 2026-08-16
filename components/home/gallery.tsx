"use client";

import { useState } from "react";

import {
    LayoutGrid,
    Factory,
    Boxes,
} from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import type { Locale } from "@/lib/content";

type GalleryItem = {
    src: string;
    title: string;
    category: "factory" | "products";
};

const galleryItems: GalleryItem[] = [
    // =====================================================
    // FACTORY & PRODUCTION
    // =====================================================

    {
        src: "/images/factory/hero-machine.jpg",
        title: "Production Line",
        category: "factory",
    },
    {
        src: "/images/factory/line-01.jpg",
        title: "Film Extrusion Line",
        category: "factory",
    },
    {
        src: "/images/factory/line-02.jpg",
        title: "Advanced Production Line",
        category: "factory",
    },
    {
        src: "/images/factory/machine-01.jpg",
        title: "Industrial Machinery",
        category: "factory",
    },
    {
        src: "/images/factory/machine-02.jpg",
        title: "Manufacturing Equipment",
        category: "factory",
    },
    {
        src: "/images/factory/export.jpg",
        title: "Packaging & Export",
        category: "factory",
    },

    // =====================================================
    // PACKAGING PRODUCTS
    // =====================================================

    {
        src: "/images/gallery/fb4f303c-b2ef-4428-b3c7-0faf6dea7ac7.JPG",
        title: "Transparent Zip Bags",
        category: "products",
    },
    {
        src: "/images/gallery/391cfded-b653-4c44-a79a-6313838a08a8.JPG",
        title: "Stand-Up Packaging Pouches",
        category: "products",
    },
    {
        src: "/images/gallery/04a54920-a57d-4d41-b8f9-b3aa6d15860a.JPG",
        title: "Clear Food Packaging Bags",
        category: "products",
    },
    {
        src: "/images/gallery/d6db9f61-a0e6-4a31-88e7-c5f9b289d978.JPG",
        title: "Flexible Packaging Bags",
        category: "products",
    },
    {
        src: "/images/gallery/359bacfd-862c-4431-ba21-b012adeb3852.JPG",
        title: "Transparent Storage Bags",
        category: "products",
    },
    {
        src: "/images/gallery/f0f8849d-cd2d-4aa8-94c3-5c961bed0db1.JPG",
        title: "Custom Packaging Solutions",
        category: "products",
    },
    {
        src: "/images/gallery/da2efd33-1658-40b3-9e9c-636cc3d02aea.JPG",
        title: "Flexible Plastic Packaging",
        category: "products",
    },
    {
        src: "/images/gallery/f24b27a5-280f-4394-93f5-6247d4856081.JPG",
        title: "Zip Closure Bags",
        category: "products",
    },
    {
        src: "/images/gallery/9ca19794-20e4-4cce-80e7-be27ef8bcf04.JPG",
        title: "Clear Packaging Solutions",
        category: "products",
    },
    {
        src: "/images/gallery/1a6bea5e-21a4-4e06-a5f4-f4846ef0a834.JPG",
        title: "Polyethylene Packaging Bags",
        category: "products",
    },
    {
        src: "/images/gallery/fcca2535-065a-4333-86d9-71d726fba22c.JPG",
        title: "Food & Retail Packaging",
        category: "products",
    },
    {
        src: "/images/gallery/3651d9b3-2446-4020-bfc4-2ac82067aca7.JPG",
        title: "Custom Printed Packaging",
        category: "products",
    },
    {
        src: "/images/gallery/7bb3e776-919e-42bc-a6fd-b2c4e02b056c.JPG",
        title: "Flexible Polyethylene Bags",
        category: "products",
    },
];

const filters = [
    {
        id: "all",
        label: {
            en: "All",
            ar: "الكل",
        },
        icon: LayoutGrid,
    },
    {
        id: "factory",
        label: {
            en: "Factory & Production",
            ar: "المصنع والإنتاج",
        },
        icon: Factory,
    },
    {
        id: "products",
        label: {
            en: "Packaging Products",
            ar: "منتجات التغليف",
        },
        icon: Boxes,
    },
];

const translations = {
    en: {
        eyebrow: "Our Gallery",
        title: "Factory, Production",
        titleAccent: "& Packaging",
        description:
            "Explore our manufacturing capabilities, production environment and flexible polyethylene packaging solutions.",
        factory: "Factory",
        packaging: "Packaging",
        statement: "Quality • Flexibility • Reliability • Global Reach",
    },

    ar: {
        eyebrow: "معرض الصور",
        title: "المصنع والإنتاج",
        titleAccent: "والتغليف",
        description:
            "اكتشف إمكانياتنا التصنيعية وبيئة الإنتاج وحلول التغليف المرنة المصنوعة من البولي إيثيلين.",
        factory: "المصنع",
        packaging: "التغليف",
        statement: "الجودة • المرونة • الموثوقية • الوصول العالمي",
    },
};

const arabicTitles: Record<string, string> = {
    "Production Line": "خط الإنتاج",
    "Film Extrusion Line": "خط بثق الأفلام",
    "Advanced Production Line": "خط إنتاج متطور",
    "Industrial Machinery": "المعدات الصناعية",
    "Manufacturing Equipment": "معدات التصنيع",
    "Packaging & Export": "التغليف والتصدير",

    "Transparent Zip Bags": "أكياس شفافة بسحاب",
    "Stand-Up Packaging Pouches": "أكياس تغليف واقفة",
    "Clear Food Packaging Bags": "أكياس تغليف غذائية شفافة",
    "Flexible Packaging Bags": "أكياس تغليف مرنة",
    "Transparent Storage Bags": "أكياس تخزين شفافة",
    "Custom Packaging Solutions": "حلول تغليف مخصصة",
    "Flexible Plastic Packaging": "تغليف بلاستيكي مرن",
    "Zip Closure Bags": "أكياس بإغلاق بسحاب",
    "Clear Packaging Solutions": "حلول تغليف شفافة",
    "Polyethylene Packaging Bags": "أكياس تغليف من البولي إيثيلين",
    "Food & Retail Packaging": "تغليف للمواد الغذائية والتجزئة",
    "Custom Printed Packaging": "تغليف مطبوع حسب الطلب",
    "Flexible Polyethylene Bags": "أكياس بولي إيثيلين مرنة",
};

export default function Gallery({
    locale = "en",
}: {
    locale?: Locale;
}) {
    const [activeFilter, setActiveFilter] = useState("all");
    const [index, setIndex] = useState(-1);

    const t = translations[locale];

    const filteredItems =
        activeFilter === "all"
            ? galleryItems
            : galleryItems.filter(
                (item) => item.category === activeFilter
            );

    const currentSlides = filteredItems.map((item) => ({
        src: item.src,
        title:
            locale === "ar"
                ? arabicTitles[item.title] || item.title
                : item.title,
    }));

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        setIndex(-1);
    };

    return (
        <section
            id="gallery"
            className="relative overflow-hidden bg-slate-50 py-28"
        >
            {/* Background Decoration */}

            <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/[0.04] blur-[130px]" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-slate-900/[0.04] blur-[130px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Header */}

                <div
                    data-aos="fade-up"
                    className="mx-auto max-w-4xl text-center"
                >
                    <span className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.35em] text-orange-500">
                        <span className="h-px w-8 bg-orange-500" />

                        {t.eyebrow}

                        <span className="h-px w-8 bg-orange-500" />
                    </span>

                    <h2 className="mt-5 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
                        {t.title}

                        <span className="block text-orange-500">
                            {t.titleAccent}
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
                        {t.description}
                    </p>
                </div>

                {/* Filter Buttons */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="mt-12 flex flex-wrap items-center justify-center gap-3"
                >
                    {filters.map((filter) => {
                        const Icon = filter.icon;
                        const active = activeFilter === filter.id;

                        return (
                            <button
                                key={filter.id}
                                type="button"
                                onClick={() =>
                                    handleFilterChange(filter.id)
                                }
                                className={`group inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-bold transition-all duration-300 ${active
                                        ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                                        : "border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-orange-300 hover:text-orange-500 hover:shadow-lg"
                                    }`}
                            >
                                <Icon
                                    size={17}
                                    className={
                                        active
                                            ? "text-white"
                                            : "text-slate-700 transition-colors group-hover:text-orange-500"
                                    }
                                />

                                <span>
                                    {filter.label[locale]}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Gallery Grid */}

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((item, i) => {
                        const title =
                            locale === "ar"
                                ? arabicTitles[item.title] || item.title
                                : item.title;

                        return (
                            <button
                                key={item.src}
                                type="button"
                                onClick={() => setIndex(i)}
                                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white text-left shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
                            >
                                {/* Image */}

                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={item.src}
                                        alt={title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    {/* Image Overlay */}

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                                    {/* Category Badge */}

                                    <div
                                        className={`absolute top-5 ${locale === "ar"
                                                ? "right-5"
                                                : "left-5"
                                            }`}
                                    >
                                        <span className="rounded-full border border-white/20 bg-slate-950/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                                            {item.category === "factory"
                                                ? t.factory
                                                : t.packaging}
                                        </span>
                                    </div>

                                    {/* Title */}

                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-bold text-white">
                                            {title}
                                        </h3>

                                        <div className="mt-3 h-1 w-10 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-20" />
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Bottom Statement */}

                <div
                    data-aos="fade-up"
                    className="mt-16 text-center"
                >
                    <div className="mx-auto h-px max-w-xs bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                    <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
                        {t.statement}
                    </p>
                </div>
            </div>

            {/* Lightbox */}

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={currentSlides}
                plugins={[
                    Zoom,
                    Fullscreen,
                    Thumbnails,
                ]}
            />
        </section>
    );
}