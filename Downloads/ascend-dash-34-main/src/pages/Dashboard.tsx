import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  DollarSign,
  Package,
  Activity,
  Clock,
  ShoppingCart,
  Zap,
  Target
} from 'lucide-react';
import { useDashboardStore } from '@/stores/dashboard';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { ChartsSection } from '@/components/dashboard/ChartsSection';
import { UserTable } from '@/components/dashboard/UserTable';

export default function Dashboard() {
  const { metrics, fetchData } = useDashboardStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const metricCards = [
    {
      title: 'Monthly Sales',
      value: metrics.totalSales,
      change: '+12.5% vs last month',
      icon: ShoppingCart,
      trend: 'up' as const,
      delay: 0
    },
    {
      title: 'Active Clients',
      value: metrics.activeUsers,
      change: '+8.2% vs last month',
      icon: Users,
      trend: 'up' as const,
      delay: 0.1
    },
    {
      title: 'Revenue',
      value: `$${metrics.revenue.toLocaleString()}`,
      change: '+15.3% vs last month',
      icon: DollarSign,
      trend: 'up' as const,
      delay: 0.2
    },
    {
      title: 'Products in Stock',
      value: '247',
      change: '+5 new products',
      icon: Package,
      trend: 'up' as const,
      delay: 0.3
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-1 sm:space-y-2"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Supplements Dashboard</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage your sports supplements store. Here's a summary of your sales and products.
        </p>
      </motion.div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {metricCards.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            icon={metric.icon}
            trend={metric.trend}
            delay={metric.delay}
          />
        ))}
      </div>

      {/* Charts Section */}
      <ChartsSection />

      {/* Recent Activity & Users Table */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="xl:col-span-1"
        >
          <div className="dashboard-card p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="text-base sm:text-lg font-semibold">Recent Activity</h3>
            </div>
            <div className="space-y-2 sm:space-y-4">
              {[
                {
                  action: 'Whey Protein Sale',
                  user: 'Ana Garcia',
                  time: '5 min ago',
                  type: 'sale'
                },
                {
                  action: 'New client registered',
                  user: 'Carlos Lopez',
                  time: '12 min ago',
                  type: 'user'
                },
                {
                  action: 'Stock updated - Creatine',
                  user: 'System',
                  time: '1 hour ago',
                  type: 'stock'
                },
                {
                  action: 'Pre-workout Order',
                  user: 'Maria Rodriguez',
                  time: '2 hours ago',
                  type: 'sale'
                }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'sale' ? 'bg-success' :
                    activity.type === 'user' ? 'bg-primary' :
                    activity.type === 'stock' ? 'bg-warning' : 'bg-primary'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      by {activity.user}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Users Table */}
        <div className="xl:col-span-2">
          <UserTable />
        </div>
      </div>
    </div>
  );
}