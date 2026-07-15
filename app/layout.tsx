import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import StructuredData from '@/components/StructuredData'
import '../src/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.joaocorso.net.br'),
  title: {
    default: 'Escola Municipal João Corso - Serafina Corrêa/RS',
    template: '%s | Escola Municipal João Corso',
  },
  description:
    'Site oficial da Escola Municipal João Corso, localizada em Serafina Corrêa/RS. Oferecemos ensino fundamental de qualidade, promovendo o desenvolvimento integral dos alunos e fortalecendo os laços com a comunidade.',
  keywords: [
    'Escola Municipal João Corso',
    'João Corso',
    'Serafina Corrêa',
    'educação',
    'ensino fundamental',
    'escola pública',
    'educação RS',
    'escola Serafina Corrêa',
    'EMEF João Corso',
    'ensino de qualidade',
  ],
  authors: [{ name: 'Escola Municipal João Corso' }],
  creator: 'Escola Municipal João Corso',
  publisher: 'Escola Municipal João Corso',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.joaocorso.net.br',
    siteName: 'Escola Municipal João Corso',
    title: 'Escola Municipal João Corso - Serafina Corrêa/RS',
    description:
      'Site oficial da Escola Municipal João Corso, localizada em Serafina Corrêa/RS. Oferecemos ensino fundamental de qualidade, promovendo o desenvolvimento integral dos alunos e fortalecendo os laços com a comunidade.',
    images: [
      {
        url: '/images/hero-students.jpeg',
        width: 1200,
        height: 630,
        alt: 'Escola Municipal João Corso - Educação de qualidade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escola Municipal João Corso - Serafina Corrêa/RS',
    description:
      'Site oficial da Escola Municipal João Corso, localizada em Serafina Corrêa/RS. Oferecemos ensino fundamental de qualidade.',
    images: ['/images/hero-students.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Adicione aqui os códigos de verificação quando disponíveis:
    // google: 'seu-codigo-google-search-console',
    // yandex: 'seu-codigo-yandex',
    // bing: 'seu-codigo-bing',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
        <link
          rel="icon"
          href="/favicon.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StructuredData />
        <main>{children}</main>
      </body>
    </html>
  )
}
