import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "DEMO APP",
	description: "Application for presentation of art's work.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
