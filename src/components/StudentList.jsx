import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';


const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
       // Create a query to get students ordered by the 'createdAt' timestamp
       const q = query(
        collection(db, 'students'),
        orderBy('createdAt', 'desc')  // 'desc' for descending (newest first), use 'asc' for oldest first
      );
      const querySnapshot = await getDocs(q);
      const studentsData = querySnapshot.docs.map(doc => doc.data());
      setStudents(studentsData);
    };

    fetchStudents();
  }, []);

    // Helper function to format the timestamp
    const formatTimestamp = (timestamp) => {
      if (!timestamp) return '';
      const date = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date
      return date.toLocaleString(); // Format it as a readable date and time
    };


  return (
    <div className="student-list-container">
      <h2>Registered Students</h2>
      <ul>
        {students.map((student, index) => (
         
          <li key={index}>
            
             <div>
              <span className="student-name">{student.studentName}</span> 
              <span className="department">{student.department}</span>
            </div>
            <div className="timestamp">
              <strong>Registered on:</strong> {formatTimestamp(student.createdAt)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
