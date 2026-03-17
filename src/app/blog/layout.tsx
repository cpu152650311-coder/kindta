import { JsonLd } from "@/components/seo/json-ld";
import { PAGE_METADATA } from "@/lib/page-metadata";
import { buildMetadata } from "@/lib/seo";
import {
	breadcrumbStructuredData,
	pageStructuredData,
} from "@/lib/structured-data";

export const metadata = buildMetadata(PAGE_METADATA.blog);

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<JsonLd
				data={[
					pageStructuredData({ ...PAGE_METADATA.blog, type: "CollectionPage" }),
					breadcrumbStructuredData([
						{ name: "Home", path: "/" },
						{ name: "Blog", path: "/blog" },
					]),
				]}
			/>
			{children}
		</>
	);
}
