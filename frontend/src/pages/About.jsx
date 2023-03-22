import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import imageMatchplaner from "../images/tool-matchplaner.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

function About() {
  // set custom title (for google analytics)
  useEffect(() => {
    document.title = "MatchPlaner | Über uns";
  }, []);

  // scroll to top at first visit
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // state to handle the dialogs
  // goals
  const [goalsOpen, setGoalsOpen] = useState(false);
  // claim
  const [claimOpen, setClaimOpen] = useState(false);
  // idea
  const [ideaOpen, setIdeaOpen] = useState(false);
  // team
  const [teamOpen, setTeamOpen] = useState(false);

  return (
    <>
      <Typography variant="mainHeader">Über uns</Typography>

      {/* container for pictures/dialogs */}
      <Grid container>
        {/* our goals */}
        <Grid item xs={12} md={6} onClick={() => setGoalsOpen(true)}>
          <Card sx={{ border: "2px solid lightgray" }} className="pointer">
            <CardMedia
              sx={{
                backgroundImage: `url(${imageMatchplaner})`,
                height: 175,
              }}
            >
              <Grid
                container
                height="100%"
                alignItems="center"
                justifyContent="center"
                variant="about"
                sx={{ backgroundColor: "rgba(100,100,0,0.5)" }}
              >
                <Grid item>
                  <Typography variant="h5">Unsere Ziele</Typography>
                </Grid>
              </Grid>
            </CardMedia>
          </Card>
        </Grid>
        {/* our claim */}
        <Grid item xs={12} md={6} onClick={() => setClaimOpen(true)}>
          <Card sx={{ border: "2px solid lightgray" }} className="pointer">
            <CardMedia
              sx={{
                backgroundImage: `url(${imageMatchplaner})`,
                height: 175,
              }}
            >
              <Grid
                container
                height="100%"
                alignItems="center"
                justifyContent="center"
                variant="about"
                sx={{ backgroundColor: "rgba(100,100,0,0.5)" }}
              >
                <Grid item>
                  <Typography variant="h5">Unser Anspruch</Typography>
                </Grid>
              </Grid>
            </CardMedia>
          </Card>
        </Grid>
        {/* our idea */}
        <Grid item xs={12} md={6} onClick={() => setIdeaOpen(true)}>
          <Card sx={{ border: "2px solid lightgray" }} className="pointer">
            <CardMedia
              sx={{
                backgroundImage: `url(${imageMatchplaner})`,
                height: 175,
              }}
            >
              <Grid
                container
                height="100%"
                alignItems="center"
                justifyContent="center"
                variant="about"
                sx={{ backgroundColor: "rgba(100,100,0,0.5)" }}
              >
                <Grid item>
                  <Typography variant="h5">Unsere Idee</Typography>
                </Grid>
              </Grid>
            </CardMedia>
          </Card>
        </Grid>
        {/* our team */}
        <Grid item xs={12} md={6} onClick={() => setTeamOpen(true)}>
          <Card sx={{ border: "2px solid lightgray" }} className="pointer">
            <CardMedia
              sx={{
                backgroundImage: `url(${imageMatchplaner})`,
                height: 175,
              }}
            >
              <Grid
                container
                height="100%"
                alignItems="center"
                justifyContent="center"
                variant="about"
                sx={{ backgroundColor: "rgba(100,100,0,0.5)" }}
              >
                <Grid item>
                  <Typography variant="h5">Unser Team</Typography>
                </Grid>
              </Grid>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>

      {/* Modals/Dialogs */}
      {/* Goals */}
      <Dialog open={goalsOpen} onClose={() => setGoalsOpen(false)}>
        <DialogTitle>
          Ziele
          <IconButton
            aria-label="close"
            onClick={() => setGoalsOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Wir wollen administrative Prozesse rund um den Trainerjob
            vereinfachen und dafür sorgen, dass Du Deine kostbare Zeit für die
            wichtigsten Aufgaben in der direkten Arbeit mit der Mannschaft
            einsetzen kannst. Unser zentrales Anliegen ist es, Dich so zu
            unterstützen, dass auch Du Dein maximales Potential AUF dem Platz
            entfalten kannst. Auf diese Weise wollen wir die Ausbildung von
            Trainern/innen und Spielern/innen optimieren und zu einer
            Professionalisierung insbesondere im Amateurfußball beitragen.
          </DialogContentText>
        </DialogContent>
      </Dialog>

      {/* claim */}
      <Dialog open={claimOpen} onClose={() => setClaimOpen(false)}>
        <DialogTitle>
          Anspruch
          <IconButton
            aria-label="close"
            onClick={() => setClaimOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Wir wissen, wie anspruchsvoll der Trainerjob ist. Deshalb wollen wir
            Dir so gut es geht zur Seite stehen. Unser Anspruch ist es, Deine
            Arbeit so effizient wie möglich zu gestalten. Sämtliche Prozesse
            abseits des Platzes sollen mit wenig Mühe und Zeitaufwand verbunden
            sein, sodass Du die gewonnene Zeit und Energie in die Entwicklung
            und Unterstützung Deiner Mannschaft investieren kannst.
          </DialogContentText>
        </DialogContent>
      </Dialog>

      {/* idea */}
      <Dialog open={ideaOpen} onClose={() => setIdeaOpen(false)}>
        <DialogTitle>
          Idea
          <IconButton
            aria-label="close"
            onClick={() => setIdeaOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            MatchPlaner ist Dein digitaler Co-Trainer, der Deine Arbeit als
            Trainer/in unterstützt und die Qualität der Spielerausbildung
            fördert. Mithilfe verschiedener Tools wirst Du bei sämtlichen
            administrativen Aufgaben rund um den Trainerjob unterstützt. Auf
            diese Weise werden wiederkehrende Prozesse erleichtert und Zeit
            gespart. Zeit, die Du stattdessen in die zielgerichtete und
            individuelle Ausbildung Deiner Spieler/innen investieren kannst.
            MatchPlaner unterstützt Dich bei sämtlichen Aufgaben, die abseits
            des Platzes anfallen und ermöglicht es Dir, den vollen Einsatz
            Deinen Spieler/innen zu widmen.
          </DialogContentText>
        </DialogContent>
      </Dialog>

      {/* team */}
      <Dialog open={teamOpen} onClose={() => setTeamOpen(false)}>
        <DialogTitle>
          Team
          <IconButton
            aria-label="close"
            onClick={() => setTeamOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Unser Team besteht aus Trainern und Vereinsfunktionären, die über
            jahrelange Erfahrung im Fußball verfügen. Als ehemalige und aktive
            Trainer verschiedener Altersklassen kennen wir die Aufgaben und
            Herausforderungen eines Fußballtrainers in der alltäglichen Arbeit
            genau. Auf Basis unserer Erfahrung entwickeln wir Tools, welche die
            Arbeit der Trainer/innen unterstützen und die Qualität der
            Spielerausbildung fördern.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default About;
