import type { Metadata } from "next";
import { Noto_Sans_JP, Archivo_Black } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"], //元からNoto_Sans_JPは日本語なので[japaneseを指定する必要ない]
  variable: "--font-main",
  display: "swap", //まず標準のフォントで表示してこの指定したフォントに入れ替える
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-head",
  display: "swap",
  weight: "400", // Archivo Blackは通常400ではなく900が一般的ですが、Next.jsの設定で400を指定しているため、ここでは400を使用
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${notoSansJP.variable} ${archivoBlack.variable}`}>
        <Header />
        <div className="pt-[80px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
