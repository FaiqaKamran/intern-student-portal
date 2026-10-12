import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

function AddStudent({ onAdd }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const course = formData.course.trim();

    if (!name || !email || !course) {
      setError("Please fill in all fields.");
      return;
    }

    onAdd({ name, email, course });
    navigate("/students");
  };

  return (
    <div className="page-container add-student-page">
      <div className="page-heading">
        <p className="section-eyebrow">STUDENT MANAGEMENT</p>
        <h1>Add New Student</h1>
        <p>Enter the student's details to create a new record.</p>
      </div>

      <div className="form-card">
        <div className="form-card-heading">
          <div className="form-heading-icon">+</div>
          <div>
            <h2>Student Information</h2>
            <p>Complete all fields below.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="student-form">
          <TextField
            fullWidth
            required
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
          />

          <TextField
            fullWidth
            required
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="student@example.com"
          />

          <TextField
            fullWidth
            required
            label="Course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course name"
          />

          {error && <p className="form-error">{error}</p>}

          <div className="form-actions">
            <Button
              type="submit"
              variant="contained"
              className="form-submit-button"
            >
              Add Student
            </Button>

            <Button
              component={Link}
              to="/students"
              variant="outlined"
              className="form-cancel-button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;