import React, { useState } from 'react';
import AddUserModal from './AddUserModal';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleAddUser = (name, email) => {
    const newUser = { id: users.length + 1, name, email };
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold bg-gray-300 h-10 
      rounded flex items-center justify-center">User Management</h1>
      
      <h1 className='text-xl  font-semibold'>Add New User
      <button
        onClick={() => setShowModal(true)}
        className="ml-10 bg-gray-500 text-white 
        py-1 px-2 rounded-lg shadow-md hover:bg-gray-400"
 >
        Add User
      </button>
      </h1>
      

      {showModal && (
        <AddUserModal
          onClose={() => setShowModal(false)}
          onAddUser={handleAddUser}
        />
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold">User List</h2>
        <table className="min-w-full mt-4 table-auto">
          <thead>
            <tr className=' bg-gray-300'>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
