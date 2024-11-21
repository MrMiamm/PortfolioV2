import Body from "@/components/Body";
import ClientProvider from "@/components/ClientProvider";
import type { Metadata } from "next";
import "./globals.css";
import "./page.module.css";

export const metadata: Metadata = {
    title: "William CHERON Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <Body>
                <ClientProvider>{children}</ClientProvider>
            </Body>
        </html>
    );
}
