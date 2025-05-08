
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CreateStudent from './features/students/CreateStudent';
import StudentList from './features/students/StudentList';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/students" element={
          <ProtectedRoute>
            <StudentList />
          </ProtectedRoute>
        } />
        <Route path="/students/create" element={
          <ProtectedRoute>
            <CreateStudent />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
