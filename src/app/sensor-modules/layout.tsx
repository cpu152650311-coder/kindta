import { JsonLd } from "@/components/seo/json-ld";
import { PAGE_METADATA } from "@/lib/page-metadata";
import { buildMetadata } from "@/lib/seo";
import { SENSOR_PRODUCTS } from "@/lib/structured-content";
import {
	breadcrumbStructuredData,
	itemListStructuredData,
	pageStructuredData,
	productStructuredData,
} from "@/lib/structured-data";

export const metadata = buildMetadata(PAGE_METADATA.sensorModules);

export default function SensorModulesLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<JsonLd
				data={[
					pageStructuredData({
						...PAGE_METADATA.sensorModules,
						type: "CollectionPage",
					}),
					itemListStructuredData(
						"Kingdta Sensor Modules",
						SENSOR_PRODUCTS.map((product) => ({
							name: product.name,
							path: product.path,
						})),
					),
					...productStructuredData(SENSOR_PRODUCTS),
					breadcrumbStructuredData([
						{ name: "Home", path: "/" },
						{ name: "Products", path: "/products" },
						{ name: "Sensor Modules", path: "/sensor-modules" },
					]),
				]}
			/>
			{children}
		</>
	);
}
