import './css/style.css'

import { Inter } from 'next/font/google'
import Providers from "./providers";
import Head from 'next/head';

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Asesoría Legal en Casos de Accidentes - Conexion Legal Hispana',
  description: 'Obtén asesoramiento legal experto para casos de accidentes. Nuestros abogados te guiarán en el proceso legal y protegerán tus derechos.',
  keywords: 'accidentes, asesoría legal, abogados, compensación, derechos legales',
  lang: 'es',
  og: {
    title: 'Asesoría Legal en Casos de Accidentes - Conexion Legal Hispana',
    description: 'Obtén asesoramiento legal experto para casos de accidentes. Nuestros abogados te guiarán en el proceso legal y protegerán tus derechos.',
    type: 'website',
    url: 'https://www.conexionlegalhispana.com', // Replace with your website URL
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"%3E%3Ccircle cx="50" cy="50" r="20" style="fill:%230074d9"%3E%3C/circle%3E%3Ctext x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" style="fill:%23ffffff;font-size:12px"%3ECLH%3C/text%3E%3C/svg%3E',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <Head>
        {/* Other head elements */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/45489682.js"
        ></script>
      </Head>
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Providers>

          <Header />
          {children}
          {/* <Banner /> */}
        </Providers>

        </div>
      </body>
    </html>
  )
}
