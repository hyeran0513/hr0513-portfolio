import localFont from "next/font/local";
import "./globals.css";
import Header from "@/layouts/header/Header";

const geistSans = localFont({
  src: "./fonts/geist/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/geist/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const eliceDigitalBaeumBold = localFont({
  src: "./fonts/elice/EliceDigitalBaeum_Bold.woff",
  variable: "--font-elice-bold",
  weight: "bold",
});

const eliceDigitalBaeumRegular = localFont({
  src: "./fonts/elice/EliceDigitalBaeum_Regular.woff",
  variable: "--font-elice-regular",
  weight: "normal",
});

export const metadata = {
  title: "김혜란 포트폴리오",
  description: "웹 프론트엔드 개발자 - 김혜란 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eliceDigitalBaeumBold.variable} ${eliceDigitalBaeumRegular.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
