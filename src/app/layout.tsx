import type { Metadata } from "next";
import "./globals.css";
import "./page.module.css";

export const metadata: Metadata = {
	title: "William CHERON Portfolio",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body>
			{children}
		</body>
		</html>
	);
}
