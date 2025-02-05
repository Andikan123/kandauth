import React, { useState } from 'react';
import { collection, addDoc , serverTimestamp} from 'firebase/firestore';
import { db } from '../Firebase';
import { toast } from 'react-toastify';


const StudentForm = () => {
  const [studentName, setStudentName] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [success, setSuccess] = useState("")
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentName || !selectedDepartment){
      toast.error("empty fields!");
      return; // Do not submit if fields are empty
    }
      

    try {
      // Save student data to Firestore
      await addDoc(collection(db, 'students'), {
        studentName,
        department: selectedDepartment,
        createdAt: serverTimestamp(),  // Add this line to include the timestamp
      });

      // Reset form fields
      setStudentName('');
      setSelectedDepartment('');
      toast.success('Student successfully registered!');
    } catch (error) {
      toast.error('Failed to register student. Please try again!');
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>

        <div>
          <label htmlFor="department">Department</label>
          <select
            id="department"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
            <option value="Commerce">Commerce</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
      {success && <p style={{ color: 'red' }}>{success}</p>}
    </div>
  );
};

export default StudentForm;

  