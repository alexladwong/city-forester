import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"], 
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "City Tours",
  description: "City Tours is an immersive and user-friendly platform designed to help travelers explore cities like never before. Whether you're a tourist looking for must-visit landmarks, a local searching for hidden gems, or an adventurer seeking unique experiences, City Tours has everything you need in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
