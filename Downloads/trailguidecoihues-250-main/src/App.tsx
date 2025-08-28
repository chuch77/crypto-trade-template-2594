
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hotels from "./pages/Hotels";
import Apartments from "./pages/Apartments";
import Flights from "./pages/Flights";
import CarRental from "./pages/CarRental";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import "./App.css";

// Language wrapper component to handle URL parameters
const LanguageWrapper = ({ language }: { language: 'en' | 'es' }) => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage(language);
  }, [language, setLanguage]);
  
  return <Index />;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/es" replace />} />
          <Route path="/en" element={<LanguageWrapper language="en" />} />
          <Route path="/es" element={<LanguageWrapper language="es" />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/car-rental" element={<CarRental />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
