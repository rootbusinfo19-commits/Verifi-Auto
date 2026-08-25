import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verifi Auto | Verified Professionals. Trusted Repairs.",
  description: "South Africa’s trusted platform for verified automotive mechanics and workshops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Header */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VA</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">Verifi Auto</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="/" className="hover:text-blue-900 transition">Home</a>
              <a href="/search" className="hover:text-blue-900 transition">Search</a>
              <a href="#" className="hover:text-blue-900 transition">How it works</a>
              <a href="#" className="hover:text-blue-900 transition">For Professionals</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="text-sm font-medium hover:text-blue-900 transition">
                Log in
              </button>
              <button className="bg-blue-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-800 transition">
                Get Started
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">VA</span>
              </div>
              <span>Verifi Auto</span>
            </div>
            <p>© 2026 Verifi Auto. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}