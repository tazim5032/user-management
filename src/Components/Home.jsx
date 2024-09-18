import React, { useState } from 'react';
import { MdBlock, MdDelete } from "react-icons/md";
import ShowTable from './ShowTable';
import Navbar from './Navbar';

const Home = () => {
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
    <div>
      <Navbar></Navbar>
      <ShowTable></ShowTable>
    </div>
  );
};

export default Home;
