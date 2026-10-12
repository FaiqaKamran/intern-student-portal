import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetail from "./pages/StudentDetail";
import NotFound from "./pages/NotFound";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D9488",
      dark: "#115E59",
      light: "#CCFBF1",
    },
    secondary: {
      main: "#F59E0B",
    },
    background: {
      default: "#F0FDFA",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
});

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const apiStudents = response.data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          course: "Computer Science",
        }));

        setStudents(apiStudents);
      } catch (err) {
        setError("Unable to load students. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleAddStudent = (student) => {
    const newStudent = {
      ...student,
      id: Date.now(),
    };

    setStudents((previousStudents) => [
      newStudent,
      ...previousStudents,
    ]);
  };

  const handleDeleteStudent = (id) => {
    setStudents((previousStudents) =>
      previousStudents.filter(
        (student) => student.id !== id
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <div className="app">
          <Navbar />

          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={<Home students={students} loading={loading} />}
              />

              <Route
                path="/students"
                element={
                  <Students
                    students={students}
                    loading={loading}
                    error={error}
                    onDelete={handleDeleteStudent}
                  />
                }
              />

              <Route
                path="/add-student"
                element={<AddStudent onAdd={handleAddStudent} />}
              />

              <Route
                path="/student/:id"
                element={<StudentDetail students={students} />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <footer className="footer">
            <p>© {new Date().getFullYear()} Intern Student Portal</p>
            <p>Manage students. Keep everything organized.</p>
          </footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;