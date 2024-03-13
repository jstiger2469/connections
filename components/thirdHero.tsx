import HeroBackground from '@/public/images/third-hero.jpeg'


export default function thirdHero() {
    
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
            {/* <h1 className="text-5xl md:text-6xl text-white font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Conoces los pasos a seguir después de un accidente? <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"></span></h1> */}
            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Want more tutorials & guides?</h3>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-column justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-white-800 border border-white-700 focus:border-white-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-white-500" placeholder="Your email…" aria-label="Your email…" />
                    <input type="first" className="form-input w-full appearance-none bg-white-800 border border-white-700 focus:border-white-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-white-500" placeholder="Your email…" aria-label="Your email…" />
                    <input type="last" className="form-input w-full appearance-none bg-white-800 border border-white-700 focus:border-white-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-white-500" placeholder="Your email…" aria-label="Your email…" />
                    <input type="email" className="form-input w-full appearance-none bg-white-800 border border-white-700 focus:border-white-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-white-500" placeholder="Your email…" aria-label="Your email…" />

                    <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Subscribe</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">No spam. You can unsubscribe at any time.</p>
                </form>
              </div>

            </div>
            
            <div className="max-w-3xl mx-auto">
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Obtén la asistencia que requieres</a>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}