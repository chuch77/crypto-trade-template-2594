import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
  avatar: string;
}

interface DashboardMetrics {
  totalSales: number;
  activeUsers: number;
  revenue: number;
  pageViews: number;
}

interface DashboardState {
  metrics: DashboardMetrics;
  users: User[];
  isLoading: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchData: () => Promise<void>;
}

// Mock data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ana García',
    email: 'ana.garcia@empresa.com',
    role: 'Admin',
    status: 'active',
    joinDate: '2024-01-15',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b79e0d99?w=150'
  },
  {
    id: '2',
    name: 'Carlos López',
    email: 'carlos.lopez@empresa.com',
    role: 'Manager',
    status: 'active',
    joinDate: '2024-02-20',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
  },
  {
    id: '3',
    name: 'María Rodríguez',
    email: 'maria.rodriguez@empresa.com',
    role: 'User',
    status: 'inactive',
    joinDate: '2024-03-10',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
  },
  {
    id: '4',
    name: 'David Martín',
    email: 'david.martin@empresa.com',
    role: 'User',
    status: 'active',
    joinDate: '2024-01-25',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  },
  {
    id: '5',
    name: 'Elena Sánchez',
    email: 'elena.sanchez@empresa.com',
    role: 'Manager',
    status: 'active',
    joinDate: '2024-02-05',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
  }
];

const mockMetrics: DashboardMetrics = {
  totalSales: 12847,
  activeUsers: 2543,
  revenue: 98765,
  pageViews: 54321
};

export const useDashboardStore = create<DashboardState>((set) => ({
  metrics: mockMetrics,
  users: mockUsers,
  isLoading: false,
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  fetchData: async () => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    set({
      metrics: mockMetrics,
      users: mockUsers,
      isLoading: false
    });
  }
}));