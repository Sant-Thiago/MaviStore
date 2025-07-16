import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarProps,
  ResponsiveContainer,
} from 'recharts';

// Tipagem das props que o shape recebe
interface CustomBarShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
}

function BarWithBorder(topHeight: number, borderColor: string) {
  return (props: any) => {  // aqui troquei CustomBarShapeProps por any
    const { x = 0, y = 0, width = 0, height = 0, fill = '#000' } = props;
    const topRectHeight = Math.min(topHeight, height);

    return (
      <g>
        <rect x={x} y={y + topRectHeight} width={width} height={height - topRectHeight} fill={fill} />
        <rect x={x} y={y} width={width} height={topRectHeight} fill={borderColor} />
      </g>
    );
  };
}

const data = [
  { name: 'Jan', a: 30, b: 20 },
  { name: 'Feb', a: 20, b: 25 },
  { name: 'Mar', a: 27, b: 18 },
  { name: 'Apr', a: 18, b: 23 },
];

export function ProductPerformanceChart() {
  return (
    <ResponsiveContainer width="100%">
      <BarChart width={300} data={data} >
        <XAxis dataKey="name" 
            axisLine={false}
            tickLine={false}
        />
        <YAxis hide/>
        <Tooltip />

        <Bar dataKey="a" stackId="a" fill="#dfe6eb" shape={BarWithBorder(2, '#000000')} />
      </BarChart>
    </ResponsiveContainer>
    
  );
}
