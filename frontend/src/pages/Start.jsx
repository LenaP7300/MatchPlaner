import {
  Button,
  Typography,
  Grid,
  SvgIcon,
  Box,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Card,
} from "@mui/material";
import { CImage } from "@coreui/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AttachMoneyRounded,
  StarTwoTone,
  AutoAwesome,
  VerifiedUserRounded,
  AutoGraphRounded,
  PsychologyRounded,
  VerifiedUser,
  ManageAccounts,
  ArrowRightAlt,
  Key,
  MoneyOffOutlined,
  BorderAll,
  CheckCircleOutline,
  TrainRounded,
  FavoriteBorder,
  Favorite,
  AccessTime,
  TrendingUp,
  EmojiEvents,
  School,
  AltRoute,
  Star,
  StarBorder,
  StarHalf,
  ExpandMore,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import existLogos from "../images/exist-logos.jpg";
import backgroundCatcher from "../images/background-image-catcher.jpg";
import mobile_empty from "../images/handy_empty.png";
import feature_mp from "../images/feature_mp.jpg";
import feature_trp from "../images/feature_trp2.jpg";
import feature_sp from "../images/feature_sp.jpg";
import feature_vp from "../images/feature_vp.png";
import feature_tap from "../images/feature_tap.jpg";
import feature_ep from "../images/feature_ep.jpg";
import $ from "jquery";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Carousel } from "../components/Carousel";
import { FAQs } from "../components/Accordion";
import React from "react";
import Footer from "../components/Footer";
import Catcher from "./Start/Catcher";
import CatcherStats from "./Start/CatcherStats";
import Agreement from "./Start/Agreement";
import Advantages from "./Start/Advantages";
import Features from "./Start/Features"
import Description from "./Start/Description";
import Pricing from "./Start/Pricing"

import { setAgreementCounter } from "../features/user/userActions";
import { useSelector, useDispatch } from "react-redux";
import { setFacts, getFacts } from "../features/user/userAPI";

function Start() {
  // set custom title (for google analytics)
  useEffect(() => {
    document.title = "MatchPlaner | Start";
  }, []);

  // reference theme to get access
  const theme = useTheme();

  // get height of header
  let heightHeader = 64;
  useEffect(() => {
    let header = document.getElementById("header");
    heightHeader = header.clientHeight;
  }, []);

  // fetch basic facts (number of user who liked the statement)
  const [counterAgreement, setCounterAgreement] = useState(0);

  const fetchFacts = async () => {
    const cArray = await getFacts();
    const c = cArray[0].agreementCounter;
    // console.log("fetch: ", c);
    setCounterAgreement(c);
  };
  useEffect(() => {
    fetchFacts();
  }, []);

  // create animations
  const animateString = (text, element, intervalDuration) => {
    // wait until numbers are loaded
    setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        const part = text.substring(0, ++count);
        requestAnimationFrame(() => {
          element.textContent = part;
        });
        if (count === text.length) {
          clearInterval(interval);
        }
      }, intervalDuration);
    }, 2000);
  };
  const animateCounter = (countTo, step, element, totalDuration) => {
    let count = 0;
    let intervalDuration = totalDuration / (countTo / step);
    // console.log(intervalDuration, totalDuration, countTo / step);
    // total = interval * sumSteps
    // sumSteps = countTo / step
    // interval = total/sumSteps = total / (countTo / step)
    const interval = setInterval(() => {
      count += step;
      const part = count;
      requestAnimationFrame(() => {
        element.textContent = part;
      });
      if (count >= countTo) {
        clearInterval(interval);
      }
    }, intervalDuration);
  };
  const [greenString, setGreenString] = useState(true);
  const animateWords = (textArray, element, intervalDuration) => {
    let counter = 0;
    const interval = setInterval(() => {
      const part = textArray[counter];
      if (part.includes("alles machen")) {
        setGreenString(true);
      } else {
        setGreenString(false);
      }
      requestAnimationFrame(() => {
        element.textContent = part;
      });
      counter++;
      if (counter === textArray.length) {
        counter = 0;
      }
    }, intervalDuration);
    return interval;
  };
  const [viewFeature, setViewFeature] = useState("mp");
  const showFeatures = ["mp", "trp", "sp", "vp", "tap", "ep"];
  const picturesFeatures = [
    feature_mp,
    feature_trp,
    feature_sp,
    feature_vp,
    feature_tap,
    feature_ep,
  ];
  const [pictureFeatures, setPictureFeature] = useState(feature_mp);
  const [mouseOver, setMouseOver] = useState(false);
  const animateFeatures = (intervalDuration) => {
    let counter = showFeatures.findIndex((el) => el.includes(viewFeature));
    setPictureFeature(picturesFeatures[counter]);
    const interval = setInterval(() => {
      if (!mouseOver) {
        counter++;
        if (counter === showFeatures.length) {
          counter = 0;
        }
        setPictureFeature(picturesFeatures[counter]);
        setViewFeature(showFeatures[counter]);
      }
    }, intervalDuration);
    return interval;
  };
  useEffect(() => {
    animateString("Co-Trainer", document.getElementById("banner"), 200);

    animateCounter(
      6000,
      200,
      document.getElementById("facts-amount-coaches"),
      2000
    );
    animateCounter(
      5,
      1,
      document.getElementById("facts-amount-trainings"),
      2000
    );
    animateCounter(
      3000,
      100,
      document.getElementById("facts-amount-matches"),
      2000
    );

    const wordsInterval = animateWords(
      [
        "organisieren.",
        "kommunizieren.",
        "verwalten.",
        "analysieren.",
        "alles machen.",
        "schlichten.",
        "vorbereiten.",
        "planen.",
        "motivieren.",
        "alles machen.",
        "vermitteln.",
        "vorangehen.",
        "taktieren.",
        "trösten.",
        "alles machen.",
        "reagieren.",
        "entscheiden.",
        "dazulernen.",
        "erziehen.",
        "alles machen.",
      ],
      document.getElementById("coach-tasks"),
      1200
    );

    return () => {
      clearInterval(wordsInterval);
    };
  }, []);
  useEffect(() => {
    let featureInterval = animateFeatures(3000);
    if (mouseOver && featureInterval) {
      clearInterval(featureInterval);
    }
    return () => {
      clearInterval(featureInterval);
    };
  }, [mouseOver]);

  return (
    <div
      style={{
        height: `calc(100vh - ${heightHeader}px)`, // full height - header
        //overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* catcher */}
      <Catcher {...CatcherStats} />
      {/* agreement */}
      <Agreement color={greenString} 
        setCounterAgreement={setCounterAgreement}
        counterAgreement={counterAgreement}/>
      {/* advantages */}
      <Advantages heightHeader={heightHeader}/>
      {/* description */}
      *<Description heightHeader={heightHeader}/>
      {/* features */}
      <Features viewFeature={viewFeature}
                setViewFeature={setViewFeature}
                setMouseOver={setMouseOver}
                pictureFeatures={pictureFeatures}
                heightHeader={heightHeader}/>
      {/* pricing */}
      <Pricing heightHeader={heightHeader}/>
      {/* app */}
      {/* <Grid
        container
        height={`calc(100vh - ${heightHeader}px)`} // full height - header
        id="app"
        position="relative"
        sx={{ scrollSnapAlign: "start" }}
      >
        <Container>
          <Grid item xs={6}>
            <Box
              sx={{
                backgroundColor: theme.palette.customDark.main,
                borderRadius: "5px",
                height: "150px",
                padding: "10px",
              }}
            >
              <Grid container>
                <Grid item container justifyContent="space-between">
                  <Typography color="primary" fontWeight="bold">
                    Mega Trainingsplanung
                  </Typography>
                  <Grid item>
                    <Star color="primary" />
                    <Star color="primary" />
                    <Star color="primary" />
                    <Star color="primary" />
                    <Star color="primary" />
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography textAlign="start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt eligendi laborum sequi minima ipsa rerum a suscipit
                    illo? Repellat vel excepturi quas magni amet quam ducimus
                    iusto at voluptates saepe?
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Container>
        <Container>
          <Grid item xs={6}>
            <Box
              sx={{
                backgroundColor: theme.palette.customDark.main,
                borderRadius: "5px",
                height: "150px",
                padding: "10px",
              }}
            >
              <Grid container>
                <Grid item container justifyContent="space-between">
                  <Typography color="primary" fontWeight="bold">
                    Gut verknüpft
                  </Typography>
                  <Grid item>
                    <Star color="primary" />
                    <Star color="primary" />
                    <Star color="primary" />
                    <Star color="primary" />
                    <StarBorder color="primary" />
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography textAlign="start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt eligendi laborum sequi minima ipsa rerum a suscipit
                    illo? Repellat vel excepturi quas magni amet quam ducimus
                    iusto at voluptates saepe?
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Container>
        <Container>
          <Grid item xs={6}>
            <Box
              sx={{
                backgroundColor: theme.palette.customDark.main,
                borderRadius: "5px",
                height: "150px",
                padding: "10px",
              }}
            >
              <Grid container>
                <Grid item container justifyContent="space-between">
                  <Typography color="primary" fontWeight="bold">
                    Ich bin begeistert!
                  </Typography>
                  <Grid item>
                    <Star color="primary" />
                    <Star color="primary" />
                    <Star color="primary" />
                    <Star color="primary" />
                    <StarHalf color="primary" />
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography textAlign="start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt eligendi laborum sequi minima ipsa rerum a suscipit
                    illo? Repellat vel excepturi quas magni amet quam ducimus
                    iusto at voluptates saepe?
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Container>
        <Box
          position="absolute"
          top="50%"
          right="25%"
          sx={{ transform: "translate(50%, -50%)" }}
        >
          <Button size="large">Registrieren</Button>
          <Typography textTransform="uppercase">Oder hol die App!</Typography>
          image of app store and play store
        </Box>
      </Grid> */}
      {/* EXIST */}
      <Grid
        container
        // minHeight={`calc(100vh - ${heightHeader}px)`} // full height - header
        height={`calc(100vh - ${heightHeader}px)`} // full height - header
        id="exist"
        direction="column"
        justifyContent="space-evenly"
        sx={{ scrollSnapAlign: "start" }}
      >
        {/* description */}
        <Container>
          <Typography>
            Wir sind ein staatlich gefördertes Unternehmen.
          </Typography>
        </Container>
        {/* image */}
        <Container>
          <img src={`${existLogos}`} alt="EXIST Logo" width="100%"/>
        </Container>
      </Grid>
      <div style={{ scrollSnapAlign: "end" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Start;
