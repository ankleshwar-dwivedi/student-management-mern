
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
      <div>
        <Link to="/home" className="mr-4">Home</Link>
        <Link to="/students" className="mr-4">Students</Link>
        <Link to="/students/create" className="mr-4">Add Student</Link>
      </div>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded">Logout</button>
    </nav>
  );
};

export default Navbar;
