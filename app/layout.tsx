import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ImPhong",
  description: "Phong's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="m-w-10xl mx-auto lg:px-40 px-10 scroll-smooth">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
