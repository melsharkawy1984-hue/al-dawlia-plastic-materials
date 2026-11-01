import { castProducts } from "./cast-products";

export type Product = {
    slug: string;
    category?: "blown" | "cast";
    imageKind?: "supplied" | "illustration";
    specificationGroups?: { title: string; specifications: Record<string, string> }[];
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
 shrinkFilm: "/images/products/shrink-film-illustration.png",
};

export const products: Record<"en" | "ar", Product[]> = {
    en: [
        ...castProducts.en,
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
    "slug": "stretch-hood",
    "title": "Stretch Hood",
    "image": "/images/products/stretch-hood-illustration.png",
    "description": "Stretch hood film secures palletized goods with a snug protective cover, helping limit load movement and protect against weather during transport and storage.",
    "features": [
        "Strong load retention",
        "Tear resistance",
        "Flexible protective cover",
        "Weather protection"
    ],
    "specifications": {
        "Application": "Pallet protection",
        "Thickness and dimensions": "Confirmed to suit the load and equipment",
        "Technical requirements": "Agreed for each order"
    },
    "applications": [
        "Palletized goods",
        "Road transport",
        "Warehousing",
        "Industrial logistics"
    ]
},
{
    "slug": "agriculture-horticulture",
    "title": "Agriculture & Horticulture",
    "image": "/images/products/agriculture-horticulture-illustration.png",
    "description": "Agricultural films support more efficient growing conditions, helping conserve moisture, protect crops and improve crop quality while making better use of available resources.",
    "features": [
        "Crop protection",
        "Moisture conservation",
        "Support for efficient cultivation",
        "Films suited to the growing environment"
    ],
    "specifications": {
        "Application": "Agriculture and horticulture",
        "Thickness and dimensions": "Confirmed for the intended application",
        "Technical requirements": "Agreed according to crop and growing conditions"
    },
    "applications": [
        "Protected cultivation",
        "Greenhouse covering",
        "Soil mulching",
        "Horticulture"
    ]
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
        ...castProducts.ar,
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
    "slug": "stretch-hood",
    "title": "فيلم ستريتش هود",
    "image": "/images/products/stretch-hood-illustration.png",
    "description": "غطاء فيلم مرن يثبت البضائع على البالتات ويساعد على تقليل تحرك الحمولة وحمايتها من العوامل الجوية أثناء النقل والتخزين، مع قوة تماسك ومقاومة للتمزق.",
    "features": [
        "قوة تثبيت للحمولة",
        "مقاومة للتمزق",
        "غطاء مرن يحيط بالبالتة",
        "حماية من العوامل الجوية"
    ],
    "specifications": {
        "الاستخدام": "حماية البضائع على البالتات",
        "السماكة والأبعاد": "تُحدد وفقًا للحمولة ومعدات التغليف",
        "المتطلبات الفنية": "تُعتمد لكل طلب"
    },
    "applications": [
        "البضائع على البالتات",
        "النقل البري",
        "التخزين",
        "الخدمات اللوجستية الصناعية"
    ]
},
{
    "slug": "agriculture-horticulture",
    "title": "أفلام الزراعة والبستنة",
    "image": "/images/products/agriculture-horticulture-illustration.png",
    "description": "أفلام زراعية تساعد على تهيئة ظروف نمو أفضل، والحفاظ على رطوبة التربة وحماية المحاصيل، بما يدعم كفاءة استخدام الموارد وتحسين جودة الإنتاج الزراعي.",
    "features": [
        "حماية المحاصيل",
        "الحفاظ على رطوبة التربة",
        "دعم كفاءة الزراعة",
        "أفلام تناسب بيئة النمو"
    ],
    "specifications": {
        "الاستخدام": "الزراعة والبستنة",
        "السماكة والأبعاد": "تُحدد حسب الاستخدام المطلوب",
        "المتطلبات الفنية": "تُعتمد وفقًا للمحصول وظروف الزراعة"
    },
    "applications": [
        "الزراعة المحمية",
        "تغطية الصوب الزراعية",
        "تغطية التربة",
        "البستنة"
    ]
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