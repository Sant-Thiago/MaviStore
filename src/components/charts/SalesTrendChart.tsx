import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Week 1', sales: 2400 },
  { name: 'Week 2', sales: 2210 },
  { name: 'Week 3', sales: 2290 },
  { name: 'Week 4', sales: 2000 },
];

export function SalesTrendChart() {
  return (
    <ResponsiveContainer width="100%">
      <LineChart data={data}>
         <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#666' }}
            padding={{ left: 21, right: 21 }}
          />

          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#000"
            strokeWidth={2}
            dot={false}
          />
      </LineChart>
    </ResponsiveContainer>
  );
}
