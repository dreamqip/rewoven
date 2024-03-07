import { Inter, Source_Code_Pro } from "next/font/google";
import { PreloadResources } from "./preload-resources";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-code-pro",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`antialiased ${inter.variable} ${source_code_pro.variable}`}>
      <PreloadResources />
      <body className="mx-auto min-w-0 max-w-md bg-rewoven-ivory">{children}</body>
    </html>
  );
}
