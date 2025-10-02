import React from "react";
import CardHeader from "./CardHeader";
const RecentActivity = () => {
  // Mock data matching the structure shown in the image
  const activityData = [
    {
      time: "5 min ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque",
    },
    {
      time: "5 min ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque",
    },
    {
      time: "15 min ago",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      time: "1 hour ago",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white  rounded-xl shadow-lg h-full">
      <CardHeader title="Recent Activity" />
      {/* Activity Feed Container */}
      <div className="space-y-6 p-5">
        {activityData.map((activity, index) => (
          <div key={index} className="flex items-start">
            {/* Timeline Dot (Purple) */}
            <div className="flex-shrink-0 mt-1 mr-3">
              <div className="w-2 h-2 mt-1 rounded-full bg-indigo-500"></div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              {/* Time (Bold text as shown in the image) */}
              <p className="text-base font-bold text-gray-800 leading-snug">
                {activity.time}
              </p>

              {/* Activity Description (Lighter, multi-line text) */}
              <p className="letter-space p-3 text-md text-gray-500 leading-snug whitespace-pre-wrap">
                {activity.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
