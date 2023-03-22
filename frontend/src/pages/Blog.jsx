import { Container, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Blog() {
  // set custom title (for google analytics)
  useEffect(() => {
    document.title = "MatchPlaner | Blog";
  }, []);

  return (
    <>
      <Typography variant="mainHeader">Blog</Typography>
      {/* Container with settings for toasts */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        closeOnClick
        pauseOnHover
      />
      <Container>
        <Typography>Diese Seite ist noch in der Entwicklung...</Typography>
        <Link to="/">Zurück zur Startseite</Link>
      </Container>
    </>
  );
}

export default Blog;
