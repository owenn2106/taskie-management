import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskie",
  description: "A task management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark")}>
        <Providers>
          <Navbar />
          <div className="flex mx-5 gap-5">
            <Sidebar />
            <Card className="w-full h-[calc(100vh-96px-20px)] p-5">
              {children}
            </Card>
          </div>
        </Providers>
      </body>
    </html>
  );
}
