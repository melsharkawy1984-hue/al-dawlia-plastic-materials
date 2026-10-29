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

const galleryItems: GalleryItem[] = [{"src": "/images/factory/hero-machine.jpg", "title": "Production Line", "category": "factory"}, {"src": "/images/factory/line-01.jpg", "title": "Film Extrusion Line", "category": "factory"}, {"src": "/images/factory/machine-01.jpg", "title": "Industrial Machinery", "category": "factory"}, {"src": "/images/factory/machine-02.jpg", "title": "Manufacturing Equipment", "category": "factory"}, {"src": "/images/products/pe-bags-illustration.png", "title": "Polyethylene Bags", "category": "products"}, {"src": "/images/products/pe-film-illustration.png", "title": "PE Film Rolls", "category": "products"}, {"src": "/images/products/stretch-film-illustration.png", "title": "Stretch Film", "category": "products"}, {"src": "/images/products/shrink-film-illustration.png", "title": "Shrink Film", "category": "products"}];

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
            "Explore our factory equipment and illustrative product images created for AL DAWLIA.",
        factory: "Factory",
        packaging: "Packaging",
        statement: "Quality • Flexibility • Reliability • Global Reach",
    },

    ar: {
        eyebrow: "معرض الصور",
        title: "المصنع والإنتاج",
        titleAccent: "والتغليف",
        description:
            "شاهد معدات المصنع وصورًا توضيحية للمنتجات أُعدّت خصيصًا للدولية.",
        factory: "المصنع",
        packaging: "التغليف",
        statement: "الجودة • المرونة • الموثوقية • الوصول العالمي",
    },
};

const arabicTitles: Record<string, string> = {
"Polyethylene Bags": "أكياس البولي إيثيلين — صورة توضيحية",
"PE Film Rolls": "رولات البولي إيثيلين — صورة توضيحية",
"Stretch Film": "استرتش فيلم — صورة توضيحية",
"Shrink Film": "شرنك فيلم — صورة توضيحية",
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
                                        : "border-slate-200 bg-[#FCFCF7] text-slate-700 hover:-translate-y-1 hover:border-orange-300 hover:text-orange-500 hover:shadow-lg"
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
                                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#FCFCF7] text-left shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
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