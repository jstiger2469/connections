import VideoThumb from '@/public/images/home1.png'
import HeroBackground from '@/public/images/heroaccident.jpg'

import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">
 
      <div className="max-w-full mx-0 px-4 sm:px-6"
      style={{
        background: `url(${HeroBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Set the height to 100% of the viewport height
        display: 'flex',
        alignItems: 'center',
        width: '100vw', // Set the width to 100% of the viewport width
        justifyContent: 'center',
      }}
      >
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl text-white font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Conoces los pasos a seguir después de un accidente? <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"></span></h1>
            <div className="max-w-3xl mx-auto">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#hubspot-form-wrapper">Obtén la asistencia que requieres</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}