import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akarsh Bajpai",
  description: "Hi! I am Akarsh, a fullstack developer this is my portfolio where you can learn about me and see my latest work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <body className={urbanist.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
