// src/components/StockDetailsChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// --- Mock Data ---
// This data closely matches the structure and values in your image.
const data = [
  {
    name: "Jan '03",
    Desktops: 22,
    Laptops: 40,
    Tablets: 30,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb '03",
    Desktops: 10,
    Laptops: 55,
    Tablets: 25,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar '03",
    Desktops: 20,
    Laptops: 65,
    Tablets: 35,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr '03",
    Desktops: 28,
    Laptops: 40,
    Tablets: 45,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jun '03",
    Desktops: 12,
    Laptops: 20,
    Tablets: 32,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jul '03",
    Desktops: 36,
    Laptops: 50,
    Tablets: 62,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Aug '03",
    Desktops: 20,
    Laptops: 35,
    Tablets: 58,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct '03",
    Desktops: 43,
    Laptops: 60,
    Tablets: 35,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov '03",
    Desktops: 20,
    Laptops: 50,
    Tablets: 38,
    pv: 4300,
    amt: 2100,
  },
];

const StockDetailsChart = () => {
  return (
    <div className="bg-white h-full p-6 rounded-lg shadow-md max-w-4xl mx-auto md:flex-col">
      <div className="flex justify-between items-center md:flex-row mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Stoke Details</h2>
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm">
            <option>Show By Month</option>
            <option>Show By Week</option>
            <option>Show By Year</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e0e0e0"
          />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            label={{
              value: "Points",
              angle: -90,
              position: "insideLeft",
              offset: -10,
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="Desktops" fill="#8884d8" barSize={15} />{" "}
          {/* Purple bars */}
          <Line
            type="monotone"
            dataKey="Laptops"
            stroke="#cccccc"
            strokeWidth={2}
            dot={false}
          />{" "}
          {/* Gray Line */}
          <Line
            type="monotone"
            dataKey="Tablets"
            stroke="#FFBF00"
            strokeWidth={2}
            dot={false}
          />{" "}
          {/* Orange Line */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockDetailsChart;
