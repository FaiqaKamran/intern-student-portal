import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import StudentCard from "../components/StudentCard";

function Students({ students, loading, error, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container students-page">
      <div className="page-heading">
        <p className="section-eyebrow">STUDENT DIRECTORY</p>
        <h1>All Students</h1>
        <p>Search, view, and manage your student records.</p>
      </div>

      <div className="students-toolbar">
        <TextField
          fullWidth
          label="Search by student name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="search-field"
        />

        <div className="student-count">
          {filteredStudents.length}{" "}
          {filteredStudents.length === 1 ? "Student" : "Students"}
        </div>
      </div>

      {loading && (
        <div className="message-box">
          <p>Loading students...</p>
        </div>
      )}

      {!loading && error && (
        <div className="message-box error-message">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && students.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">S</div>
          <h2>No students yet</h2>
          <p>Add a student to get started.</p>
        </div>
      )}

      {!loading && !error && students.length > 0 &&
        filteredStudents.length === 0 && (
          <div className="empty-state">
            <h2>No matching students</h2>
            <p>Try searching with a different name.</p>
          </div>
        )}

      {!loading && !error && filteredStudents.length > 0 && (
        <div className="students-grid">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}

      <Typography className="directory-note">
        Student records are displayed below.
      </Typography>
    </div>
  );
}

export default Students;