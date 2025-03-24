import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', count: 220 },
  { month: 'Feb', count: 228 },
  { month: 'Mar', count: 235 },
  { month: 'Apr', count: 240 },
  { month: 'May', count: 248 },
  { month: 'Jun', count: 255 },
];

const EmployeeChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'white', border: '2px solid black' }} />
          <Area type="monotone" dataKey="count" stroke="#000" fill="#000" fillOpacity={0.1} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmployeeChart;