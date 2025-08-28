import React from 'react';
import TrivagoNavbar from '../components/TrivagoNavbar';
import Footer from '../components/Footer';

const Flights = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-white">
      <TrivagoNavbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vuelos</h1>
          <p className="text-xl text-gray-600">Encuentra vuelos baratos a tu destino favorito</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Flights;