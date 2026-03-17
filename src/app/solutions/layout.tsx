import { JsonLd } from "@/components/seo/json-ld";
import { PAGE_METADATA } from "@/lib/page-metadata";
import { buildMetadata } from "@/lib/seo";
import {
	breadcrumbStructuredData,
	pageStructuredData,
} from "@/lib/structured-data";

export const metadata = buildMetadata(PAGE_METADATA.solutions);

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<JsonLd
				data={[
					pageStructuredData({ ...PAGE_METADATA.solutions, type: "Service" }),
					breadcrumbStructuredData([
						{ name: "Home", path: "/" },
						{ name: "Solutions", path: "/solutions" },
					]),
				]}
			/>
			{children}
		</>
	);
}
