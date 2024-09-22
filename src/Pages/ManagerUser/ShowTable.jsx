import React, { useEffect, useState } from "react";
import { MdBlock, MdDelete } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const ShowTable = () => {
  const { user, setUser, logOut } = useAuth();

  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const axiosPublic = useAxiosPublic();

  const fetchUsers = async () => {
    try {
      const response = await axiosPublic.get("/all-users");
      setUsers(response.data);
    } catch (error) {
      //console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSelectAll = (e) => {
    setSelectedUsers(e.target.checked ? users.map((user) => user._id) : []);
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleBlockUsers = async () => {
    try {
      await axiosPublic.post("/blockUsers", { userIds: selectedUsers });
      fetchUsers();
      setSelectedUsers([]);
      Swal.fire({
        icon: "success",
        text: "User Blocked Successfully",
      });
      const email = user;
      console.log(email)
      const { data } = await axiosPublic.get(`/user-status/${email}`);
      if (data.message === "blocked") {
        logOut();
        return <Navigate to="/login"></Navigate>;
      }
    } catch (error) {

    }
  };

  const handleUnblockUsers = async () => {
    try {
      await axiosPublic.post("/unblockUsers", { userIds: selectedUsers });
      fetchUsers();
      setSelectedUsers([]);
      Swal.fire({
        icon: "success",
        text: "User Unblocked Successfully",
      });
   
    } catch (error) {
    }
  };

  const handleDeleteUsers = async () => {
    try {
      await axiosPublic.post("/delete", { userIds: selectedUsers });
      fetchUsers();
      Swal.fire({
        icon: "success",
        text: "User Deleted Successfully",
      });
     
    } catch (error) {
     
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  return (
    <div className="p-4 sm:p-8 mt-24 mb-64">
      <div className="flex justify-center flex-wrap gap-4 mb-4">
        <button
          onClick={handleBlockUsers}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Block
        </button>
        <button
          onClick={handleUnblockUsers}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          <MdBlock className="text-2xl" />
        </button>
        <button
          onClick={handleDeleteUsers}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          <MdDelete className="text-2xl" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left text-xs sm:text-sm text-gray-600">
              <th className="p-2 sm:p-4">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedUsers.length === users.length}
                />
              </th>
              <th className="p-2 sm:p-4">ID</th>
              <th className="p-2 sm:p-4">Name</th>
              <th className="p-2 sm:p-4">Email</th>
              <th className="p-2 sm:p-4">Last Login</th>
              <th className="p-2 sm:p-4">Registration Date</th>
              <th className="p-2 sm:p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr
                key={user._id}
                className="text-xs sm:text-sm text-gray-700 border-b hover:bg-gray-50"
              >
                <td className="p-2 sm:p-4">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user._id)}
                    onChange={() => handleSelectUser(user._id)}
                  />
                </td>
                <td className="p-2 sm:p-4">{index+1}</td>
                <td className="p-2 sm:p-4">{user.name}</td>
                <td className="p-2 sm:p-4">{user.email}</td>
                <td className="p-2 sm:p-4">{formatDate(user.lastLogin)}</td>
                <td className="p-2 sm:p-4">
                  {formatDate(user.registrationDate)}
                </td>
                <td
                  className={
                    user.status === "active"
                      ? "text-green-500 p-2 sm:p-4"
                      : "text-red-500 p-2 sm:p-4"
                  }
                >
                  {user.status}
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
