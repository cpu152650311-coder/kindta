import { JsonLd } from "@/components/seo/json-ld";
import { PAGE_METADATA } from "@/lib/page-metadata";
import { buildMetadata } from "@/lib/seo";
import {
	breadcrumbStructuredData,
	pageStructuredData,
} from "@/lib/structured-data";

export const metadata = buildMetadata(PAGE_METADATA.products);

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<JsonLd
				data={[
					pageStructuredData({ ...PAGE_METADATA.products, type: "CollectionPage" }),
					breadcrumbStructuredData([
						{ name: "Home", path: "/" },
						{ name: "Products", path: "/products" },
					]),
				]}
			/>
			{children}
		</>
	);
}
