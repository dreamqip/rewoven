import { Inter } from "next/font/google";
import { PreloadResources } from "./preload-resources";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`antialiased ${inter.variable}`}>
      <PreloadResources />
      <body>{children}</body>
    </html>
  );
}
