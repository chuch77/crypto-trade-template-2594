import { motion } from 'framer-motion';
import {
  Package,
  Plus,
  Search,
  Filter,
  Zap,
  Target,
  Dumbbell,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const supplements = [
  {
    id: 1,
    name: 'Whey Protein Gold',
    category: 'Protein',
    price: 45.99,
    stock: 23,
    brand: 'NutriMax',
    icon: Dumbbell,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Creatine Monohydrate',
    category: 'Creatine',
    price: 29.99,
    stock: 15,
    brand: 'PowerLift',
    icon: Zap,
    color: 'bg-yellow-500'
  },
  {
    id: 3,
    name: 'Pre-Workout Extreme',
    category: 'Pre-Workout',
    price: 39.99,
    stock: 8,
    brand: 'EnergyBoost',
    icon: Target,
    color: 'bg-red-500'
  },
  {
    id: 4,
    name: 'BCAA Recovery',
    category: 'Amino Acids',
    price: 34.99,
    stock: 12,
    brand: 'RecoverMax',
    icon: Heart,
    color: 'bg-green-500'
  },
  {
    id: 5,
    name: 'Casein Protein',
    category: 'Protein',
    price: 42.99,
    stock: 18,
    brand: 'NightFuel',
    icon: Dumbbell,
    color: 'bg-purple-500'
  },
  {
    id: 6,
    name: 'Pure Glutamine',
    category: 'Amino Acids',
    price: 24.99,
    stock: 25,
    brand: 'PureGains',
    icon: Heart,
    color: 'bg-pink-500'
  }
];

export default function Supplements() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Supplements</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Manage your sports supplements inventory
          </p>
        </div>
        <Button className="flex items-center gap-2 w-full sm:w-auto">
          <Plus className="h-4 w-4" />
          Add Supplement
        </Button>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search supplements..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {supplements.map((supplement, index) => (
          <motion.div
            key={supplement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className="dashboard-card-hover p-4 sm:p-6"
          >
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className={`p-3 rounded-lg ${supplement.color}`}>
                <supplement.icon className="h-6 w-6 text-white" />
              </div>
              <Badge 
                variant={supplement.stock > 10 ? "default" : supplement.stock > 5 ? "secondary" : "destructive"}
              >
                Stock: {supplement.stock}
              </Badge>
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                {supplement.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {supplement.brand} • {supplement.category}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2">
                <span className="text-xl sm:text-2xl font-bold text-primary">
                  ${supplement.price}
                </span>
                <Button size="sm" className="w-full sm:w-auto">
                  View Details
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
      >
        <div className="dashboard-card p-3 sm:p-4 text-center">
          <Package className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-foreground">247</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Total Products</p>
        </div>
        <div className="dashboard-card p-3 sm:p-4 text-center">
          <Dumbbell className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-foreground">89</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Proteins</p>
        </div>
        <div className="dashboard-card p-3 sm:p-4 text-center">
          <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-foreground">45</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Pre-Workouts</p>
        </div>
        <div className="dashboard-card p-3 sm:p-4 text-center">
          <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-foreground">67</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Amino Acids</p>
        </div>
      </motion.div>
    </div>
  );
}