import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Table from "../Components/Table";
import StokeDetail from "../Components/StokeDetail";
import RecentActivity from "../Components/RecentActivity";
import MemberMail from "../Components/MemberMail";
import StokeDetails from "../Components/StokeDetails";
import StockDetailsChart from "../Components/StockDetailsChart";
import DashboardCards from "../Components/DashboardCards";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const Home = () => {
  return (
    <>
      <Table />
      <div className="p-4 md:p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 ">
            {/* <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Sales Overview</h2>
              <span className="text-sm text-gray-500">This Month</span>
            </div>
            <div className="h-56">
              <Line
                data={{
                  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                  datasets: [
                    {
                      label: "Sales",
                      data: [12, 19, 14, 25, 22, 30, 28],
                      borderColor: "#6366F1",
                      backgroundColor: "rgba(99,102,241,0.15)",
                      tension: 0.4,
                      fill: true,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { grid: { display: false } },
                    y: { grid: { color: "#f3f4f6" }, ticks: { stepSize: 10 } },
                  },
                }}
              />
            </div> */}
            <StockDetailsChart />
          </div>
          {/* <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Revenue</h3>
                <span className="text-xs text-green-600">+8.2%</span>
              </div>
              <p className="text-2xl font-semibold">$24,580</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Orders</h3>
                <span className="text-xs text-green-600">+3.1%</span>
              </div>
              <p className="text-2xl font-semibold">3,142</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white p-4">
              <p className="text-sm opacity-90">Upgrade to Pro</p>
              <p className="text-lg font-semibold">Unlock advanced analytics</p>
            </div>
          </div> */}
          <DashboardCards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-medium mb-4">New Users</h3>
            <ul className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-indigo-100" />
                    <div>
                      <p className="text-sm font-medium">User {i + 1}</p>
                      <p className="text-xs text-gray-500">
                        user{i + 1}@mail.com
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">2m ago</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-medium mb-4">Progress</h3>
            <div className="h-48 grid place-items-center">
              <div className="size-28 rounded-full border-8 border-purple-200 grid place-items-center">
                <div className="size-20 rounded-full border-8 border-purple-500" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h3 className="font-medium mb-4">Sales Traffic</h3>
            <div className="h-48">
              <Doughnut
                data={{
                  labels: ["Direct", "Referral", "Social"],
                  datasets: [
                    {
                      data: [55, 25, 20],
                      backgroundColor: ["#8B5CF6", "#F97316", "#A78BFA"],
                      borderWidth: 0,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { position: "bottom" } },
                  cutout: "68%",
                }}
              />
            </div>
          </div>
        </div>
        {/* <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-['Inter']"> */}
        {/* <h1 className="sr-only">Dashboard Overview</h1> */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Column 1: Stock Details */}
          <div className="lg:col-span-1">
            <StokeDetail />
          </div>

          {/* Column 2: Recent Activity */}
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>

          {/* Column 3: Member Request Form */}
          <div className="lg:col-span-1">
            <MemberMail />
          </div>
        </div>
        <StokeDetails />
        <p className="mt-8 text-center md:text-wrap text-sm text-gray-500">
          Note: The layout is fully responsive. It stacks the cards vertically
          on mobile and displays them in three columns on larger screens.
        </p>
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
