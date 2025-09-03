import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Globe } from 'lucide-react';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { ChartsSection } from '@/components/dashboard/ChartsSection';

export default function Analytics() {
  const analyticsMetrics = [
    {
      title: 'Tráfico Total',
      value: '125.4K',
      change: '+18.2% vs mes anterior',
      icon: Globe,
      trend: 'up' as const,
      delay: 0
    },
    {
      title: 'Conversiones',
      value: '3.4K',
      change: '+12.8% vs mes anterior',
      icon: TrendingUp,
      trend: 'up' as const,
      delay: 0.1
    },
    {
      title: 'Nuevos Usuarios',
      value: '2.1K',
      change: '+24.5% vs mes anterior',
      icon: Users,
      trend: 'up' as const,
      delay: 0.2
    },
    {
      title: 'Tasa de Conversión',
      value: '2.7%',
      change: '+0.3% vs mes anterior',
      icon: BarChart3,
      trend: 'up' as const,
      delay: 0.3
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">
          Análisis detallado del rendimiento y métricas de tu plataforma.
        </p>
      </motion.div>

      {/* Analytics Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsMetrics.map((metric) => (
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

      {/* Charts */}
      <ChartsSection />
    </div>
  );
}