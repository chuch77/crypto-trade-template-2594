import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Bell,
  Settings,
  User,
  LogOut,
  Moon,
  Sun,
  Menu
} from 'lucide-react';
import { useThemeStore } from '@/stores/theme';
import { useDashboardStore } from '@/stores/dashboard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';

const notifications = [
  {
    id: '1',
    title: 'Nuevo usuario registrado',
    description: 'Ana García se ha unido al sistema',
    time: 'hace 5 minutos',
    unread: true,
  },
  {
    id: '2',
    title: 'Reporte mensual disponible',
    description: 'El reporte de ventas de enero está listo',
    time: 'hace 1 hora',
    unread: true,
  },
  {
    id: '3',
    title: 'Mantenimiento programado',
    description: 'El sistema estará en mantenimiento mañana',
    time: 'hace 3 horas',
    unread: false,
  },
];

export function DashboardNavbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();
  const { searchQuery, setSearchQuery } = useDashboardStore();
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-30 flex h-14 sm:h-16 items-center justify-between border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-3 sm:px-6"
    >
      {/* Left side */}
      <div className="flex items-center gap-2 sm:gap-4">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        
        <div className="flex items-center gap-2">
          <motion.div
            className="relative"
            initial={false}
            animate={{ width: searchOpen ? 320 : 280 }}
            transition={{ duration: 0.2 }}
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search users, metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
              className="pl-10 bg-muted/50 border-muted focus:bg-background transition-colors"
            />
          </motion.div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="h-8 w-8 sm:h-9 sm:w-9 p-0"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDark ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </motion.div>
          <span className="sr-only">Cambiar tema</span>
        </Button>

        {/* Notifications */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative">
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs font-medium text-primary-foreground flex items-center justify-center"
                >
                  {unreadCount}
                </motion.span>
              )}
              <span className="sr-only">Notificaciones</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Notificaciones</h3>
              <p className="text-sm text-muted-foreground">
                Tienes {unreadCount} notificaciones sin leer
              </p>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 border-b last:border-0 hover:bg-muted/50 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">{notification.title}</p>
                        {notification.unread && (
                          <Badge variant="secondary" className="h-1.5 w-1.5 p-0 rounded-full" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 w-9 p-0 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium">Admin Dashboard</p>
              <p className="text-xs text-muted-foreground">admin@empresa.com</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Configuración
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.header>
  );
}