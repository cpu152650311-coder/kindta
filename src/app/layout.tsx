import "@/styles/globals.css";

import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/seo";
import {
	organizationStructuredData,
	websiteStructuredData,
} from "@/lib/structured-data";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: "Kingdta | Custom Sensor Solutions for Intelligent Hardware",
	description:
		"Shenzhen Kingdta Technology provides custom sensor solutions, passive vibration and tilt sensors, radar modules, and integrated PCBA services for IoT and industrial applications.",
	keywords: [
		"custom sensor solutions",
		"vibration sensor",
		"tilt sensor",
		"radar module",
		"PCBA manufacturing",
		"Kingdta",
	],
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Kingdta | Custom Sensor Solutions for Intelligent Hardware",
		description:
			"Shenzhen Kingdta Technology provides custom sensor solutions, passive vibration and tilt sensors, radar modules, and integrated PCBA services for IoT and industrial applications.",
		url: "/",
		siteName: "Kingdta",
		type: "website",
		images: [
			{
				url: "/header-logo.png",
				alt: "Kingdta sensor solutions",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Kingdta | Custom Sensor Solutions for Intelligent Hardware",
		description:
			"Shenzhen Kingdta Technology provides custom sensor solutions, passive vibration and tilt sensors, radar modules, and integrated PCBA services for IoT and industrial applications.",
		images: ["/header-logo.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	icons: [
		{ rel: "icon", url: "/favicon.png" },
		{ rel: "shortcut icon", url: "/favicon.png" },
		{ rel: "apple-touch-icon", url: "/favicon.png" },
	],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body>
				<JsonLd data={[organizationStructuredData, websiteStructuredData]} />
				{children}
				<Toaster position="top-center" richColors />
			</body>
		</html>
	);
}
