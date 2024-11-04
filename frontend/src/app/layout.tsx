import "./globals.css";
import { Inter, Arimo } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const arimo = Arimo({ subsets: ["latin"], variable: "--font-arimo" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} ${inter.variable} font-Body`}>{children}</body>
    </html>
  );
}
