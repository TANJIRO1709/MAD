// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MakeAdream",
  description: "Travel and Explore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
        {children}
             <link rel="preconnect" href="https://fonts.googleapis.com"></link>
             <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
             <link href="https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@300;400;700&display=swap" rel="stylesheet"></link>
    
        </body>
    </html>
  );
}