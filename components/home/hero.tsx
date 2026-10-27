import Link from "next/link";
import { content, type Locale } from "@/lib/content";

type HeroProps = {
    locale: Locale;
};

export default function Hero({ locale }: HeroProps) {
    const t = content[locale];
    const isArabic = locale === "ar";

    return (
        <section
            className={`relative isolate h-screen min-h-[800px] overflow-hidden ${isArabic ? "font-arabic" : ""
                }`}
        >
            {/* Background */}
            <img
                src="/images/factory/hero-machine.jpg"
                alt={
                    isArabic
                        ? "مصنع الدولية للمواد البلاستيكية"
                        : "AL DAWLIA Factory"
                }
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-950/70" />

            {/* Orange Glow */}
            <div
                className={`absolute top-0 h-[700px] w-[700px] rounded-full bg-orange-500/20 blur-[180px] ${isArabic ? "left-0" : "right-0"
                    }`}
            />

            {/* Grid */}
            <div className="hero-grid absolute inset-0 opacity-30" />

            {/* Content */}
            <div className="relative z-20 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                    <div
                        className={`max-w-3xl rounded-[32px] border border-white/10 bg-[#FCFCF7]/5 p-8 shadow-2xl backdrop-blur-md md:p-12 ${isArabic ? "ml-auto text-right" : "mr-auto text-left"
                            }`}
                    >
                        {/* Eyebrow */}
                        <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/15 px-5 py-2 text-sm font-bold uppercase tracking-[0.35em] text-orange-300">
                            {t.hero.eyebrow}
                        </span>

                        {/* Title */}
                        <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
                            {isArabic ? (
                                <>
                                    الدولية للمواد
                                    <span className="mt-2 block text-orange-400">
                                        البلاستيكية
                                    </span>
                                </>
                            ) : (
                                <>
                                    Premium Polyethylene
                                    <span className="mt-2 block text-orange-400">
                                        Packaging Solutions
                                    </span>
                                </>
                            )}
                        </h1>

                        {/* Description */}
                        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                            {isArabic
                                ? "الدولية للمواد البلاستيكية تقدم حلول تغليف عالية الجودة من البولي إيثيلين للأسواق المحلية والدولية، باستخدام أحدث تقنيات الإنتاج الإيطالية ومعايير صارمة لضمان الجودة."
                                : "AL DAWLIA FOR PLASTIC MATERIALS manufactures premium polyethylene packaging solutions for local and international markets using advanced Italian production technology and strict quality standards."}
                        </p>

                        {/* Buttons */}
                        <div
                            className={`mt-12 flex flex-wrap gap-5 ${isArabic ? "justify-end" : "justify-start"
                                }`}
                        >
                            <Link
                                href={`/${locale}/products`}
                                className="button-primary"
                            >
                                {t.hero.primary}
                            </Link>

                            <Link
                                href={`/${locale}/request-quote`}
                                className="button-ghost"
                            >
                                {t.hero.secondary}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down */}
            <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 animate-bounce">
                <a
                    href="#about"
                    aria-label={
                        isArabic
                            ? "انتقل إلى قسم عن الشركة"
                            : "Scroll to About"
                    }
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-[#FCFCF7]/10 backdrop-blur-md transition hover:bg-orange-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </a>
            </div>

            {/* Floating Cards */}
            <div className="pointer-events-none absolute inset-0 z-10 hidden xl:block">
                {/* Experience */}
                <div
                    className={`absolute top-40 rounded-3xl border border-white/10 bg-[#FCFCF7]/10 p-6 text-white shadow-2xl backdrop-blur-xl ${isArabic ? "left-16 right-auto" : "right-16 left-auto"
                        }`}
                >
                    <p className="text-4xl font-black text-orange-400">
                        {isArabic ? "+10" : "10+"}
                    </p>

                    <p className="mt-2 text-sm uppercase tracking-widest text-slate-200">
                        {isArabic
                            ? "سنوات من الخبرة"
                            : "Years Experience"}
                    </p>
                </div>

                {/* Export */}
                <div
                    className={`absolute bottom-36 rounded-3xl border border-white/10 bg-[#FCFCF7]/10 p-6 text-white shadow-2xl backdrop-blur-xl ${isArabic ? "left-24 right-auto" : "right-24 left-auto"
                        }`}
                >
                    <p className="text-4xl font-black text-orange-400">
                        {isArabic ? "+15" : "15+"}
                    </p>

                    <p className="mt-2 text-sm uppercase tracking-widest text-slate-200">
                        {isArabic
                            ? "دولة للتصدير"
                            : "Export Countries"}
                    </p>
                </div>

                {/* ISO */}
                <div
                    className={`absolute top-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#FCFCF7]/10 p-6 text-white shadow-2xl backdrop-blur-xl ${isArabic ? "left-40 right-auto" : "right-40 left-auto"
                        }`}
                >
                    <p className="text-4xl font-black text-orange-400">
                        ISO
                    </p>

                    <p className="mt-2 text-sm uppercase tracking-widest text-slate-200">
                        {isArabic
                            ? "جودة وفق المعايير الدولية"
                            : "Certified Quality"}
                    </p>
                </div>
            </div>
        </section>
    );
}