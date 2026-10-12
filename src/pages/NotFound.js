import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-container not-found-page">
      <div className="not-found-number">404</div>
      <h1>Page Not Found</h1>
      <p>
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Button
        component={Link}
        to="/"
        variant="contained"
      >
        Return Home
      </Button>
    </div>
  );
}

export default NotFound;