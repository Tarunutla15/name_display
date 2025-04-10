import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DisplayPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user_details/')
        setUsers(response.data.users)
      } catch (error) {
        console.error("Error fetching users:", error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Registered Users</h1>
      <div className="w-full max-w-md bg-white rounded shadow p-4">
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {users.map((user, index) => (
              <li key={index} className="py-2">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default DisplayPage
