import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home({ students, loading }) {
  return (
    <div className="page-container home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">STUDENT MANAGEMENT SYSTEM</p>

          <h1>
            Welcome to Your
            <br />
            <span>Student Portal</span>
          </h1>

          <p className="hero-description">
            Manage student information, explore profiles, and
            keep your student records organized in one place.
          </p>

          <div className="hero-buttons">
            <Button
              component={Link}
              to="/students"
              variant="contained"
              className="hero-primary-button"
            >
              Explore Students
            </Button>

            <Button
              component={Link}
              to="/add-student"
              variant="outlined"
              className="hero-secondary-button"
            >
              Add New Student
            </Button>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="decoration-circle circle-one"></div>
          <div className="decoration-circle circle-two"></div>

          <div className="hero-mini-card">
            <div className="mini-card-icon">S</div>
            <h3>Student Directory</h3>
            <p>All your records in one place</p>
            <div className="mini-card-line"></div>
            <div className="mini-card-line short-line"></div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="section-heading">
          <p className="section-eyebrow">YOUR OVERVIEW</p>
          <h2>Dashboard at a glance</h2>
          <p>Quick access to your student information.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">S</div>
            <div>
              <p className="stat-label">Total Students</p>
              <h3>{loading ? "..." : students.length}</h3>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon stat-icon-light">+</div>
            <div>
              <p className="stat-label">Quick Action</p>
              <h3 className="stat-action-text">Add Student</h3>
              <Link to="/add-student" className="stat-link">
                Create a new record →
              </Link>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon stat-icon-light">@</div>
            <div>
              <p className="stat-label">Student Directory</p>
              <h3 className="stat-action-text">View Records</h3>
              <Link to="/students" className="stat-link">
                Browse students →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-bottom-section">
        <div>
          <p className="section-eyebrow">GET STARTED</p>
          <h2>Everything organized, all in one place.</h2>
          <p>
            View student profiles or add a new student to your
            directory whenever you need.
          </p>
        </div>

        <Button
          component={Link}
          to="/students"
          variant="contained"
          className="bottom-section-button"
        >
          View Students
        </Button>
      </section>
    </div>
  );
}

export default Home;