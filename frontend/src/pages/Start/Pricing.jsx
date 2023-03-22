import { useEffect } from "react";
import {
    Button,
    Typography,
    Grid,
    Container,
    Card,
  } from "@mui/material";
  import { Link } from "react-router-dom";



const Pricing = (props) => {

    return (
      <Grid
        container
        height={`calc(100vh - ${props.heightHeader}px)`} // full height - header
        id="pricing"
        // className="anchor"
        direction="column"
        justifyContent="space-evenly"
        paddingY={2}
        sx={{ scrollSnapAlign: "start" }}
        >

        {/**    100% Transparent und Registrieren Button */}
        <Container>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid
                    item
                    xs
                    container
                    direction="column"
                    // justifyContent="flex-start"
                    alignItems={{xs: "center", sm:"start"}}
                >
                    <Typography
                    textTransform="uppercase"
                    textAlign="start"
                    variant="largeLight"
                    color="primary"
                    >
                    100% Transparent.
                    </Typography>
                    <Typography textAlign={{xs: "center", sm: "start"}}>
                    Keine versteckten Kosten, keine In-App-Käufe.
                    </Typography>
                    <Typography textAlign={{xs: "center", sm: "start"}}>
                    Uneingeschränkter Zugriff auf alle verfügbaren Features.
                    </Typography>
                </Grid>
                <Grid item sx={{m: {xs:"2% 26%", sm:"0 0"}}}>
                    <Link to="/register">
                    <Button size="large">Registrieren</Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>

        {/**        0€ Box */}
        <Container>
            <Grid container justifyContent="center">
            <Card sx={{ padding: "20px" }}>
                <Grid container direction="column">
                <Grid item>
                    <Typography color="primary">
                    Wir befinden uns aktuell in der Entwicklungsphase!
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography lineHeight={1} variant="hugeBold">
                    0€
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography
                    textTransform="uppercase"
                    variant="largeLight"
                    color="primary"
                    >
                    Registrieren &amp; Helfen
                    </Typography>
                </Grid>
                </Grid>
            </Card>
            </Grid>
        </Container>
        
        {/**    Überzeuge dich selbst */}
        <Container>
            <Grid item container direction="column" xs={7}>
            <Typography textAlign="start" color="primary">
                MatchPlaner ist so gut, dass wir den Preis nicht verstecken
                müssen!
            </Typography>
            <Typography textAlign="start">
                Überzeuge Dich selbst, die ersten 2 Wochen kosten Dich nichts!
            </Typography>
            <Typography textAlign="start">
                Du kannst jederzeit kündigen.
            </Typography>
            </Grid>
        </Container>


    </Grid>
    );
}

export default Pricing;