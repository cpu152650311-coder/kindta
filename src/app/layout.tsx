import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "Kingdta | Sensor Solutions",
	description: "Kingdta Electronics - Precision Sensor Solutions for IoT & Industrial Applications",
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
				{children}
				<Toaster position="top-center" richColors />
			</body>
		</html>
	);
}
