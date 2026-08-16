import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    Globe,
    Building2,
} from "lucide-react";

type Props = {
    locale?: string;
};

export default function SiteFooter({ locale = "en" }: Props) {
    const currentLocale = locale === "ar" ? "ar" : "en";
    const isArabic = currentLocale === "ar";

    return (
        <footer
            dir={isArabic ? "rtl" : "ltr"}
            className={`bg-slate-950 text-white ${isArabic ? "font-arabic" : ""
                }`}
        >

            {/* CTA */}

            <section className="border-b border-white/10 py-20">
                <div className="mx-auto max-w-7xl px-6 text-center">

                    <h2 className="text-5xl font-black">
                        {isArabic ? (
                            <>
                                هل أنت مستعد لبدء
                                <span className="block text-orange-400">
                                    مشروع التغليف الخاص بك؟
                                </span>
                            </>
                        ) : (
                            <>
                                Ready To Start Your
                                <span className="block text-orange-400">
                                    Packaging Project?
                                </span>
                            </>
                        )}
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                        {isArabic
                            ? "تواصل مع الدولية لصناعة المواد البلاستيكية اليوم واحصل على عرض سعر مخصص لاحتياجاتك من حلول تغليف البولي إيثيلين."
                            : "Contact AL DAWLIA FOR PLASTIC MATERIALS today and receive a customized quotation for your polyethylene packaging requirements."}
                    </p>

                    <Link
                        href={`/${currentLocale}/request-quote`}
                        className="mt-10 inline-flex rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
                    >
                        {isArabic
                            ? "احصل على عرض سعر مجاني"
                            : "Get Free Quotation"}
                    </Link>

                </div>
            </section>

            {/* Footer */}

            <section className="py-20">

                <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 lg:grid-cols-4">

                    {/* Company */}

                    <div>

                        <h3 className="text-2xl font-black">
                            AL DAWLIA
                        </h3>

                        <p className="mt-6 leading-8 text-slate-400">
                            {isArabic
                                ? "مصنع متخصص في إنتاج حلول تغليف البولي إيثيلين، نخدم الأسواق المحلية والدولية باستخدام أحدث تقنيات الإنتاج."
                                : "Premium manufacturer of polyethylene packaging solutions serving local and international markets with advanced production technology."}
                        </p>

                    </div>

                    {/* Products */}

                    <div>

                        <h4 className="mb-6 text-xl font-bold">
                            {isArabic ? "المنتجات" : "Products"}
                        </h4>

                        <ul className="space-y-4 text-slate-400">

                            <li>
                                <Link
                                    href={`/${currentLocale}/products/pe-bags`}
                                    className="transition hover:text-orange-400"
                                >
                                    {isArabic
                                        ? "أكياس البولي إيثيلين"
                                        : "PE Bags"}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={`/${currentLocale}/products/pe-film-rolls`}
                                    className="transition hover:text-orange-400"
                                >
                                    {isArabic
                                        ? "رولات فيلم البولي إيثيلين"
                                        : "PE Film Rolls"}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={`/${currentLocale}/products/stretch-film`}
                                    className="transition hover:text-orange-400"
                                >
                                    {isArabic
                                        ? "فيلم الاسترتش"
                                        : "Stretch Film"}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={`/${currentLocale}/products/shrink-film`}
                                    className="transition hover:text-orange-400"
                                >
                                    {isArabic
                                        ? "فيلم الشرنك"
                                        : "Shrink Film"}
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h4 className="mb-6 text-xl font-bold">
                            {isArabic ? "روابط سريعة" : "Quick Links"}
                        </h4>

                        <ul className="space-y-4 text-slate-400">

                            <li>
                                <Link
                                    href={`/${currentLocale}`}
                                    className="transition hover:text-orange-400"
                                >
                                    {isArabic ? "الرئيسية" : "Home"}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={`/${currentLocale}/products`}
                                    className="transition hover:text-orange-400"
                                >
                                    {isArabic ? "المنتجات" : "Products"}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={`/${currentLocale}/request-quote`}
                                    className="transition hover:text-orange-400"
                                >
                                    {isArabic
                                        ? "طلب عرض سعر"
                                        : "Request Quote"}
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}

                    {/* Contact */}

                    <div>
                        <h4 className="mb-6 text-xl font-bold">
                            {isArabic ? "تواصل معنا" : "Contact"}
                        </h4>

                        <div className="space-y-5 text-slate-400">

                            {/* Location */}
                            <a
                                href="https://maps.app.goo.gl/jnRiQL5pjmqWTBZAA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-3 transition hover:text-orange-400"
                            >
                                <MapPin className="mt-1 h-5 w-5 shrink-0 text-orange-400" />

                                <span>
                                    {isArabic ? "مصر، العاشر من رمضان" : "Egypt، 10th of Ramadan"}
                                </span>
                            </a>

                            {/* Phone */}
                            {/* Phone */}
                            <a
                                href="tel:+2010975131375"
                                className="flex gap-3 transition hover:text-orange-400"
                                dir="ltr"
                            >
                                <Phone className="mt-1 h-5 w-5 shrink-0 text-orange-400" />

                                <span>
                                    +20 109 751 31375
                                </span>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:info@aldawlia-plastic.com"
                                className="flex gap-3 transition hover:text-orange-400"
                                dir="ltr"
                            >
                                <Mail className="mt-1 h-5 w-5 shrink-0 text-orange-400" />

                                <span>
                                    info@aldawlia-plastic.com
                                </span>
                            </a>

                        </div>

                        {/* Contact Buttons */}
                        <div className="mt-8 flex gap-4">

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/2010975131375"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-orange-500"
                                aria-label="WhatsApp"
                                title="WhatsApp"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-[18px] w-[18px]"
                                    aria-hidden="true"
                                >
                                    <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.29-1.65a11.87 11.87 0 0 0 5.7 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.42-8.43ZM12.05 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.88 9.88 0 0 1-1.52-5.28C2.16 6.44 6.6 2 12.05 2c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 7c0 5.45-4.43 9.9-9.87 9.9Zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                                </svg>
                            </a>

                            {/* Google Maps */}
                            <a
                                href="https://maps.app.goo.gl/jnRiQL5pjmqWTBZAA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white/10 p-3 transition hover:bg-orange-500"
                                aria-label="Google Maps"
                                title="Google Maps"
                            >
                                <MapPin size={18} />
                            </a>

                        </div>
                    </div>
                </div>

            </section>

            {/* Bottom */}

            <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} AL DAWLIA FOR PLASTIC MATERIALS.{" "}
                {isArabic
                    ? "جميع الحقوق محفوظة."
                    : "All Rights Reserved."}
            </div>

        </footer>
    );
}