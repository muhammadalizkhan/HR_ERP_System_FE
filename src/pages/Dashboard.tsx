
import { Users, Clock, Award, AlertCircle, TrendingUp, DollarSign } from 'lucide-react';
import QuickActions from '../components/Dashboard/QuickActions';
import EmployeeChart from '../components/Charts/EmployeeChart';
import NotificationBell from '../components/Notifications/NotificationBell';

const Dashboard = () => {
  const stats = [
    { icon: Users, label: 'Total Employees', value: '248', trend: '+12%', trendUp: true },
    { icon: Clock, label: 'On Leave', value: '12', trend: '-2%', trendUp: false },
    { icon: Award, label: 'Top Performers', value: '24', trend: '+5%', trendUp: true },
    { icon: DollarSign, label: 'Avg. Salary', value: '$85,000', trend: '+8%', trendUp: true },
  ];

  return (
    <div className="p-8 animate-slide-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-black">Dashboard Overview</h2>
          <p className="text-gray-600 mt-2">Welcome back, John Doe</p>
        </div>
        <div className="flex items-center gap-4">
          <NotificationBell count={3} />
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <stat.icon size={24} className="text-black" />
              <span className={`text-sm ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <QuickActions />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Employee Growth</h3>
            <select className="select-primary w-auto">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <EmployeeChart />
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-bold mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {[
              { title: 'New Employee Onboarded', desc: 'Sarah Johnson joined as UI Designer', time: '2h ago' },
              { title: 'Performance Review Completed', desc: 'Michael Chen received annual review', time: '4h ago' },
              { title: 'Leave Request Approved', desc: 'Emily Rodriguez - Vacation (Mar 20-25)', time: '5h ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.desc}</p>
                </div>
                <span className="text-sm text-gray-600">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;