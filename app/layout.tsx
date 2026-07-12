import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meal Prep Value Exchange",
  description:
    "A simple meal prep value exchange with contact details, kitchen needs, and compensation.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
