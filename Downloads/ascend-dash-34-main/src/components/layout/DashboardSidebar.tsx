import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Menu,
  X,
  ChevronLeft,
  Dumbbell,
  Package,
  ShoppingCart,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Supplements', href: '/supplements', icon: Package },
  { name: 'Sales', href: '/sales', icon: ShoppingCart },
  { name: 'Clients', href: '/clients', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const getNavClassName = (path: string) => {
    const active = isActive(path);
    return cn(
      'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
      active
        ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-sm'
        : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
    );
  };

  return (
    <Sidebar
      className={cn(
        'fixed left-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out',
        collapsed ? 'w-16' : 'w-64'
      )}
      collapsible="icon"
    >
      <div className="flex h-full flex-col bg-sidebar border-r border-sidebar-border">
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b border-sidebar-border px-4">
          <motion.div
            initial={false}
            animate={{ 
              scale: collapsed ? 0.8 : 1,
              opacity: collapsed ? 0.7 : 1 
            }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Dumbbell className="h-4 w-4 text-primary-foreground" />
            </div>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-lg font-semibold text-sidebar-foreground"
              >
                GymSupps
              </motion.span>
            )}
          </motion.div>
        </div>

        <SidebarContent className="flex-1 px-3 py-4">
          <SidebarGroup>
            <SidebarGroupLabel className={cn(
              'px-3 text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider mb-2',
              collapsed && 'sr-only'
            )}>
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {navigation.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.href}
                        className={getNavClassName(item.href)}
                        title={collapsed ? item.name : undefined}
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        {!collapsed && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="truncate"
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Collapse button */}
        <div className="border-t border-sidebar-border p-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {}}
            className="flex w-full items-center justify-center rounded-lg p-2 text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-colors"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronLeft className={cn(
              'h-4 w-4 transition-transform duration-200',
              collapsed && 'rotate-180'
            )} />
          </motion.button>
        </div>
      </div>
    </Sidebar>
  );
}