"use client";
import React, { FormEvent, ChangeEvent } from 'react';

import { useHubspotForm } from 'next-hubspot';
import { useState, useEffect } from 'react';
import HeroBackground from '@/public/images/second-hero.jpeg'


const SecondHero = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { formCreated } = useHubspotForm({
    portalId: '45489682',
    formId: 'Xf8e8262e-4183-4dd1-b78a-0ec7ec4c099d',
    target: '#hubspot-form-wrapper',
  });

  useEffect(() => {
    if (formCreated) {
      setLoaded(true);
    }
  }, [formCreated]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    typeOfAccident: 'Auto Accident',
    acuerdoOptIn: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Access form data from the event
    const formData = new FormData(e.currentTarget);
    const data: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Log the form data
    console.log('Form Data:', data);

    // Your form submission logic here
    try {
      // Perform any client-side validation or processing needed
      // ...

      // Make a POST request to your API route with the form data
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form submitted successfully', response);
        // Handle success, e.g., show a success message or redirect
      } else {
        console.error('Form submission failed');
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  if (!loaded) {
    return <div>Loading HubSpot form...</div>;
  }

  if (error) {
    console.error('Error loading HubSpot form:', error);
    return <div>Error loading HubSpot form. Please try again later.</div>;
  }

  return (
    <section className="relative  min-h-[600px] mt-20 pt-10 mb-10">
      <div id="hubspot-form-wrapper">
        <div className="h-screen flex flex-col items-center justify-center bg-white text-center p-4"
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
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-extrabold leading-tighter tracking-tighter mb-4">
            Conoces los pasos a seguir después de un accidente?
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"></span>
          </h1>
          <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">

          <form onSubmit={handleSubmit}>
            {/* Your form fields */}
            <div className="mb-5">
            <label htmlFor="firstname"  className="sr-only">Nombre:<span className="text-red-600">*</span></label>

  <input
    type="text"
    placeholder='Nombre'
    id="firstname"
    name="firstname"
    className="border border-gray-300 shadow p-2 w-full rounded mb-2"
    value={formData.firstname}
    onChange={handleChange}
    required
  />
</div>
<div className="mb-5">
<label htmlFor="lastname"  className="sr-only">Apellido:<span className="text-red-600">*</span></label>

  <input
    type="text"
    id="lastname"
    placeholder='Apellido'

    name="lastname"
    className="border border-gray-300 shadow p-2 w-full rounded mb-2"
    value={formData.lastname}
    onChange={handleChange}
    required
  />
</div>
            <div  className="mb-5">
            <label htmlFor="email"  className="sr-only">Correo electrónico:<span className="text-red-600">*</span></label>

              <input
                type="email"
                placeholder='Correo electrónico'
                id="email"
                name="email"
                className="border border-gray-300 shadow p-2 w-full rounded mb-"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone"  className="sr-only">Teléfono:</label>
              <input
                type="phone"
                id="phone"
                placeholder="Teléfono"
                name="phone"
                className="border border-gray-300 shadow p-2 w-full rounded mb-"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label className="sr-only" htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                placeholder='Mensaje'

                rows="4"
                className="border border-gray-300 shadow p-2 w-full rounded mb-"

                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
<div className="flex items-center mb-4">
  <input
    type="checkbox"
    name="acuerdoOptIn"
    checked={formData.acuerdoOptIn}
    onChange={handleChange}
    required
    className="mr-2"
  />
  <p className="text-sm text-gray-500">
    Acepto recibir contactos de Conexion Legal Hispana o bufetes de abogados afiliados a través de SMS o correo electrónico.
  </p>
</div>
            <button className="btn text-white bg-gray-900 hover:bg-gray-800  w-full sm:w-full sm:ml-auto" type="submit">Enviar</button>
          </form>


         
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
