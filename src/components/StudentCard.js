import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {
  return (
    <Card className="student-card">
      <CardContent className="student-card-content">
        <div className="student-card-header">
          <Avatar className="student-avatar">
            {student.name?.charAt(0).toUpperCase()}
          </Avatar>

          <div className="student-card-heading">
            <Typography variant="h6" className="student-name">
              {student.name}
            </Typography>

            <Typography
              variant="body2"
              className="student-course"
            >
              {student.course}
            </Typography>
          </div>
        </div>

        <Typography variant="body2" className="student-email">
          {student.email}
        </Typography>

        <div className="student-card-actions">
          <Button
            component={Link}
            to={`/student/${student.id}`}
            variant="contained"
            className="view-button"
          >
            View Details
          </Button>

          <Button
            onClick={() => onDelete(student.id)}
            variant="outlined"
            color="error"
            className="delete-button"
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default StudentCard;