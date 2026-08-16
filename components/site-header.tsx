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
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
      href: `/${locale}#about`,
    },
    {
      title: isArabic ? "المنتجات" : "Products",
      href: `/${locale}/products`,
    },
    {
      title: isArabic ? "خطوط الإنتاج" : "Production",
      href: `/${locale}#production`,
    },
    {
      title: isArabic ? "الجودة" : "Quality",
      href: `/${locale}#quality`,
    },
    {
      title: isArabic ? "التصدير" : "Export",
      href: `/${locale}#export`,
    },
    {
      title: isArabic ? "المعرض" : "Gallery",
      href: `/${locale}#gallery`,
    },
  ];

  return (
    <header
      dir={isArabic ? "rtl" : "ltr"}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/95 py-4 shadow-xl backdrop-blur-md"
          : "bg-transparent py-6"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* =========================
                    LOGO
                ========================= */}

        <Link
          href={`/${locale}`}
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-xl font-black text-white shadow-lg">
            AD
          </div>

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

        <nav className="hidden items-center gap-8 lg:flex">

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

        <div className="hidden items-center gap-4 lg:flex">

          {/* Language */}

          <Link
            href={switchLocale(
              isArabic ? "en" : "ar"
            )}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${scrolled
                ? "border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-500"
                : "border-white/40 text-white hover:bg-white hover:text-slate-900"
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
          className={`lg:hidden transition ${scrolled
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
          className={`lg:hidden bg-white shadow-2xl ${isArabic
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