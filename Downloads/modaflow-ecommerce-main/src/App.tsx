import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Productos from "./pages/Productos";
import ProductDetail from "./pages/ProductDetail";
import Favoritos from "./pages/Favoritos";
import Hombre from "./pages/Hombre";
import Mujer from "./pages/Mujer";
import Ninos from "./pages/Ninos";
import Ninas from "./pages/Ninas";
import Novedades from "./pages/Novedades";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import MyOrders from "./pages/MyOrders";
import TrackOrder from "./pages/TrackOrder";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/hombre" element={<Hombre />} />
            <Route path="/mujer" element={<Mujer />} />
            <Route path="/ninos" element={<Ninos />} />
            <Route path="/ninas" element={<Ninas />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/track-order/:orderId" element={<TrackOrder />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
