"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isArabic = pathname.startsWith("/ar");
  const locale = isArabic ? "ar" : "en";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setScrolled(window.scrollY > 4);
  }, [pathname]);

  /*
   * Remove the current locale from the URL.
   *
   * /en
   * /ar
   * /en/products
   * /ar/products/pe-bags
   */

  const pathWithoutLocale =
    pathname.replace(/^\/(en|ar)/, "") || "";

  /*
   * Switch language while keeping:
   *
   * - current page
   * - current product
   * - query parameters
   */

  const switchLocale = (targetLocale: "en" | "ar") => {
    const query = searchParams.toString();

    return `/${targetLocale}${pathWithoutLocale}${query ? `?${query}` : ""}`;
  };

  /*
   * Navigation links
   */

  const links = [
    {
      title: isArabic ? "الرئيسية" : "Home",
      href: `/${locale}`,
    },
    {
      title: isArabic ? "عن الشركة" : "About",
      href: `/${locale}/about`,
    },
    {
      title: isArabic ? "المنتجات" : "Products",
      href: `/${locale}/products`,
    },
    {
      title: isArabic ? "خطوط الإنتاج" : "Production",
      href: `/${locale}/production-lines`,
    },
    {
      title: isArabic ? "الجودة" : "Quality",
      href: `/${locale}/quality`,
    },
    {
      title: isArabic ? "التصدير" : "Export",
      href: `/${locale}/export`,
    },
    {
      title: isArabic ? "المعرض" : "Gallery",
      href: `/${locale}/gallery`,
    },
    { title: isArabic ? "الوظائف" : "Careers", href: `/${locale}/careers` },
  ];

  return (
    <header
      dir={isArabic ? "rtl" : "ltr"}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow] duration-150 ${scrolled
          ? "bg-[#FCFCF7] py-4 shadow-xl"
          : "bg-transparent py-6"
        }`}
    >
      <svg width="0" height="0" aria-hidden="true" className="absolute pointer-events-none">
        <defs>
          <filter id="logo-remove-navy" colorInterpolationFilters="sRGB">
            {/* Keep the original white/green artwork and make its navy background transparent. */}
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 4 0 0 -1.1" />
          </filter>
        </defs>
      </svg>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* =========================
                    LOGO
                ========================= */}

        <Link
          href={`/${locale}`}
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={scrolled ? "/images/brand/aldawlia-logo.png" : "/images/brand/aldawlia-logo-dark.png"}
            alt={isArabic ? "شعار الدولية" : "AL DAWLIA logo"}
            width={575}
            height={271}
            className="h-auto w-20 shrink-0 rounded-md object-contain md:w-24"
            style={scrolled ? undefined : { filter: "url(#logo-remove-navy)" }}
          />

          <div>
            <h2
              className={`text-xl font-black transition ${scrolled
                  ? "text-slate-900"
                  : "text-white"
                }`}
            >
              AL DAWLIA
            </h2>

            <p
              className={`text-xs uppercase tracking-[0.35em] transition ${scrolled
                  ? "text-orange-600"
                  : "text-orange-300"
                }`}
            >
              Plastic Materials
            </p>
          </div>
        </Link>

        {/* =========================
                    DESKTOP MENU
                ========================= */}

        <nav className="hidden items-center gap-4 xl:gap-6 xl:flex">

          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-semibold transition duration-300 ${scrolled
                  ? "text-slate-700 hover:text-orange-500"
                  : "text-white hover:text-orange-300"
                }`}
            >
              {item.title}
            </Link>
          ))}

        </nav>

        {/* =========================
                    DESKTOP BUTTONS
                ========================= */}

        <div className="hidden items-center gap-4 xl:flex">

          {/* Language */}

          <Link
            href={switchLocale(
              isArabic ? "en" : "ar"
            )}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${scrolled
                ? "border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-500"
                : "border-white/40 text-white hover:bg-[#FCFCF7] hover:text-slate-900"
              }`}
          >
            {isArabic ? "English" : "العربية"}
          </Link>

          {/* Quote */}

          <Link
            href={`/${locale}/request-quote`}
            className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            {isArabic
              ? "اطلب عرض سعر"
              : "Request Quote"}
          </Link>

        </div>

        {/* =========================
                    MOBILE BUTTON
                ========================= */}

        <button
          onClick={() => setOpen(!open)}
          aria-label={
            isArabic
              ? "فتح القائمة"
              : "Open menu"
          }
          aria-expanded={open}
          className={`xl:hidden transition ${scrolled
              ? "text-slate-900"
              : "text-white"
            }`}
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* =========================
                MOBILE MENU
            ========================= */}

      {open && (
        <div
          className={`xl:hidden bg-[#FCFCF7] shadow-2xl ${isArabic
              ? "text-right"
              : "text-left"
            }`}
        >

          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              {item.title}
            </Link>
          ))}

          {/* Language */}

          <Link
            href={switchLocale(
              isArabic ? "en" : "ar"
            )}
            onClick={() => setOpen(false)}
            className="block border-b border-slate-100 px-6 py-4 font-bold text-orange-600"
          >
            {isArabic
              ? "English"
              : "العربية"}
          </Link>

          {/* Quote */}

          <Link
            href={`/${locale}/request-quote`}
            onClick={() => setOpen(false)}
            className="block px-6 py-5 font-bold text-orange-600"
          >
            {isArabic
              ? "اطلب عرض سعر"
              : "Request Quote"}
          </Link>

        </div>
      )}
    </header>
  );
}