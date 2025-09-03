import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { useThemeStore } from "./stores/theme";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Supplements from "./pages/Supplements";
import Sales from "./pages/Sales";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const { isDark } = useThemeStore();

  useEffect(() => {
    // Apply theme on mount
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            <Route path="/supplements" element={
              <DashboardLayout>
                <Supplements />
              </DashboardLayout>
            } />
            <Route path="/sales" element={
              <DashboardLayout>
                <Sales />
              </DashboardLayout>
            } />
            <Route path="/clients" element={
              <DashboardLayout>
                <Users />
              </DashboardLayout>
            } />
            <Route path="/settings" element={
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
