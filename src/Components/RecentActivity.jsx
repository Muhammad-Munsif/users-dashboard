import React from "react";
import { CheckCircle } from 'lucide-react';
// import CardHeader from "./CardHeader"; // Assuming this component exists

const RecentActivity = () => {
  const activityData = [
    // ... your activityData array
    { time: "5 min ago", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque." },
    { time: "10 min ago", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { time: "30 min ago", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
    { time: "1 hour ago", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
    { time: "2 hours ago", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden">
      {/* Assuming CardHeader renders correctly, though it's not defined here */}
      {/* <CardHeader title="Recent activity" /> */}
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Recent activity</h2>
      </div>

      {/* REMOVED: max-h-[400px] and overflow-y-auto */}
      <div className="p-5"> 
        <div className="relative pl-6 space-y-8">
          
          {/* Timeline Vertical Line (Optional, but often needed for a timeline) */}
          <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-gray-200" />
          
          {activityData.map((activity, index) => (
            <div key={index} className="relative z-10">
              
              {/* Timeline Dot with a solid color on the inside */}
              <div className="absolute -left-5 top-0 h-4 w-4 rounded-full bg-white dark:bg-white flex items-center justify-center border-2 border-indigo-500">
                <CheckCircle size={10} className="text-indigo-500 fill-indigo-500" />
              </div>
              
              <p className="text-xs font-medium text-indigo-600 mb-1">
                {activity.time}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed text-left">
                {activity.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;