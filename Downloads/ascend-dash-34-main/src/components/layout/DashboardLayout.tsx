import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardNavbar } from './DashboardNavbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col">
          <DashboardNavbar />
          
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex-1 overflow-auto"
          >
            <div className="container mx-auto p-3 sm:p-4 md:p-6 max-w-7xl">
              {children}
            </div>
          </motion.main>
        </div>
      </div>
    </SidebarProvider>
  );
}