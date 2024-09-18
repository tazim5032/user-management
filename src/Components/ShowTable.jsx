import React, { useState } from 'react';
import { MdBlock, MdDelete } from "react-icons/md";

const ShowTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", lastLogin: "2024-09-05T14:30:00", registrationTime: "2023-08-10T12:00:00", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", lastLogin: "2024-09-04T15:00:00", registrationTime: "2023-07-12T10:45:00", status: "blocked" },
    // Add more data rows here
  ]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(data.map(item => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };

  const handleBlock = () => {
    const newData = data.map((row) => 
      selectedRows.includes(row.id) ? { ...row, status: 'blocked' } : row
    );
    setData(newData);
    alert("Blocked selected users");
  };

  const handleUnblock = () => {
    const newData = data.map((row) => 
      selectedRows.includes(row.id) ? { ...row, status: 'active' } : row
    );
    setData(newData);
    alert("Unblocked selected users");
  };

  const handleDelete = () => {
    const newData = data.filter(row => !selectedRows.includes(row.id));
    setData(newData);
    setSelectedRows([]);
    alert("Deleted selected users");
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <div className="p-4 sm:p-8">
      {/* Toolbar */}
      <div className="flex justify-center flex-wrap gap-4 mb-4">
        <button
          onClick={handleBlock}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          aria-label="Block selected users"
        >
          Block
        </button>
        <button
          onClick={handleUnblock}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          aria-label="Unblock selected users"
        >
          <MdBlock className="text-2xl" />
        </button>
        <button
          onClick={handleDelete}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          aria-label="Delete selected users"
        >
          <MdDelete className="text-2xl" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left text-xs sm:text-sm text-gray-600">
              <th className="p-2 sm:p-4">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === data.length}
                />
              </th>
              <th className="p-2 sm:p-4">ID</th>
              <th className="p-2 sm:p-4">Name</th>
              <th className="p-2 sm:p-4">Email</th>
              <th className="p-2 sm:p-4">Last Login Time</th>
              <th className="p-2 sm:p-4">Registration Time</th>
              <th className="p-2 sm:p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="text-xs sm:text-sm text-gray-700 border-b hover:bg-gray-50">
                <td className="p-2 sm:p-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelect(row.id)}
                  />
                </td>
                <td className="p-2 sm:p-4">{row.id}</td>
                <td className="p-2 sm:p-4">{row.name}</td>
                <td className="p-2 sm:p-4">{row.email}</td>
                <td className="p-2 sm:p-4">{formatDate(row.lastLogin)}</td>
                <td className="p-2 sm:p-4">{formatDate(row.registrationTime)}</td>
                <td className={`p-2 sm:p-4 ${row.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowTable;
