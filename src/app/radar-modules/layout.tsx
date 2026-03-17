import { JsonLd } from "@/components/seo/json-ld";
import { PAGE_METADATA } from "@/lib/page-metadata";
import { buildMetadata } from "@/lib/seo";
import { RADAR_PRODUCTS } from "@/lib/structured-content";
import {
	breadcrumbStructuredData,
	itemListStructuredData,
	pageStructuredData,
	productStructuredData,
} from "@/lib/structured-data";

export const metadata = buildMetadata(PAGE_METADATA.radarModules);

export default function RadarModulesLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<JsonLd
				data={[
					pageStructuredData({
						...PAGE_METADATA.radarModules,
						type: "CollectionPage",
					}),
					itemListStructuredData(
						"Kingdta Radar Modules",
						RADAR_PRODUCTS.map((product) => ({
							name: product.name,
							path: product.path,
						})),
					),
					...productStructuredData(RADAR_PRODUCTS),
					breadcrumbStructuredData([
						{ name: "Home", path: "/" },
						{ name: "Products", path: "/products" },
						{ name: "Radar Modules", path: "/radar-modules" },
					]),
				]}
			/>
			{children}
		</>
	);
}
