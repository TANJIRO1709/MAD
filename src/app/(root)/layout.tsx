// src/app/layout.js
import { Inter,Sulphur_Point } from "next/font/google";
import "./homepage/homepage.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MakeAdream",
  description: "Travel and Explore",
};

export default function RootLayout({ children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
