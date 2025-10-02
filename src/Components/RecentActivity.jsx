import React from "react";
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
    <div className="max-w-md mx-auto bg-white p-5 rounded-xl shadow-lg h-full">
      {/* <Card Header />>*/}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
        <h2 className="text-xl font-bold text-gray-800">Recent activity</h2>
        {/* Three-dot menu icon (using inline SVG for simplicity) */}
        <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-ellipsis"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>

      {/* Activity Feed Container */}
      <div className="space-y-6">
        {activityData.map((activity, index) => (
          <div key={index} className="flex items-start">
            {/* Timeline Dot (Purple) */}
            <div className="flex-shrink-0 mt-1 mr-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              {/* Time (Bold text as shown in the image) */}
              <p className="text-base font-bold text-gray-800 leading-snug">
                {activity.time}
              </p>

              {/* Activity Description (Lighter, multi-line text) */}
              <p className="letter-space text-md text-gray-500 leading-snug whitespace-pre-wrap">
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
