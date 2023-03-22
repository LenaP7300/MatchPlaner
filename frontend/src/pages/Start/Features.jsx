import { Grid , Typography, Button, Container, styled, Stack} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

function Check(props){
  return (
    <Stack item container alignItems="center" direction="row">
      <CheckCircleOutline sx={{ marginRight: "16px" }} />
      <Typography textAlign="start"
          fontSize={{sm:"1rem", xs:"0.65rem"}}>
            {props.text}
      </Typography>
    </Stack>
  )
};


const FeatureButton = styled(Button)(({theme}) => ({
  fontSize: 15,
  width: "80%",
  [theme.breakpoints.up("sm")]:{
    fontSize: 20,
    width: "90%",
  },
  borderRadius: "5px",
  ":hover": {
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
  }
}));

function Feature(props){
  const Checks = props.checks.map(item => {
    return (
      <Check text={item} />
    );
  })
  return (
    <>
      <Grid container direction="column" alignItems="flex-start">
        <Typography
          textTransform="uppercase"
          textAlign="start"
          fontWeight={700}
          fontSize={{sx:10, sm:40}}
          lineHeight={1}
        >
          {props.headline}
        </Typography>
        <Typography
          color="primary"
          fontWeight={700}
          fontSize={{sx:10, sm:40}}
          textAlign="start"
          lineHeight={1}
        >
          {props.subline}
        </Typography>
      </Grid>
      <Grid container direction="column">
        {Checks}
      </Grid>
    </>
  )
}

export default function Features (props){
    return (
        <Grid
        container
        height={`calc(100vh - ${props.heightHeader}px)`} // full height - header
        id="features-overview"
        className="anchor"
        sx={{
          scrollSnapAlign: "start",
          backgroundColor: "inherit",
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.97) 40%, rgba(0,0,0,0.1)), url(
            ${props.pictureFeatures}
            )`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        paddingY={2}
        justifyContent="center"
      >
        <Container>
          <Grid container sx={{ height: "100%" }}>
            <Grid
              item
              xs={5}
              md={3}
              container
              direction="column"
              justifyContent="space-evenly"
            >
              <Grid item>
                <Typography textTransform="uppercase"
                  fontWeight={700}
                  fontSize={{sm:40, xs:30}}>
                  Features
                </Typography>
              </Grid>
              <Grid item>
                <FeatureButton
                  onMouseEnter={() => {
                    props.setMouseOver(true);
                    props.setViewFeature("mp");
                  }}
                  onMouseLeave={() => {
                    props.setMouseOver(false);
                  }}
                  sx={{
                    backgroundColor: props.viewFeature === "mp" ? "white" : "inherit",
                    color: props.viewFeature === "mp" ? "black" : "white",
                    borderColor: props.viewFeature === "mp" ? "inherit" : "black",
                  }}
                >
                  MatchPlaner
                </FeatureButton>
              </Grid>
              <Grid item>
                <FeatureButton
                  onMouseEnter={() => {
                    props.setMouseOver(true);
                    props.setViewFeature("trp");
                  }}
                  onMouseLeave={() => {
                    props.setMouseOver(false);
                  }}
                  sx={{
                    backgroundColor:
                      props.viewFeature === "trp" ? "white" : "inherit",
                    color: props.viewFeature === "trp" ? "black" : "white",
                    borderColor: props.viewFeature === "trp" ? "inherit" : "black",
                    
                  }}
                >
                  TrainingsPlaner
                </FeatureButton>
              </Grid>
              <Grid item>
                <FeatureButton
                  onMouseEnter={() => {
                    props.setMouseOver(true);
                    props.setViewFeature("sp");
                  }}
                  onMouseLeave={() => {
                    props.setMouseOver(false);
                  }}
                  sx={{
                    backgroundColor: props.viewFeature === "sp" ? "white" : "inherit",
                    color: props.viewFeature === "sp" ? "black" : "white",
                    borderColor: props.viewFeature === "sp" ? "inherit" : "black",
                    
                  }}
                >
                  SaisonPlaner
                </FeatureButton>
              </Grid>
              <Grid item>
                <FeatureButton
                  onMouseEnter={() => {
                    props.setMouseOver(true);
                    props.setViewFeature("vp");
                  }}
                  onMouseLeave={() => {
                    props.setMouseOver(false);
                  }}
                  sx={{
                    backgroundColor: props.viewFeature === "vp" ? "white" : "inherit",
                    color: props.viewFeature === "vp" ? "black" : "white",
                    borderColor: props.viewFeature === "vp" ? "inherit" : "black",
                    
                  }}
                >
                  VereinsPlaner
                </FeatureButton>
              </Grid>
              <Grid item>
                <FeatureButton
                  onMouseEnter={() => {
                    props.setMouseOver(true);
                    props.setViewFeature("tap");
                  }}
                  onMouseLeave={() => {
                    props.setMouseOver(false);
                  }}
                  sx={{
                    backgroundColor:
                      props.viewFeature === "tap" ? "white" : "inherit",
                    color: props.viewFeature === "tap" ? "black" : "white",
                    borderColor: props.viewFeature === "tap" ? "inherit" : "black",
                    
                  }}
                >
                  TaktikPlaner
                </FeatureButton>
              </Grid>
              <Grid item>
                <FeatureButton
                  onMouseEnter={() => {
                    props.setMouseOver(true);
                    props.setViewFeature("ep");
                  }}
                  onMouseLeave={() => {
                    props.setMouseOver(false);
                  }}
                  sx={{
                    backgroundColor: props.viewFeature === "ep" ? "white" : "inherit",
                    color: props.viewFeature === "ep" ? "black" : "white",
                    borderColor: props.viewFeature === "ep" ? "inherit" : "black",
                    
                  }}
                >
                  EventPlaner
                </FeatureButton>
              </Grid>
            </Grid>
            <Grid
              item
              xs={7}
              container
              direction="column"
              justifyContent="space-evenly"
            >
              {props.viewFeature === "mp" && (
                <Feature headline="Testspiele"
                subline="Netzwerk mit Vereinen aus ganz Deutschland."
                checks={[
                  "schnelle Kommunikation",
                  "zahlreiche Filter",
                  "an alles gedacht (sogar Trikotfarben)",
                  "übersichtlicher Kalender zur Planung",
                  "Fairplay-Rating",
                  "Anfragen erstellen in unter 30 Sekunden",
                ]} />
              )}
              {props.viewFeature === "trp" && (
                <Feature headline="Training"
                subline="Perfekt abgestimmte Einheiten mithilfe von künstlicher
                Intelligenz."
                checks={[
                  "5 Mio.+ Trainingseinheiten",
                  "abgestimmt auf die Spielerzahl",
                  "altersgerechtes Training",
                  "passend zur Leistungsstärke",
                  "maximale Flexibilität",
                  "KI lernt durch Dein Feedback",
                ]} />
              )}
              {props.viewFeature === "sp" && (
                <Feature headline="Fitness"
                subline="Optimale Belastungssteuerung angepasst an Dein Team."
                checks={[
                  "modernes Konditionstraining",
                  "sportwissenschaftliche Erkenntnisse",
                  "alters- und leistungsgerecht",
                  "angepasst an Deinen Trainingsrhythmus",
                  "KI lernt durch Dein Feedback",
                  "automatisch verknüpft mit TrainingsPlaner",
                ]} />
              )}
              {props.viewFeature === "vp" && (
                <Feature headline="Platzbelegung"
                subline="Optimierter Belegungsplan dank automatisiertem
                Vereinskalender."
                checks={[
                  "alle Termine auf einen Blick",
                  "Spiele und Trainings aller Teams",
                  "alle Sportstätten Deines Vereins",
                  "schnelle Koordination",
                  "optimal für Vereinsfunktionäre",
                ]} />
              )}
              {props.viewFeature === "tap" && (
                <Feature headline="Analyse"
                subline="Gegnerische Taktiken entschlüsseln und Spiele gewinnen."
                checks={[
                  "IN-GAME-Analyse",
                  "erhöhe Deine Erfolgschancen",
                  "Verknüpfung des TrainingsPlaner mit Taktik",
                  "Tipps für Standardsituationen",
                  "Spezialtraining (Torspieler, Standards)",
                  "Coachingtipps fürs Spiel"
                ]} />
              )}
              {props.viewFeature === "ep" && (
                <Feature headline="Buchungsportal"
                subline="Günstige Gruppenangebote für Teamevents und Trainingslager"
                checks={[
                  "ausgewählte Unterkünfte",
                  "alle Eventlocations auf einen Blick",
                  "spezielle Gruppenangebote",
                  "Bestpreisgarantie",
                  "MP-Treuepunkte",
                  "Verknüpfung mit Saison- und TrainingsPlaner"
                ]} />
              )}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    )
}