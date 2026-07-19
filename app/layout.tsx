import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AL DAWLIA | Egyptian Plastic Materials",
  description: "AL DAWLIA FOR PLASTIC MATERIALS — polyethylene packaging solutions from Egypt."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
