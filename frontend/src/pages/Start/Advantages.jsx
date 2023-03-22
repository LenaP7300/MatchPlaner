import { Grid , Typography, Container, Box} from "@mui/material";
import backgroundAdvantages from "../../images/advantages.jpg";
import {AccessTime,
        School,
        AltRoute,
        TrendingUp,
        EmojiEvents } from "@mui/icons-material";
import { styled } from "@mui/system";

const AdvantagesGrid = styled(Grid)({
    scrollSnapAlign: "start",
    backgroundColor: "inherit",
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4) , rgba(0,0,0,0.4)), linear-gradient(to top, rgba(0,0,0,0.9) , rgba(0,0,0,0) 30%), linear-gradient(to bottom, rgba(0,0,0,0.9) , rgba(0,0,0,0) 30%), url(
        ${backgroundAdvantages}
        )`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
});

function TopText (){
    return (
        <Container>
            <Grid item container direction="column">
                <Grid item alignSelf="flex-start">
                <Typography color="primary">
                    Wir bringen den Spaß am Trainerjob zurück!
                </Typography>
                </Grid>
                <Grid item alignSelf="flex-start">
                <Typography>
                    Du erledigst die Arbeit auf dem Platz, wir übernehmen den Rest.
                </Typography>
                </Grid>
            </Grid>
            </Container>
    )
};

function MainText (){
    return (
        <Container>
            <Typography
                color="primary"
                textTransform="uppercase"
                sx={{fontWeight:700,
                    fontSize:{xs:40 , sm:100}}}
                lineHeight={1}
            >
                Die Revolution <br /> des Amateursports
            </Typography>
        </Container>
    )
};

const AdvantageStyling = {
    background: "rgba(0,0,0,0.3)",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "60px",
    verticalAlign: "middle",
    padding: "10px",
};

function AdvantageList (){
    return (
        <Container>
            <Grid item container justifyContent="space-evenly">
                <Grid item xs={2} container direction="column">
                <Grid item>
                    <AccessTime 
                    style={AdvantageStyling}
                    fontSize="large"/>
                </Grid>
                <Grid item display={{xs:"none", sm:"block"}}>
                    <Typography display={{xs:"none", sm:"block"}}>weniger Zeitaufwand</Typography>
                </Grid>
                </Grid>
                <Grid item xs={2} container direction="column">
                <Grid item>
                    <TrendingUp
                    fontSize="large"
                    style={AdvantageStyling}
                    />
                </Grid>
                <Grid item>
                    <Typography display={{xs:"none", sm:"block"}}>mehr Spaß</Typography>
                </Grid>
                </Grid>
                <Grid item xs={2} container direction="column">
                <Grid item>
                    <EmojiEvents
                    fontSize="large"
                    style={AdvantageStyling}
                    />
                </Grid>
                <Grid item>
                    <Typography  display={{xs:"none", sm:"block"}}>hochwertigere Ausbildung</Typography>
                </Grid>
                </Grid>
                <Grid item xs={2} container direction="column">
                <Grid item>
                    <School
                    fontSize="large"
                    style={AdvantageStyling}
                    />
                </Grid>
                <Grid item>
                    <Typography display={{xs:"none", sm:"block"}}>mehr Wissen</Typography>
                </Grid>
                </Grid>
                <Grid item xs={2} container direction="column">
                <Grid item>
                    <AltRoute
                    fontSize="large"
                    style={AdvantageStyling}
                    />
                </Grid>
                <Grid item>
                    <Typography display={{xs:"none", sm:"block"}}>höhere Flexibilität</Typography>
                </Grid>
                </Grid>
            </Grid>
        </Container>
    )
};

export default function Advantages(props) {
    return (
        <AdvantagesGrid
            container
            height={`calc(100vh - ${props.heightHeader}px)`} // full height - header
            id="advantages"
            direction="column"
            justifyContent="space-between"
            paddingY={2}
        >
            {/* text on top */}
            <TopText />
            {/* main text */}
            <MainText />
            {/* advantages */}
            <AdvantageList />
        </AdvantagesGrid>
    )
}