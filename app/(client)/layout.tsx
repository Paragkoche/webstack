import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "WebStack | Empowering Your Digital Presence",
  description:
    "GWebStack - Your Partner in Digital Success. Elevate your online presence with our strategic SEO, social media, and digital marketing solutions. Proven results, transparent communication, and client-centric focus. Contact us for customized strategies that drive real ROI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
        <Script src="/utils/jquery-3.5.1.min.dc5e7f18c8.js" />
        <Script src="/utils/webflow.f577186c1.js" />
      </html>
    </ClerkProvider>
  );
}
