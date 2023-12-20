import type { Metadata } from "next";
import { ClerkProvider, SignOutButton, auth } from "@clerk/nextjs";
import "./global.scss";
import Header from "@/components/admin/Header";
import Link from "next/link";

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
  const { userId } = auth();
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          {userId === process.env.Admin_Sahil_USER_ID ||
          userId === process.env.Admin_Parag_USER_ID ? (
            <>
              <Header />
              <main>{children}</main>
            </>
          ) : (
            <section id="naa">
              <p>Not an Admin</p>
              <p>Please Sign Out</p>

              <SignOutButton>
                <Link href="/">Sign out</Link>
              </SignOutButton>
            </section>
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}
