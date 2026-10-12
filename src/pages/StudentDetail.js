import { Avatar, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

function StudentDetail({ students }) {
  const { id } = useParams();

  const student = students.find(
    (item) => String(item.id) === id
  );

  if (!student) {
    return (
      <div className="page-container">
        <div className="empty-state detail-not-found">
          <h2>Student not found</h2>
          <p>This student record may have been deleted or does not exist.</p>

          <Button
            component={Link}
            to="/students"
            variant="contained"
          >
            Back to Students
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container detail-page">
      <div className="page-heading">
        <p className="section-eyebrow">STUDENT PROFILE</p>
        <h1>Student Details</h1>
        <p>View the information saved for this student.</p>
      </div>

      <div className="detail-card">
        <div className="detail-card-banner"></div>

        <div className="detail-card-body">
          <Avatar className="detail-avatar">
            {student.name.charAt(0).toUpperCase()}
          </Avatar>

          <h2>{student.name}</h2>
          <p className="detail-course">{student.course}</p>

          <div className="detail-information">
            <div className="detail-information-row">
              <span className="detail-label">Student ID</span>
              <span className="detail-value">{student.id}</span>
            </div>

            <div className="detail-information-row">
              <span className="detail-label">Full Name</span>
              <span className="detail-value">{student.name}</span>
            </div>

            <div className="detail-information-row">
              <span className="detail-label">Email Address</span>
              <span className="detail-value">{student.email}</span>
            </div>

            <div className="detail-information-row">
              <span className="detail-label">Course</span>
              <span className="detail-value">{student.course}</span>
            </div>
          </div>

          <Button
            component={Link}
            to="/students"
            variant="contained"
            className="detail-back-button"
          >
            Back to Students
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetail;