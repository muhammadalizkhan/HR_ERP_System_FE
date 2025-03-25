import { UserPlus, FileUp, Calendar, MessageSquare } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: UserPlus, label: 'Add Employee', color: 'bg-blue-100' },
    { icon: FileUp, label: 'Upload Document', color: 'bg-green-100' },
    { icon: Calendar, label: 'Schedule Review', color: 'bg-purple-100' },
    { icon: MessageSquare, label: 'Send Announcement', color: 'bg-yellow-100' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className="card p-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
        >
          <div className={`${action.color} p-2 rounded-lg w-fit mb-2`}>
            <action.icon size={20} />
          </div>
          <p className="text-sm font-medium">{action.label}</p>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;