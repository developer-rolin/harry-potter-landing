import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harry-potter-landing-rho.vercel.app"),
  title: "The Wizarding Archive | Harry Potter Characters",
  description:
    "Explore the witches, wizards and magical creatures of the Harry Potter universe. Discover character profiles, Hogwarts houses, Patronuses and more.",
  openGraph: {
    title: "The Wizarding Archive",
    description:
      "Discover the witches, wizards and magical creatures of the Harry Potter universe.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
