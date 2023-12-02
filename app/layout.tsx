import type { Metadata } from "next";

import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Vromonwala",
  description: "Your favorite destinations, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
