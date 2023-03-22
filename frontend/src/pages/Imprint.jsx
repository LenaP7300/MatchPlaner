import { Grid, Typography, Container } from "@mui/material";
import { useEffect } from "react";
import Footer from "../components/Footer";

function Imprint() {
  // set custom title (for google analytics)
  useEffect(() => {
    document.title = "MatchPlaner | Impressum";
  }, []);

  return (
    <>
      <Container>
        <Typography variant="mainHeader">Impressum</Typography>

        <Grid container spacing={2}>
          <Grid item container>
            <Grid item xs={12}>
              <Typography fontWeight="bold">Angaben gemäß § 5 TMG:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontWeight="bold">
                MatchPlaner Sport Solutions UG (haftungsbeschränkt)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Holbeinstraße 13</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>72760 Reutlingen</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Deutschland</Typography>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item xs={12}>
              <Typography fontWeight="bold">Kontakt:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>E-Mail: info@matchplaner.com</Typography>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item xs={12}>
              <Typography fontWeight="bold">
                Vertretungsberechtigte Geschäftsführer:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Paul Prochiner</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Philipp Saur</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Jens Bintakies</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Anton Kandlbinder</Typography>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item xs={12}>
              <Typography>Amtsgericht Stuttgart HRB 788023</Typography>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item xs={12}>
              <Typography>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit, die Sie hier finden
                https://ec.europa.eu/consumers/odr/. Zur Teilnahme an einem
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle sind wir nicht verpflichtet und
                nicht bereit.
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid item container>
          <Grid item xs={12}>
            <Typography>
              Umsatzsteuer-Identifikationsnummer nach § 27a UStG: DE777777777
            </Typography>
          </Grid>

          <Typography>
            Verantwortlich für den Inhalt [des Blogs o. ä.] nach § 55 Abs. 2
            RStV
          </Typography>
          <Typography>
            Geschäftsführer verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </Typography>
        </Grid> */}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Imprint;
