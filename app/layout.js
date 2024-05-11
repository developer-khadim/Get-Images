import { Inter } from "next/font/google";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-10" >{children}</body>
    </html>
  );
}
