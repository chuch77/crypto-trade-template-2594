import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Editor from "./pages/Editor";
import SobreMi from "./pages/SobreMi";
import Servicios from "./pages/Servicios";
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/store" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/editor" element={<Editor />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
