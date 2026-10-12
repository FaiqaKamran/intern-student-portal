import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="navbar-toolbar">
        <Typography
          component={Link}
          to="/"
          className="navbar-brand"
        >
          Student Portal
        </Typography>

        <nav className="navbar-links">
          <Button component={NavLink} to="/" className="nav-link">
            Home
          </Button>

          <Button
            component={NavLink}
            to="/students"
            className="nav-link"
          >
            Students
          </Button>

          <Button
            component={NavLink}
            to="/add-student"
            className="nav-link nav-add-button"
          >
            + Add Student
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;