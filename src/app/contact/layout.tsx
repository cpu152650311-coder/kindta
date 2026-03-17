import { JsonLd } from "@/components/seo/json-ld";
import { PAGE_METADATA } from "@/lib/page-metadata";
import { buildMetadata } from "@/lib/seo";
import { CONTACT_FAQS } from "@/lib/structured-content";
import {
	breadcrumbStructuredData,
	faqStructuredData,
	pageStructuredData,
} from "@/lib/structured-data";

export const metadata = buildMetadata(PAGE_METADATA.contact);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<JsonLd
				data={[
					pageStructuredData({ ...PAGE_METADATA.contact, type: "ContactPage" }),
					faqStructuredData(CONTACT_FAQS),
					breadcrumbStructuredData([
						{ name: "Home", path: "/" },
						{ name: "Contact", path: "/contact" },
					]),
				]}
			/>
			{children}
		</>
	);
}
