import type { MetadataRoute } from "next";

const baseUrl = "https://aldawlia-plastic.com";
const pages = ["", "/about", "/products", "/production-lines", "/quality", "/export", "/gallery", "/request-quote", "/contact"];
const products = ["pe-bags", "pe-film-rolls", "stretch-film", "shrink-film", "garbage-bags", "agricultural-film", "custom-packaging"];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ar"];
  return locales.flatMap((locale) => [
    ...pages.map((page) => ({ url: `${baseUrl}/${locale}${page}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: page === "" ? 1 : 0.8 })),
    ...products.map((product) => ({ url: `${baseUrl}/${locale}/products/${product}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ]);
}
