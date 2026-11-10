import { Barlow_Condensed, Geist } from "next/font/google"
import { Toaster } from "sonner"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnalyticsBridge } from "@/components/analytics-bridge"
import { cn } from "@/lib/utils"

const SITE_URL = "https://www.dlperformance.net"
const SITE_NAME = "DL Performance"
const TITLE = "DL Performance | Assessoria de Corrida e Avaliação Biomecânica"
const DESCRIPTION =
  "Assessoria de corrida com planilha individualizada, ajustes contínuos e suporte direto com o coach Diego Lopes. Avaliação biomecânica presencial para correr mais e lesionar menos."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

// Dados estruturados (Schema.org). Apenas informações já publicadas na página.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo_h_white.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: DESCRIPTION,
  telephone: "+55-85-98826-7557",
  email: "contato.dlperformance@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Eng. Leal Lima Verde, 1509",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/dl_performanceclub/"],
  founder: {
    "@type": "Person",
    name: "Diego Lopes",
    jobTitle: "Profissional de Educação Física",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Assessoria de corrida online",
        serviceType: "Treinamento de corrida individualizado",
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Avaliação Biomecânica Presencial",
        serviceType: "Análise biomecânica da corrida",
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
  ],
}

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Só os cortes usados na página: 700 e 800 regular, 800 itálico.
// Cada corte é um arquivo pré-carregado, então menos cortes = LCP melhor.
const fontDisplay = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
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
      className={cn("antialiased dark", fontDisplay.variable, "font-sans", fontSans.variable)}
    >
      <body>
        <a href="#conteudo" className="dl-skip-link">
          Pular para o conteúdo
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster richColors position="top-center" />
        <AnalyticsBridge />
        <script
          type="application/ld+json"
          // Conteúdo estático e controlado pelo projeto (sem entrada de usuário)
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
