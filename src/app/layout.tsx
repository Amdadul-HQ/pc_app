import type { Metadata } from "next";
import "./globals.css";
import {Manrope} from "next/font/google"
import {ClerkProvider} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme";

export const metadata: Metadata = {
  title: "Opai",
  description: "Share AI Powered Videos with your friends",
};

const manrope = Manrope({subsets:["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${manrope.className} bg-[#171717]`}
          >
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
