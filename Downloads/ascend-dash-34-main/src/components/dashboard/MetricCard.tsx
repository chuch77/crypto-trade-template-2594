import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
  delay?: number;
}

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  trend = 'neutral',
  className,
  delay = 0
}: MetricCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return '↗';
      case 'down':
        return '↘';
      default:
        return '→';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -2 }}
      className={cn('dashboard-card-hover', className)}
    >
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                {title}
              </p>
              <div className="space-y-1">
                <motion.p
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: delay + 0.2 }}
                  className="text-xl sm:text-2xl font-bold text-foreground"
                >
                  {typeof value === 'number' ? value.toLocaleString() : value}
                </motion.p>
                {change && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: delay + 0.4 }}
                    className={cn('text-xs font-medium flex items-center gap-1', getTrendColor())}
                  >
                    <span>{getTrendIcon()}</span>
                    {change}
                  </motion.p>
                )}
              </div>
            </div>
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.1 }}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center"
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}