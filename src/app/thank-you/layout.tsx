import { PAGE_METADATA } from "@/lib/page-metadata";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(PAGE_METADATA.thankYou);

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
