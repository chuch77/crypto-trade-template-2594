
import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("bg-background/95 backdrop-blur-sm sticky top-0 z-30 border-b", className)}>
      <div className="container flex items-center justify-between h-14 sm:h-16 px-2 sm:px-4">
        <div className="flex items-center gap-2 lg:gap-4 flex-1">
          <h1 className="text-base sm:text-lg font-semibold tracking-tight lg:text-xl">StyleHub</h1>
          
          <div className="relative hidden sm:flex items-center h-8 sm:h-9 rounded-md px-2 sm:px-3 text-muted-foreground focus-within:text-foreground bg-muted/50 flex-1 max-w-xs lg:max-w-sm">
            <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <Input 
              type="search" 
              placeholder="Search products, brands..." 
              className="h-8 sm:h-9 w-full bg-transparent border-none px-0 py-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground text-sm"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative h-8 w-8 sm:h-9 sm:w-9"
          >
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary animate-pulse" />
          </Button>
          
          <Avatar className="h-8 w-8 sm:h-9 sm:w-9 transition-transform duration-200 hover:scale-105">
            <AvatarFallback className="bg-primary/10 text-primary">
              <User className="h-4 w-4 sm:h-5 sm:w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      <div className="sm:hidden px-2 pb-2">
        <div className="relative flex items-center h-8 rounded-md px-2 text-muted-foreground focus-within:text-foreground bg-muted/50">
          <Search className="h-3 w-3 mr-1" />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="h-8 w-full bg-transparent border-none px-0 py-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground text-sm"
          />
        </div>
      </div>
    </header>
  );
}
