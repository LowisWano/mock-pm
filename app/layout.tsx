import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhilNITS PM Mock Exam",
  description: "Test your knowledge and prepare for the PhilNITS Certification Exam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
