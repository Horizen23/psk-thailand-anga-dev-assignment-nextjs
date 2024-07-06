import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import RegistryProvider from "@/registries";

const inter = Kanit({
  weight: ["200", "100", "300", "400", "500", "600", "700", "800"],
  subsets: ["thai"],
  variable: '--font-kanit',
});

export const metadata: Metadata = {
  title: "ANGA เอเจนซี่การตลาดออนไลน์ ขับเคลื่อนด้วยคนรุ่นใหม่",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RegistryProvider>
          <body className={inter.variable}>{children}</body>
      </RegistryProvider>
    </html>
  );
}
