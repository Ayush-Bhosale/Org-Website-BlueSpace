import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Footer from "@/components/footer/footer";
import  Nav  from "@/components/NavBar/Navbar";

const inter = Inter({ subsets: ["cyrillic-ext"] });

export const metadata: Metadata = {
  title: "BlueSpace Tech",
  description: "BlueSpace is a branding and tech Services agency",
  other: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
      </body>

    </html>
  );
}
