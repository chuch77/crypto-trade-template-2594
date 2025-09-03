import { motion } from 'framer-motion';
import { Users as UsersIcon, UserPlus, Shield, Activity } from 'lucide-react';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { UserTable } from '@/components/dashboard/UserTable';
import { Button } from '@/components/ui/button';

export default function Users() {
  const userMetrics = [
    {
      title: 'Total Clients',
      value: '1,247',
      change: '+12.3% vs last month',
      icon: UsersIcon,
      trend: 'up' as const,
      delay: 0
    },
    {
      title: 'Active Clients',
      value: '892',
      change: '+8.7% vs last month',
      icon: Activity,
      trend: 'up' as const,
      delay: 0.1
    },
    {
      title: 'New Clients',
      value: '67',
      change: '+23.1% vs last month',
      icon: UserPlus,
      trend: 'up' as const,
      delay: 0.2
    },
    {
      title: 'VIP Clients',
      value: '34',
      change: '+5 this month',
      icon: Shield,
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Clients</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Manage all clients of your supplement store.
            </p>
          </div>
          <Button className="gap-2 w-full sm:w-auto">
            <UserPlus className="h-4 w-4" />
            Add Client
          </Button>
        </div>
      </motion.div>

      {/* User Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {userMetrics.map((metric) => (
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

      {/* Users Table */}
      <UserTable />
    </div>
  );
}