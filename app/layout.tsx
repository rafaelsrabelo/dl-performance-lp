import { Geist, Geist_Mono } from "next/font/google"
import { Toaster } from "sonner"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "DL Performance | Assessoria Esportiva de Corrida",
  description: "Treinamento personalizado de corrida com Diego Lima. Alcance seus objetivos com metodologia profissional e acompanhamento individualizado.",
  metadataBase: new URL("https://www.dlperformance.net"),
  openGraph: {
    title: "DL Performance | Assessoria Esportiva de Corrida",
    description: "Treinamento personalizado de corrida com Diego Lima. Alcance seus objetivos com metodologia profissional e acompanhamento individualizado.",
    url: "https://www.dlperformance.net",
    siteName: "DL Performance",
    images: [
      {
        url: "/banner.JPEG",
        width: 1200,
        height: 630,
        alt: "DL Performance - Assessoria Esportiva de Corrida",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DL Performance | Assessoria Esportiva de Corrida",
    description: "Treinamento personalizado de corrida com Diego Lima. Alcance seus objetivos com metodologia profissional e acompanhamento individualizado.",
    images: ["/banner.JPEG"],
  },
};

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn("antialiased dark", fontMono.variable, "font-sans", fontSans.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
