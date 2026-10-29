import type { MetadataRoute } from "next";
import { sections } from "@/lib/sections";
import { getProducts } from "@/lib/products";

const baseUrl = "https://aldawliaplastic.com";
const pages = ["", ...sections.map((section) => `/${section.slug}`), "/request-quote"];
const products = getProducts("en").map((product) => product.slug);

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ar"];
  return locales.flatMap((locale) => [
    ...pages.map((page) => ({ url: `${baseUrl}/${locale}${page}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: page === "" ? 1 : 0.8 })),
    ...products.map((product) => ({ url: `${baseUrl}/${locale}/products/${product}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ]);
}
