
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Stocks from "./pages/Stocks"; // Productos
import Markets from "./pages/Markets"; // Categorías
import Currencies from "./pages/Currencies"; // Marcas
import Global from "./pages/Global"; // Tendencias
import Portfolio from "./pages/Portfolio"; // Mi Carrito
import Performance from "./pages/Performance"; // Mis Pedidos
import Analysis from "./pages/Analysis"; // Favoritos
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stocks" element={<Stocks />} /> {/* Productos */}
          <Route path="/markets" element={<Markets />} /> {/* Categorías */}
          <Route path="/currencies" element={<Currencies />} /> {/* Marcas */}
          <Route path="/global" element={<Global />} /> {/* Tendencias */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Mi Carrito */}
          <Route path="/performance" element={<Performance />} /> {/* Mis Pedidos */}
          <Route path="/analysis" element={<Analysis />} /> {/* Favoritos */}
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
