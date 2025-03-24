import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

const Analytics = () => {
  const departments = [
    { name: 'Engineering', headcount: 45, growth: 15 },
    { name: 'Design', headcount: 28, growth: 10 },
    { name: 'Product', headcount: 18, growth: 20 },
    { name: 'Marketing', headcount: 15, growth: 5 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black">HR Analytics</h2>
        <p className="text-gray-600 mt-2">Key metrics and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border-2 border-black p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <Users size={24} className="text-black" />
            <span className="text-sm text-green-600">+12%</span>
          </div>
          <p className="text-sm text-gray-600">Total Employees</p>
          <p className="text-2xl font-bold mt-1">248</p>
        </div>
        <div className="bg-white border-2 border-black p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp size={24} className="text-black" />
            <span className="text-sm text-green-600">+5%</span>
          </div>
          <p className="text-sm text-gray-600">Retention Rate</p>
          <p className="text-2xl font-bold mt-1">94%</p>
        </div>
        <div className="bg-white border-2 border-black p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 size={24} className="text-black" />
            <span className="text-sm text-red-600">-2%</span>
          </div>
          <p className="text-sm text-gray-600">Time to Hire</p>
          <p className="text-2xl font-bold mt-1">32 days</p>
        </div>
        <div className="bg-white border-2 border-black p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <DollarSign size={24} className="text-black" />
            <span className="text-sm text-green-600">+8%</span>
          </div>
          <p className="text-sm text-gray-600">Avg. Salary</p>
          <p className="text-2xl font-bold mt-1">$85,000</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-black rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6">Department Overview</h3>
          <div className="space-y-4">
            {departments.map((dept) => (
              <div key={dept.name} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{dept.name}</h4>
                  <span className="text-sm text-green-600">+{dept.growth}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Headcount: {dept.headcount}</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-black rounded-full h-2" 
                      style={{ width: `${(dept.headcount / 45) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-black rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6">Employee Distribution</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-2">By Department</p>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full flex">
                  <div className="bg-black w-[42%]" title="Engineering"></div>
                  <div className="bg-gray-600 w-[26%]" title="Design"></div>
                  <div className="bg-gray-400 w-[17%]" title="Product"></div>
                  <div className="bg-gray-800 w-[15%]" title="Marketing"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>Engineering (42%)</span>
                <span>Design (26%)</span>
                <span>Others (32%)</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">By Seniority</p>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full flex">
                  <div className="bg-black w-[20%]" title="Senior"></div>
                  <div className="bg-gray-600 w-[45%]" title="Mid-level"></div>
                  <div className="bg-gray-400 w-[35%]" title="Junior"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>Senior (20%)</span>
                <span>Mid-level (45%)</span>
                <span>Junior (35%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;