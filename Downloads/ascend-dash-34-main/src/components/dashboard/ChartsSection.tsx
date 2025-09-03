import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data for charts
const salesData = [
  { name: 'Ene', ventas: 4000, usuarios: 2400 },
  { name: 'Feb', ventas: 3000, usuarios: 1398 },
  { name: 'Mar', ventas: 2000, usuarios: 9800 },
  { name: 'Abr', ventas: 2780, usuarios: 3908 },
  { name: 'May', ventas: 1890, usuarios: 4800 },
  { name: 'Jun', ventas: 2390, usuarios: 3800 },
  { name: 'Jul', ventas: 3490, usuarios: 4300 },
];

const userGrowthData = [
  { name: 'Ene', usuarios: 400 },
  { name: 'Feb', usuarios: 300 },
  { name: 'Mar', usuarios: 600 },
  { name: 'Abr', usuarios: 800 },
  { name: 'May', usuarios: 500 },
  { name: 'Jun', usuarios: 700 },
  { name: 'Jul', usuarios: 900 },
];

const deviceData = [
  { name: 'Desktop', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Mobile', value: 35, color: 'hsl(var(--success))' },
  { name: 'Tablet', value: 20, color: 'hsl(var(--warning))' },
];

const revenueData = [
  { name: 'Ene', ingresos: 12000 },
  { name: 'Feb', ingresos: 19000 },
  { name: 'Mar', ingresos: 15000 },
  { name: 'Abr', ingresos: 25000 },
  { name: 'May', ingresos: 22000 },
  { name: 'Jun', ingresos: 30000 },
  { name: 'Jul', ingresos: 28000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border rounded-lg shadow-lg p-3">
        <p className="text-sm font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value?.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Sales & Users Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Ventas y Usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUsuarios" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="ventas"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorVentas)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="usuarios"
                  stroke="hsl(var(--success))"
                  fillOpacity={1}
                  fill="url(#colorUsuarios)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Revenue Line Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Ingresos Mensuales</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="ingresos"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* User Growth Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Crecimiento de Usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="usuarios"
                  fill="hsl(var(--success))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Device Usage Pie Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="dashboard-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Dispositivos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}