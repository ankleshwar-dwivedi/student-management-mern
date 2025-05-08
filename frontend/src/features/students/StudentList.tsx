
import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/students')
      .then(res => setStudents(res.data))
      .catch(() => alert('Failed to fetch students'));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Course</th>
            <th className="border px-4 py-2">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s: any) => (
            <tr key={s.id}>
              <td className="border px-4 py-2">{s.name}</td>
              <td className="border px-4 py-2">{s.email}</td>
              <td className="border px-4 py-2">{s.course}</td>
              <td className="border px-4 py-2">{s.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
