import { JsonLd } from "@/components/seo/json-ld";
import { PAGE_METADATA } from "@/lib/page-metadata";
import { buildMetadata } from "@/lib/seo";
import { pageStructuredData } from "@/lib/structured-data";

export const metadata = buildMetadata(PAGE_METADATA.welcome);

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<JsonLd data={pageStructuredData({ ...PAGE_METADATA.welcome, type: "WebPage" })} />
			{children}
		</>
	);
}
