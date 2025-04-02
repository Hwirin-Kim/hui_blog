import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/shared/ui/navBar/Navbar";
import Header from "@/shared/ui/header/Header";

export const metadata: Metadata = {
  title: "Hui-blog",
  description: "Blog of Hwi-rin Kim, Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="w-dvw h-dvh">
        <Header />
        <div className="flex flex-grow pt-[80px] xl:pt-0">
          <Navbar />
          <main className="flex flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
