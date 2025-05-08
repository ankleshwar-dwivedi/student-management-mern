
import React, { useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: '',
    address: '',
    mobile: '',
    dob: ''
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/students', form);
      navigate('/students');
    } catch (error) {
      alert('Error creating student');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Name" name="name" onChange={handleChange} required />
        <input className="w-full p-2 border rounded" placeholder="Email" name="email" onChange={handleChange} required />
        <select className="w-full p-2 border rounded" name="course" onChange={handleChange} required>
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MCA">MCA</option>
          <option value="MBA">MBA</option>
        </select>
        <input className="w-full p-2 border rounded" placeholder="Address" name="address" onChange={handleChange} required />
        <input className="w-full p-2 border rounded" placeholder="Mobile" name="mobile" onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="date" name="dob" onChange={handleChange} required />
        <button className="w-full bg-blue-500 text-white py-2 rounded" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateStudent;
