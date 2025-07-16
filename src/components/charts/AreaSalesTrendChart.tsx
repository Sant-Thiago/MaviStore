import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

const data = [
  { name: 'Week 1', sales: 2400 },
  { name: 'Week 2', sales: 2210 },
  { name: 'Week 3', sales: 2290 },
  { name: 'Week 4', sales: 2000 },
];

export function AreaSalesTrendChart() {
  return (
    <ResponsiveContainer width="100%">
        <AreaChart data={data}>
            <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0F172A" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#dfe6eb" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
                padding={{ left: 21, right: 21 }}
            />
            <YAxis hide />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="sales"
                stroke="#0F172A"
                strokeWidth={2}
                fill="url(#colorSales)"
            />
        </AreaChart>
    </ResponsiveContainer>
  );
}
