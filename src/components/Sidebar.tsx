import React from 'react';
import { 
  Users, FileText, Calendar, Award, BarChart3, Settings, 
  ChevronLeft, Home, BriefcaseIcon, GraduationCap, Bell
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, currentPage, setCurrentPage }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', id: 'dashboard' },
    { icon: Users, label: 'Employees', id: 'employees' },
    { icon: FileText, label: 'Documents', id: 'documents' },
    { icon: Calendar, label: 'Leave', id: 'leave' },
    { icon: Award, label: 'Performance', id: 'performance' },
    { icon: BarChart3, label: 'Analytics', id: 'analytics' },
    { icon: BriefcaseIcon, label: 'Recruitment', id: 'recruitment' },
    { icon: GraduationCap, label: 'Training', id: 'training' },
    { icon: Bell, label: 'Notifications', id: 'notifications' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  return (
    <div 
      className={`fixed h-screen bg-black text-white transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        {isOpen ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">N</span>
            </div>
            <h1 className="text-xl font-bold tracking-wider">NEXUS HR</h1>
          </div>
        ) : (
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mx-auto">
            <span className="text-black font-bold text-xl">N</span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-white hover:text-black rounded-lg transition-colors"
        >
          <ChevronLeft className={`transform transition-transform ${!isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className="py-6">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex items-center w-full py-3 mb-2 hover:bg-white hover:text-black transition-colors
              ${currentPage === item.id ? 'bg-white text-black' : ''}
              ${isOpen ? 'px-6' : 'px-4 justify-center'}
              ${index === menuItems.length - 1 ? 'mt-8' : ''}`}
          >
            <item.icon size={20} />
            {isOpen && (
              <span className="ml-4 font-medium whitespace-nowrap overflow-hidden">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32"
              alt="Admin"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-gray-400 truncate">HR Administrator</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;