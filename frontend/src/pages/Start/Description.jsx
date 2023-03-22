import { React, useEffect } from "react";
import {
  Button,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import mobile from "../../images/handy.png";
import pc from "../../images/pc.png";

const DescriptionItem = (props) => {
  return (
    <Grid item container alignItems="center">
      <CheckCircleOutline
        sx={{ marginRight: "5%" }}
        fontSize="large"
      />
      <Typography>{props.text}</Typography>
  </Grid>
  );
}

const TitleText = (props) => {
  return (
    <Grid item>
      <Typography
        textTransform="uppercase"
        variant="largeBold"
        lineHeight={1}
        color={props.color}
      >
        {props.text}
      </Typography>
    </Grid>
  );
}

export default function Description(props){

    return (
        <Grid
        container
        height={`calc(100vh - ${props.heightHeader}px)`} // full height - header
        id="description"
        paddingY={2}
        direction="column"
        justifyContent="space-evenly"
        position="relative"
        sx={{ scrollSnapAlign: "start" }}
      >
        {/* title */}
        <Container>
          <Grid container direction="column" alignItems="flex-start">
            <TitleText text="1 App"/>
            <TitleText text="6 Features" color="primary" />
          </Grid>
        </Container>

        {/* description list */}
        <Container>
          <Grid container direction="column" alignItems="flex-start">
            <DescriptionItem text="Trainingseinheiten planen"/>
            <DescriptionItem text="Testspiele vereinbaren" />
            <DescriptionItem text="Belastung steuern"/>
            <DescriptionItem text="Platzbelegung kooridinieren"/>
            <DescriptionItem text="Taktiken entschlüsseln"/>
            <DescriptionItem text="Teamevents und Teamreisen buchen"/>
          </Grid>
        </Container>

        {/* button */}
        <Container>
          <Grid container justifyContent="flex-start">
            <Button size="large">Kostenlos testen</Button>
          </Grid>
        </Container>

        {/* laptop and mobile phone */}
        <Box
          sx={{
            position: "absolute",
            top: {sm: "20vh", md:"10vh", lg:"30vh"},
            right: {sm: "0vh", md: "1vh", lg:"1vh"},
            // transform: "translate(-50%, -50%)",
            height: {sm: "40vh", md: "60vh", lg:"50vh"},
            maxWidth: "50vw",
            width: {sm: "40vh", md: "60vh", lg: "50vh"},
            backgroundImage: `url(${mobile})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 2,
            display: {xs: "none", sm:"block", md:"block"},
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 80,
            right: {md: 40, lg: 140},
            // transform: "translate(-50%, -50%)",
            maxWidth: "80vh",
            height: {md: "80vh", lg: "80vh"},
            width: "100vh",
            backgroundImage: `url(${pc})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: {md:"none", lg:"block"},
          }}
        />
      </Grid>
    )
}