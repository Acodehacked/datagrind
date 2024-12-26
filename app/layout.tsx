import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({
 weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],});



export const metadata: Metadata = {
  title: "DataGrind Ai",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans}`}
      >
        {children}
      </body>
    </html>
  );
}
