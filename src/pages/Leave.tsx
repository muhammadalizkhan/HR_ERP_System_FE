import React from 'react';
import { Calendar, Clock, Plus } from 'lucide-react';

const Leave = () => {
  const leaveRequests = [
    {
      id: 1,
      employee: 'Sarah Johnson',
      type: 'Vacation',
      startDate: 'Mar 20, 2025',
      endDate: 'Mar 25, 2025',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      id: 2,
      employee: 'Michael Chen',
      type: 'Sick Leave',
      startDate: 'Mar 15, 2025',
      endDate: 'Mar 16, 2025',
      status: 'Approved',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-black">Leave Management</h2>
          <p className="text-gray-600 mt-2">Track and manage employee leave requests</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          <Plus size={20} className="mr-2" />
          Request Leave
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-black rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold">Leave Requests</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {leaveRequests.map((request) => (
                <div key={request.id} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={request.image}
                        alt={request.employee}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-medium">{request.employee}</h4>
                        <p className="text-sm text-gray-600">{request.type}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      request.status === 'Approved' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{request.startDate} - {request.endDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-black rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6">Leave Summary</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Vacation Days</p>
              <p className="text-2xl font-bold mt-1">15/20</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-black rounded-full h-2" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Sick Leave</p>
              <p className="text-2xl font-bold mt-1">3/10</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-black rounded-full h-2" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;