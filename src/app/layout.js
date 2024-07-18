import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets:["latin" ]});

export const metadata = {
  title: "Rate my player",
  description: "Rating players",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  );
}
