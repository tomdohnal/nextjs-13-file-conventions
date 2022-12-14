import "./globals.css";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-black">
      <head />
      <body className="h-full text-neutral-400 text-3xl">
        <Navbar />
        <main className="px-20 py-12">{children}</main>
      </body>
    </html>
  );
}
