import React from 'react';
import { Bell, Lock, User, Globe, Mail, Shield } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black">Settings</h2>
        <p className="text-gray-600 mt-2">Manage your HR system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-black rounded-lg">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold">General Settings</h3>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  defaultValue="Nexus Corporation"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Time Zone</label>
                <select className="w-full px-4 py-2 border-2 border-black rounded-lg">
                  <option>Pacific Time (PT)</option>
                  <option>Eastern Time (ET)</option>
                  <option>Central Time (CT)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date Format</label>
                <select className="w-full px-4 py-2 border-2 border-black rounded-lg">
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select className="w-full px-4 py-2 border-2 border-black rounded-lg">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border-2 border-black rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Quick Settings</h3>
            <div className="space-y-4">
              <button className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Bell size={20} className="mr-3" />
                  <span>Notifications</span>
                </div>
                <div className="w-10 h-6 bg-black rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </button>
              <button className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Mail size={20} className="mr-3" />
                  <span>Email Updates</span>
                </div>
                <div className="w-10 h-6 bg-black rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </button>
              <button className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Shield size={20} className="mr-3" />
                  <span>Two-Factor Auth</span>
                </div>
                <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">System Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Version</span>
                <span className="font-medium">2.4.0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Last Updated</span>
                <span className="font-medium">Mar 10, 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">License</span>
                <span className="font-medium">Enterprise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;