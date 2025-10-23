import type { Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import "../globals.css";
import ContextMenuProvider from "@/components/providers/context-menu-provider";

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const prompt = Prompt({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Dashboard | Queforia",
  description: "Manage your files and folders in the Queforia dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${prompt.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#030303]" suppressHydrationWarning>
        <ContextMenuProvider>
          {children}
        </ContextMenuProvider>
      </body>
    </html>
  );
}
