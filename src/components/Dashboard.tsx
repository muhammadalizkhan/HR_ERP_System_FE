import React from 'react';
import { Users, Clock, Award, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Users, label: 'Total Employees', value: '248' },
    { icon: Clock, label: 'On Leave', value: '12' },
    { icon: Award, label: 'Top Performers', value: '24' },
    { icon: AlertCircle, label: 'Pending Reviews', value: '18' },
  ];

  return (
    <div className="p-8">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-black">Dashboard Overview</h2>
        <p className="text-gray-600 mt-2">Welcome back, Administrator</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border-2 border-black p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
              </div>
              <stat.icon size={24} className="text-black" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-black p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div>
                  <p className="font-medium">New Employee Onboarded</p>
                  <p className="text-sm text-gray-600">Sarah Johnson joined as UI Designer</p>
                </div>
                <span className="text-sm text-gray-600">2h ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-black p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Upcoming Reviews</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-medium">Muhammad Ali</p>
                    <p className="text-sm text-gray-600">Performance Review</p>
                  </div>
                </div>
                <span className="text-sm font-medium">Mar 15</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;