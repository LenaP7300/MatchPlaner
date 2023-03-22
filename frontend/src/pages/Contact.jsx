import { Container, Typography, Grid, TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Contact() {
  // set custom title (for google analytics)
  useEffect(() => {
    document.title = "MatchPlaner | Kontakt";
  }, []);

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    if (!title || !message || !name || !email) {
      toast.error("Bitte alle Felder ausfüllen");
    }
    console.log("send Email");
  };

  return (
    <>
      <Typography variant="mainHeader">Kontakt</Typography>
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

      <form action="">
        <Grid container>
          {/* Betreff */}
          <Grid item>
            <TextField />
          </Grid>
          {/* Nachricht */}
          <Grid item>
            <TextField />
          </Grid>
          {/* Name */}
          <Grid item>
            <TextField />
          </Grid>
          {/* E-Mail */}
          <Grid item>
            <TextField />
          </Grid>
        </Grid>
        {/* button */}
        <Grid item>
          <Button onSubmit={onSubmit}>Nachricht senden</Button>
        </Grid>
      </form>
    </>
  );
}

export default Contact;
