import type { Metadata } from "next";
import { Inter, Handlee } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const handlee = Handlee({
  subsets: ["latin"],
  variable: "--font-handlee",
  weight: ["400"],
});

export const metadata: Metadata = {
  title:
    "Lalit | Software Developer | Full stack developer | Frontend developer",
  description: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${handlee.variable} antialiased text-primaryDark overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
