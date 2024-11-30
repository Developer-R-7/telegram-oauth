import type { Metadata } from "next";
import localFont from "next/font/local";
import AppContextProvider from "~/contexts";
import { cn } from "~/lib/utils";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Telegram OAuth",
  description: "Telegram OAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "dark antialiased",
        )}
      >
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
