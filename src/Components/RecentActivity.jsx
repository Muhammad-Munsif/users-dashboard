import React from "react";
import { CheckCircle } from 'lucide-react';
const RecentActivity = () => {
  const activityData = [
    {
      time: "5 min ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque.",
    },
    {
      time: "5 min ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque.",
    },
    {
      time: "5 min ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque.",
    },
    {
      time: "5 min ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque.",
    },
    {
      time: "5 min ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque.",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden">
      <CardHeader title="Recent activity" />
      <div className="p-5">
        <div className="relative border-l-2 border-gray-100 pl-6 space-y-8">
          {activityData.map((activity, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-7 top-0 h-4 w-4 rounded-full bg-indigo-500 flex items-center justify-center">
                <CheckCircle size={10} className="text-white" />
              </div>
              <p className="text-sm font-semibold text-indigo-600 mb-1">
                {activity.time}
              </p>
              <p className="text-gray-500 text-sm">{activity.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecentActivity;
