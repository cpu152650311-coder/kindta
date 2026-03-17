import type { Metadata } from "next";

export const SITE_NAME = "Kingdta";
export const SITE_URL = "https://kingdta.com";
export const DEFAULT_OG_IMAGE = "/header-logo.png";

type MetadataInput = {
	title: string;
	description: string;
	path: string;
	keywords?: readonly string[];
	image?: string;
	type?: "website" | "article";
	noIndex?: boolean;
};

export function buildMetadata({
	title,
	description,
	path,
	keywords = [],
	image = DEFAULT_OG_IMAGE,
	type = "website",
	noIndex = false,
}: MetadataInput): Metadata {
	return {
		title,
		description,
		keywords: [...keywords],
		alternates: {
			canonical: path,
		},
		openGraph: {
			title,
			description,
			url: path,
			siteName: SITE_NAME,
			type,
			images: [
				{
					url: image,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		robots: noIndex
			? {
					index: false,
					follow: false,
					googleBot: {
						index: false,
						follow: false,
						noimageindex: true,
					},
				}
			: {
					index: true,
					follow: true,
					googleBot: {
						index: true,
						follow: true,
						"max-image-preview": "large",
						"max-snippet": -1,
						"max-video-preview": -1,
					},
				},
	};
}
