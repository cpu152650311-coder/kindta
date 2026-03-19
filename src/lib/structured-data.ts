import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

type StructuredDataInput = {
	title: string;
	description: string;
	path: string;
	image?: string;
	type?: string;
};

type BreadcrumbItem = {
	name: string;
	path: string;
};

function absoluteUrl(path: string) {
	if (path.startsWith("http://") || path.startsWith("https://")) {
		return path;
	}

	return `${SITE_URL}${path}`;
}

export const organizationStructuredData = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: SITE_NAME,
	url: SITE_URL,
	logo: absoluteUrl("/header-logo.png"),
	email: "sales@kingdta.com",
	telephone: "+86 18617165334",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Shenzhen",
		addressRegion: "Guangdong",
		addressCountry: "CN",
	},
	contactPoint: [
		{
			"@type": "ContactPoint",
			telephone: "+86 18617165334",
			email: "sales@kingdta.com",
			contactType: "sales",
			areaServed: "Worldwide",
			availableLanguage: ["English", "Chinese"],
		},
	],
};

export const websiteStructuredData = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: SITE_NAME,
	url: SITE_URL,
	potentialAction: {
		"@type": "SearchAction",
		target: `${SITE_URL}/blog`,
		"query-input": "required name=search_term",
	},
};

export function pageStructuredData({
	title,
	description,
	path,
	image = DEFAULT_OG_IMAGE,
	type = "WebPage",
}: StructuredDataInput) {
	return {
		"@context": "https://schema.org",
		"@type": type,
		name: title,
		description,
		url: absoluteUrl(path),
		image: absoluteUrl(image),
		isPartOf: {
			"@type": "WebSite",
			name: SITE_NAME,
			url: SITE_URL,
		},
	};
}

export function articleStructuredData({
	title,
	description,
	path,
	image = DEFAULT_OG_IMAGE,
}: StructuredDataInput) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: title,
		description,
		url: absoluteUrl(path),
		image: [absoluteUrl(image)],
		publisher: {
			"@type": "Organization",
			name: SITE_NAME,
			logo: {
				"@type": "ImageObject",
				url: absoluteUrl("/header-logo.png"),
			},
		},
		mainEntityOfPage: absoluteUrl(path),
	};
}

export function breadcrumbStructuredData(items: BreadcrumbItem[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path),
		})),
	};
}

type FaqItem = {
	question: string;
	answer: string;
};

type ProductItem = {
	name: string;
	description: string;
	path: string;
	image?: string;
	sku?: string;
	category?: string;
};

export function faqStructuredData(items: readonly FaqItem[]) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};
}

export function productStructuredData(items: readonly ProductItem[]) {
	return items.map((item) => ({
		"@context": "https://schema.org",
		"@type": "Product",
		name: item.name,
		description: item.description,
		sku: item.sku,
		category: item.category,
		image: absoluteUrl(item.image ?? DEFAULT_OG_IMAGE),
		url: absoluteUrl(item.path),
		brand: {
			"@type": "Brand",
			name: SITE_NAME,
		},
		// Google 要求 Product 必须包含 offers、review 或 aggregateRating 之一才能显示富媒体结果
		offers: {
			"@type": "Offer",
			url: absoluteUrl(item.path),
			availability: "https://schema.org/InStock",
			priceValidUntil: "2027-12-31",
		},
	}));
}

export function itemListStructuredData(
	name: string,
	items: readonly { name: string; path: string }[],
) {
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name,
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			url: absoluteUrl(item.path),
		})),
	};
}
