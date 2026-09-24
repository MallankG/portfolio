import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Mallank Gogri | Software Engineer",
  description: "Recruiter-facing portfolio for Mallank Gogri, a USC MS Computer Science student building full-stack, AI/ML, and data-intensive systems.",
  openGraph: {
    title: "Mallank Gogri | Software Engineer",
    description: "Projects, publications, experience, and contact details for Mallank Gogri.",
    type: "website",
    images: ["/image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mallank Gogri | Software Engineer",
    description: "Full-stack, AI/ML, and research portfolio.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
