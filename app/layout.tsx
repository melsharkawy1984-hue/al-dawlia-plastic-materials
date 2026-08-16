import type { Metadata } from "next";
import AOSProvider from "@/components/aos-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AL DAWLIA FOR PLASTIC MATERIALS",
  description:
    "High quality polyethylene packaging solutions from Egypt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AOSProvider />

        {children}
      </body>
    </html>
  );
}