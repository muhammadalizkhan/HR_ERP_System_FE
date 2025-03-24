import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Engineering', value: 42 },
  { name: 'Design', value: 26 },
  { name: 'Product', value: 17 },
  { name: 'Marketing', value: 15 },
];

const COLORS = ['#000000', '#4B5563', '#9CA3AF', '#D1D5DB'];

const DepartmentChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: 'white', border: '2px solid black' }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentChart;