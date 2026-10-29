export type Product = {
    slug: string;
    title: string;
    image: string;
    description: string;
    features: string[];
    specifications: Record<string, string>;
    applications: string[];
};

const productImages = {
 peBags: "/images/products/pe-bags-illustration.png",
 peFilmRolls: "/images/products/pe-film-illustration.png",
 stretchFilm: "/images/products/stretch-film-illustration.png",
 shrinkFilm: "/images/products/shrink-film-illustration.png",
};

export const products: Record<"en" | "ar", Product[]> = {
    en: [
        {
            slug: "pe-bags",
            title: "PE Bags",
            image: productImages.peBags,
            description:
                "High quality polyethylene bags for industrial and commercial applications.",
            features: [
                "Excellent strength",
                "Food grade",
                "Custom sizes",
                "Custom printing",
            ],
            specifications: {
                Material: "LDPE / HDPE",
                Thickness: "20 – 250 Micron",
                Width: "100 – 1500 mm",
                Length: "Custom",
                Printing: "Up to 8 Colors",
                Colors: "Custom Colors",
                Packaging: "Rolls / Bundles",
            },
            applications: [
                "Food Packaging",
                "Industrial Packaging",
                "Agriculture",
                "Retail",
            ],
        },

        {
            slug: "pe-film-rolls",
            title: "PE Film Rolls",
            image: productImages.peFilmRolls,
            description:
                "Premium polyethylene rolls manufactured with consistent quality.",
            features: [
                "Smooth surface",
                "High transparency",
                "Industrial packaging",
                "Different thicknesses",
            ],
            specifications: {
                Material: "LDPE",
                Thickness: "25 – 300 Micron",
                Width: "200 – 2000 mm",
                Surface: "Smooth",
                Printing: "Optional",
                Colors: "Transparent / Colored",
                Packaging: "Rolls",
            },
            applications: [
                "Food Packaging",
                "Industrial Packaging",
                "Agriculture",
                "Retail",
            ],
        },

        {
            slug: "stretch-film",
            title: "Stretch Film",
            image: productImages.stretchFilm,
            description:
                "Excellent load stability for transportation and storage.",
            features: [
                "Strong elasticity",
                "Excellent cling",
                "Pallet wrapping",
                "Machine & hand grade",
            ],
            specifications: {
                Material: "LLDPE",
                Thickness: "17 – 35 Micron",
                Width: "250 – 500 mm",
                Stretch: "Up to 300%",
                Printing: "No",
                Colors: "Transparent / Black",
                Packaging: "Rolls",
            },
            applications: [
                "Food Packaging",
                "Industrial Packaging",
                "Agriculture",
                "Retail",
            ],
        },

        {
            slug: "shrink-film",
            title: "Shrink Film",
            image: productImages.shrinkFilm,
            description:
                "Reliable shrink packaging for food and industrial products.",
            features: [
                "High shrink force",
                "Glossy appearance",
                "Food packaging",
                "Industrial packaging",
            ],
            specifications: {
                Material: "LDPE",
                Thickness: "40 – 180 Micron",
                Width: "200 – 1500 mm",
                Shrinkage: "Excellent",
                Printing: "Optional",
                Colors: "Transparent",
                Packaging: "Rolls",
            },
            applications: [
                "Food Packaging",
                "Industrial Packaging",
                "Agriculture",
                "Retail",
            ],
        },
    ],

    ar: [
        {
            slug: "pe-bags",
            title: "أكياس البولي إيثيلين",
            image: productImages.peBags,
            description:
                "أكياس بولي إيثيلين عالية الجودة للاستخدامات الصناعية والتجارية.",
            features: [
                "متانة عالية",
                "مناسبة للاستخدامات الغذائية",
                "مقاسات مخصصة",
                "إمكانية الطباعة حسب الطلب",
            ],
            specifications: {
                "الخامة": "LDPE / HDPE",
                "السماكة": "20 – 250 ميكرون",
                "العرض": "100 – 1500 مم",
                "الطول": "حسب الطلب",
                "الطباعة": "حتى 8 ألوان",
                "الألوان": "ألوان حسب الطلب",
                "التعبئة": "رولات / حزم",
            },
            applications: [
                "تغليف المواد الغذائية",
                "التغليف الصناعي",
                "الزراعة",
                "قطاع التجزئة",
            ],
        },

        {
            slug: "pe-film-rolls",
            title: "رولات فيلم البولي إيثيلين",
            image: productImages.peFilmRolls,
            description:
                "رولات بولي إيثيلين عالية الجودة يتم تصنيعها بمواصفات وأداء ثابت.",
            features: [
                "سطح ناعم",
                "شفافية عالية",
                "مناسبة للتغليف الصناعي",
                "سماكات متعددة",
            ],
            specifications: {
                "الخامة": "LDPE",
                "السماكة": "25 – 300 ميكرون",
                "العرض": "200 – 2000 مم",
                "السطح": "ناعم",
                "الطباعة": "اختيارية",
                "الألوان": "شفاف / ملون",
                "التعبئة": "رولات",
            },
            applications: [
                "تغليف المواد الغذائية",
                "التغليف الصناعي",
                "الزراعة",
                "قطاع التجزئة",
            ],
        },

        {
            slug: "stretch-film",
            title: "استرتش فيلم",
            image: productImages.stretchFilm,
            description:
                "فيلم استرتش عالي الأداء يوفر ثباتاً ممتازاً للحمولات أثناء التخزين والنقل.",
            features: [
                "مرونة عالية",
                "التصاق ممتاز",
                "مناسب لتغليف البالتات",
                "متوفر للاستخدام اليدوي والآلي",
            ],
            specifications: {
                "الخامة": "LLDPE",
                "السماكة": "17 – 35 ميكرون",
                "العرض": "250 – 500 مم",
                "نسبة التمدد": "حتى 300%",
                "الطباعة": "غير متوفرة",
                "الألوان": "شفاف / أسود",
                "التعبئة": "رولات",
            },
            applications: [
                "تغليف المواد الغذائية",
                "التغليف الصناعي",
                "الزراعة",
                "قطاع التجزئة",
            ],
        },

        {
            slug: "shrink-film",
            title: "شرنك فيلم",
            image: productImages.shrinkFilm,
            description:
                "فيلم شرنك موثوق لتغليف المنتجات الغذائية والصناعية.",
            features: [
                "قوة انكماش عالية",
                "مظهر لامع",
                "مناسب لتغليف المواد الغذائية",
                "مناسب للتغليف الصناعي",
            ],
            specifications: {
                "الخامة": "LDPE",
                "السماكة": "40 – 180 ميكرون",
                "العرض": "200 – 1500 مم",
                "الانكماش": "ممتاز",
                "الطباعة": "اختيارية",
                "الألوان": "شفاف",
                "التعبئة": "رولات",
            },
            applications: [
                "تغليف المواد الغذائية",
                "التغليف الصناعي",
                "الزراعة",
                "قطاع التجزئة",
            ],
        },
    ],
};

export function getProducts(locale: "en" | "ar") {
    return products[locale];
}

export function getProduct(
    locale: "en" | "ar",
    slug: string
) {
    return products[locale].find(
        (product) => product.slug === slug
    );
}