import AutoAccident from '@/public/images/home2.jpeg'
import CommercialAccident from '@/public/images/pexels-mikhail-nilov-8942694.jpg'
import WorkAccident from '@/public/images/work-related-accident.jpeg'



export default function About() {
  return (
    <section className="relative">

<div className="p-5 md:p-10">

      
<div className="max-w-full mx-auto bg-white rounded-lg shadow-2xl md:flex">
        <img
          src={AutoAccident.src} alt="Accidente de autos en una calle de la ciudad con varios vehículos involucrados"
          className="rounded-t-lg md:w-1/2 lg:w-1/3 md:rounded-l-lg md:rounded-t-none object-cover"
          />

        <div className="p-6">
          <h2 className="mb-2 font-bold text-xl md:text-2xl text-black-700">Accidentes de
Auto, Moto o
Atropellados</h2>
          <p className="text-gray-500">Ayudamos a personas en situaciones de todo tipo de
Accidente de Aumovil, Uber, Lyft, Vehículos
Comerciales, Motocicletas, Atropellados. Te
ayudamos a recuperar lo que te corresponde y a
estar protegido contra las aseguranzas que no
quieren pagarte por tu accidente o lesiones. Es muy
importante informarte a tiempo después de un
accidente para que estes cubierto contra todo tipo
de gastos que conlleva esta terrible situación de
Accidente.</p>
          <div className="mt-2">
            <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-full sm:ml-auto" href="#hubspot-form-wrapper">Obtén la asistencia que requieres</a>
          </div>
        </div>
      </div>
    </div>

    <div className="p-5 md:p-10">

      
  <div className="max-w-full mx-auto bg-white rounded-lg shadow-2xl md:flex">
        <div className="p-6 md:w-2/3"> {/* Adjusted width for content */}
          <h2 className="mb-2 font-bold text-xl md:text-2xl text-black-700">Caídas en lugares comerciales</h2>
          <p className="text-gray-500">Las caídas en locales comerciales son bastante comunes debido a la negligencia de los negocios. Ha habido situaciones en las que la falta de atención por parte del establecimiento ha resultado en lesiones para las personas, y estas han llegado a recibir compensaciones significativas por sus caídas. Actúa de inmediato, infórmate sobre tus derechos lo antes posible. </p>
          <div className="mt-2">
            <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-full sm:ml-auto" href="#hubspot-form-wrapper">Obtén la asistencia que requieres</a>
          </div>
        </div>

        <img
        src={CommercialAccident.src} alt="Accidente comercial en un entorno de negocios con vehículos y equipos involucradosl"         
        className="rounded-t-lg md:w-1/2 lg:w-1/3 md:rounded-l-lg md:rounded-t-none object-cover"
        />
      </div>
    </div>

    <div className="p-5 md:p-10">

      
  <div className="max-w-full mx-auto bg-white rounded-lg shadow-2xl md:flex">
    <img
      src={WorkAccident.src}
      alt="Accidente laboral en el lugar de trabajo con empleados y equipos involucrados"
      className="rounded-t-lg md:w-1/2 lg:w-1/3 md:rounded-l-lg md:rounded-t-none object-cover"
    />

    <div className="p-6">
      <h2 className="mb-2 font-bold text-xl md:text-2xl text-black-700">Accidentes de Trabajo</h2>
      <p className="text-gray-500">Los accidentes o lesiones laborales a menudo son impredecibles. Las lesiones derivadas del trabajo repetitivo son comunes con el paso de los años, y podrías tener derecho a recibir una compensación económica por tus lesiones o accidente. Tu estatus migratorio no importa; incluso si te encuentras de manera irregular en este país, la ley te brinda protección. Infórmate cuanto antes sobre tus derechos y toma medidas de inmediato para conocer lo que podrías recibir en caso de un accidente o lesión laboral.</p>
      <div className="mt-2">
        <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-full sm:ml-auto" href="#hubspot-form-wrapper">Obtén la asistencia que requieres</a>
      </div>
    </div>
  </div>
</div>
<br></br>
    </section>
    
    )
  }
