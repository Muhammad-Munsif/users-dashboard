import React, { useEffect, useState } from 'react'

const seed = Array.from({ length: 7 }).map((_, i) => ({
  id: i + 1,
  user: 'Hayden',
  username: 'Hayden',
  email: `work${i}@gmail.com`,
  role: 'Admin',
  status: 'Active',
}))

const Pill = ({ children, color = 'bg-emerald-500' }) => (
  <span className={`inline-flex items-center h-6 px-3 rounded-full text-white text-xs ${color}`}>{children}</span>
)

const UserList = () => {
  const [users, setUsers] = useState(seed)

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('users') || '[]')
    if (local.length) {
      setUsers(local)
    }
  }, [])

  return (
    <div className="p-4 md:p-6">
      <div className="mb-3 text-sm text-gray-400">Home / Analytic</div>
      <h1 className="text-lg font-semibold mb-4">Dashboard</h1>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="font-medium">User List</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center h-9 w-80 rounded-md border border-gray-200 overflow-hidden">
              <span className="px-3 text-gray-400">🔍</span>
              <input className="h-full flex-1 px-2 text-sm outline-none" placeholder="Search content here..." />
            </div>
            <button className="h-9 px-4 rounded-md bg-purple-600 text-white text-sm">Search</button>
          </div>
        </div>

        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-400">
                  <th className="text-left font-medium py-2 px-3">Id</th>
                  <th className="text-left font-medium py-2 px-3">User</th>
                  <th className="text-left font-medium py-2 px-3">Username</th>
                  <th className="text-left font-medium py-2 px-3">Email Address</th>
                  <th className="text-left font-medium py-2 px-3">Role</th>
                  <th className="text-left font-medium py-2 px-3">Status</th>
                  <th className="text-left font-medium py-2 px-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr key={idx} className="border-t border-gray-100">
                    <td className="py-3 px-3">{u.id}</td>
                    <td className="py-3 px-3 text-gray-600">{u.user}</td>
                    <td className="py-3 px-3 text-gray-600">{u.username}</td>
                    <td className="py-3 px-3 text-gray-600">{u.email}</td>
                    <td className="py-3 px-3 text-purple-600">{u.role}</td>
                    <td className="py-3 px-3"><Pill>{u.status}</Pill></td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-4 text-purple-600">
                        <button title="view">▢</button>
                        <button title="edit">✎</button>
                        <button title="delete">⋯</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
            <div>Showing 1 to 7 of 7 entries</div>
            <div className="flex items-center gap-2">
              <button className="size-7 grid place-items-center rounded-md bg-gray-100">←</button>
              <button className="size-7 grid place-items-center rounded-md bg-purple-600 text-white">1</button>
              <button className="size-7 grid place-items-center rounded-md bg-gray-100">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserList


