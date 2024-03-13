import { DefaultSeo } from 'next-seo';

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import SecondHero from '@/components/secondHero'
import ThirdHero from '@/components/thirdHero'
import About from '@/components/about'



export default function Home() {
  return (
    <>
        {/* <DefaultSeo
                title="ConexionLegalHispana"
                description="Abogados de Lesiones Personales ubicados en el Sur de California"
                openGraph={{
                    type: 'website',
                    locale: 'es_US',
                    url: 'https://www.conexionlegalhispana.com/',
                    siteName: 'ConexionLegalHispana',
                }}
                // twitter={{
                //     handle: '@handle',
                //     site: '@site',
                //     cardType: 'summary_large_image',
                // }}
            />

<DefaultSeo/> */}
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <About />

      <SecondHero />
      {/* <ThirdHero /> */}

      {/* <Newsletter /> */}
    </>
  )
}
