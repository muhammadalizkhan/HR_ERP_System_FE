import React, { useState } from 'react';
import { Search, Plus, MoreVertical } from 'lucide-react';

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'UI Designer',
      department: 'Design',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Frontend Developer',
      department: 'Engineering',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      department: 'Product',
      status: 'On Leave',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-black">Employees</h2>
          <p className="text-gray-600 mt-2">Manage your team members</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          <Plus size={20} className="mr-2" />
          Add Employee
        </button>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 border-2 border-black rounded-lg"
          />
        </div>
        <select className="px-4 py-2 border-2 border-black rounded-lg">
          <option>All Departments</option>
          <option>Design</option>
          <option>Engineering</option>
          <option>Product</option>
        </select>
      </div>

      <div className="bg-white border-2 border-black rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-6 py-3 text-left">Employee</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-gray-200">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="font-medium">{employee.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{employee.role}</td>
                <td className="px-6 py-4">{employee.department}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {employee.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;