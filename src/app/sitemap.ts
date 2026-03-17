import type { MetadataRoute } from "next";

import { BLOG_METADATA } from "@/lib/blog-metadata";
import { PAGE_METADATA } from "@/lib/page-metadata";
import { SITE_URL } from "@/lib/seo";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
	const staticPages = [
		PAGE_METADATA.home.path,
		PAGE_METADATA.products.path,
		PAGE_METADATA.sensorModules.path,
		PAGE_METADATA.radarModules.path,
		PAGE_METADATA.solutions.path,
		PAGE_METADATA.about.path,
		PAGE_METADATA.contact.path,
		PAGE_METADATA.blog.path,
		PAGE_METADATA.welcome.path,
	];

	const staticEntries: MetadataRoute.Sitemap = staticPages.map((path, index) => ({
		url: `${SITE_URL}${path}`,
		lastModified: now,
		changeFrequency: index === 0 ? "weekly" : "monthly",
		priority: index === 0 ? 1 : 0.8,
	}));

	const blogEntries: MetadataRoute.Sitemap = Object.values(BLOG_METADATA).map((post) => ({
		url: `${SITE_URL}${post.path}`,
		lastModified: now,
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...staticEntries, ...blogEntries];
}
