import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Urbanist } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import { title } from "process";

const urbanist = Urbanist({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("settings");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [
        {
          url: page.data.social_share.url as string,
          width: 800,
          height: 600,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
        <Header />
        {children}
        <Footer />
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="absolute pointer-events-none inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
