import React from 'react'

const Home = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Sales Overview</h2>
            <span className="text-sm text-gray-500">This Month</span>
          </div>
          <div className="h-56 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg" />
        </div>
        <div className="space-y-4">
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
        </div>
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
                    <p className="text-xs text-gray-500">user{i + 1}@mail.com</p>
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
          <div className="h-48 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default Home
