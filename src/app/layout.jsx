import localFont from "next/font/local";
import "./globals.css";
import Header from "@/layouts/header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "김혜란 포트폴리오",
  description: "웹 프론트엔드 개발자 - 김혜란 포트폴리오",
  openGraph: {
    title: "김혜란 포트폴리오",
    description: "웹 프론트엔드 개발자 - 김혜란 포트폴리오",
    images: [
      {
        url: `${process.env.ASSET_PREFIX}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: "김혜란 포트폴리오 이미지",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
