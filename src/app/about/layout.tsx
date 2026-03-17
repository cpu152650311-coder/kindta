import { JsonLd } from "@/components/seo/json-ld";
import { PAGE_METADATA } from "@/lib/page-metadata";
import { buildMetadata } from "@/lib/seo";
import {
	breadcrumbStructuredData,
	pageStructuredData,
} from "@/lib/structured-data";

export const metadata = buildMetadata(PAGE_METADATA.about);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<JsonLd
				data={[
					pageStructuredData({ ...PAGE_METADATA.about, type: "AboutPage" }),
					breadcrumbStructuredData([
						{ name: "Home", path: "/" },
						{ name: "About", path: "/about" },
					]),
				]}
			/>
			{children}
		</>
	);
}
