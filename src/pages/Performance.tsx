import React from 'react';
import { Award, TrendingUp, Target, Star } from 'lucide-react';

const Performance = () => {
  const performanceMetrics = [
    { id: 1, name: 'Project Completion', score: 92, trend: 'up' },
    { id: 2, name: 'Team Collaboration', score: 88, trend: 'up' },
    { id: 3, name: 'Quality of Work', score: 95, trend: 'up' },
    { id: 4, name: 'Meeting Deadlines', score: 90, trend: 'down' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black">Performance Management</h2>
        <p className="text-gray-600 mt-2">Track and evaluate employee performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border-2 border-black rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Performance Metrics</h3>
            <div className="space-y-4">
              {performanceMetrics.map((metric) => (
                <div key={metric.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{metric.name}</p>
                    <div className="flex items-center mt-1">
                      <Star size={16} className="text-black mr-1" />
                      <span className="text-sm text-gray-600">{metric.score}%</span>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full ${
                    metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <TrendingUp size={20} className={
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    } />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Goals & Objectives</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Improve Customer Satisfaction</h4>
                  <span className="text-sm text-gray-600">Due: Q2 2025</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Increase customer satisfaction score from 85% to 92%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black rounded-full h-2" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Professional Development</h4>
                  <span className="text-sm text-gray-600">Due: Q3 2025</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Complete advanced leadership certification
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black rounded-full h-2" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border-2 border-black rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Award size={24} className="text-black mr-3" />
                <div>
                  <p className="font-medium">Top Performer Q1</p>
                  <p className="text-sm text-gray-600">March 2025</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Target size={24} className="text-black mr-3" />
                <div>
                  <p className="font-medium">Goal Achiever</p>
                  <p className="text-sm text-gray-600">February 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Skills</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Leadership</span>
                  <span className="text-sm text-gray-600">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black rounded-full h-2" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Communication</span>
                  <span className="text-sm text-gray-600">Expert</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black rounded-full h-2" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Problem Solving</span>
                  <span className="text-sm text-gray-600">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black rounded-full h-2" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;