import React from 'react';
import { Bell } from 'lucide-react';

interface NotificationBellProps {
  count: number;
}

const NotificationBell: React.FC<NotificationBellProps> = ({ count }) => {
  return (
    <div className="relative">
      <Bell className="w-6 h-6" />
      {count > 0 && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {count}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;