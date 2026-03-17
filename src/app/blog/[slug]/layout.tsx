import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_METADATA } from "@/lib/blog-metadata";
import { buildMetadata } from "@/lib/seo";
import {
	articleStructuredData,
	breadcrumbStructuredData,
} from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }>; children: React.ReactNode };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const meta = BLOG_METADATA[slug as keyof typeof BLOG_METADATA];
	if (!meta) return {};

	return buildMetadata({
		title: meta.title,
		description: meta.description,
		path: meta.path,
		image: meta.image,
		type: "article",
	});
}

export default async function BlogPostLayout({ children, params }: Props) {
	const { slug } = await params;
	const meta = BLOG_METADATA[slug as keyof typeof BLOG_METADATA];

	if (!meta) {
		return <>{children}</>;
	}

	return (
		<>
			<JsonLd
				data={[
					articleStructuredData({
						title: meta.title,
						description: meta.description,
						path: meta.path,
						image: meta.image,
					}),
					breadcrumbStructuredData([
						{ name: "Home", path: "/" },
						{ name: "Blog", path: "/blog" },
						{ name: meta.title.replace(" | Kingdta Blog", ""), path: meta.path },
					]),
				]}
			/>
			{children}
		</>
	);
}
