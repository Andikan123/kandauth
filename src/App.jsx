import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Login from './components/Login';
import Signup from './components/SignUp';
import Navbar from './components/Navbar'; 
import PrivateRoute from './components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import { ToastContainer } from 'react-toastify';  // Import ToastContainer

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />

          {/* Protect these routes */}
          <Route
            path="/register"
            element={
              <PrivateRoute>
                <StudentForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/students"
            element={
              <PrivateRoute>
                <StudentList />
              </PrivateRoute>
            }
          />
        </Routes>

        <ToastContainer
          position="top-center"
          pauseOnHover
        />
      </Router>
    </AuthProvider>
  );
};

export default App;
