import type { Metadata } from "next";
import "@/styles/globals.css";
import Sidebar from "@/components/ui/Sidebar";
import { ThemeProvider } from "next-themes";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
    title: "Aesquasar | Discovery Personal Dashboard",
    description: "Discovery Personal Dashboard In Aesquasar",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body className="w-full h-screen overflow-hidden">
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
