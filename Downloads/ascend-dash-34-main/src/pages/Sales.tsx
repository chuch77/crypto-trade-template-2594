import { motion } from 'framer-motion';
import {
  ShoppingCart,
  TrendingUp,
  Calendar,
  DollarSign,
  Package,
  User
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const recentSales = [
  {
    id: 1,
    customer: 'Ana Garcia',
    product: 'Whey Protein Gold',
    amount: 45.99,
    date: '2024-01-15',
    status: 'Completed'
  },
  {
    id: 2,
    customer: 'Carlos Lopez',
    product: 'Creatine Monohydrate',
    amount: 29.99,
    date: '2024-01-15',
    status: 'Completed'
  },
  {
    id: 3,
    customer: 'Maria Rodriguez',
    product: 'Pre-Workout Extreme',
    amount: 39.99,
    date: '2024-01-14',
    status: 'Pending'
  },
  {
    id: 4,
    customer: 'Jose Martin',
    product: 'BCAA Recovery',
    amount: 34.99,
    date: '2024-01-14',
    status: 'Completed'
  },
  {
    id: 5,
    customer: 'Laura Sanchez',
    product: 'Casein Protein',
    amount: 42.99,
    date: '2024-01-13',
    status: 'Completed'
  }
];

export default function Sales() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-1 sm:space-y-2"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Sales</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage and analyze your supplement store sales
        </p>
      </motion.div>

      {/* Sales Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="dashboard-card-hover p-4 sm:p-6"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-lg bg-green-500">
              <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-foreground">$2,847</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Today's Sales</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="dashboard-card-hover p-4 sm:p-6"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-lg bg-blue-500">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-foreground">47</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Today's Orders</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="dashboard-card-hover p-4 sm:p-6"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-lg bg-purple-500">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-foreground">$60.45</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Average Ticket</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="dashboard-card-hover p-4 sm:p-6"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-lg bg-orange-500">
              <Package className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-foreground">156</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Products Sold</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Sales Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="dashboard-card p-4 sm:p-6"
      >
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <ShoppingCart className="h-5 w-5 text-primary" />
          <h3 className="text-base sm:text-lg font-semibold">Recent Sales</h3>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-muted-foreground text-xs sm:text-sm">Customer</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-muted-foreground text-xs sm:text-sm">Product</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-muted-foreground text-xs sm:text-sm">Amount</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-muted-foreground text-xs sm:text-sm">Date</th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-muted-foreground text-xs sm:text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentSales.map((sale, index) => (
                <motion.tr
                  key={sale.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                >
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground text-sm sm:text-base">{sale.customer}</span>
                    </div>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-foreground text-sm sm:text-base">{sale.product}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-semibold text-foreground text-sm sm:text-base">${sale.amount}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span className="text-xs sm:text-sm">{new Date(sale.date).toLocaleDateString('en-US')}</span>
                    </div>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4">
                    <Badge 
                      variant={sale.status === 'Completed' ? 'default' : 'secondary'}
                    >
                      {sale.status}
                    </Badge>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}