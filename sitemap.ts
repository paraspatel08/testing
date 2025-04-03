import { MetadataRoute } from "next";
import { config } from "@/config";

interface SitemapURLS {
  url: string;
  lastModified: Date;
  changeFrequency:
    | "daily"
    | "weekly"
    | "always"
    | "hourly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const URL = config.site.mainURL;
  const mainPath = ["", "features", "dex", "artists"];
  const pages = ["self-fusions", "triple-fusions"];
  const sitemapURLS: SitemapURLS[] = [];

  mainPath.forEach((path) => {
    sitemapURLS.push({
      url: `${URL}/${path}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    });
  });

  pages.forEach((path) => {
    sitemapURLS.push({
      url: `${URL}/${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    });
  });

  return [...sitemapURLS];
}
