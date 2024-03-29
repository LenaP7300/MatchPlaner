import {
  Typography,
  Grid,
  Card,
  CardMedia,
  TextField,
  Button,
  MenuItem,
  Tooltip,
  Container,
} from "@mui/material";
import {
  WhatsApp,
  Facebook,
  Link as LinkIcon,
  Email,
  GppBad as BadIcon,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import imageMatchplaner from "../images/feature_mp.jpg";
import imageReiseplaner from "../images/tool-reiseplaner.jpg";
import imageEventplaner from "../images/tool-eventplaner.jpg";
import imageTrainingsplaner from "../images/feature_trp2.jpg";
import imageSaisonplaner from "../images/feature_sp.jpg";
import imageVereinsplaner from "../images/feature_vp.png";
import imageTaktikplaner from "../images/tool-taktikplaner.jpg";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Newsfeed from "../components/Newsfeed";
import Calendar from "../components/Calendar";
import SpinnerLogo from "../components/SpinnerLogo";

import { updateSuccess } from "../features/user/userActions";

import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

// first login after email validation/registration
// choose package coach
// const StartPackageCoach = ({
//   newPackage,
//   onChangePackage,
//   submitNewPackage,
//   continueWithBasicPackage,
// }) => (
//   <Grid container justifyContent="center">
//     {/* new package */}
//     <Grid item xs={12}>
//       <TextField
//         select
//         label="Paket"
//         name="package"
//         id="package"
//         value={newPackage}
//         onChange={onChangePackage}
//       >
//         <MenuItem value="" disabled>
//           Paket auswählen
//         </MenuItem>
//         <MenuItem value="basic">
//           Basis-Version (MP, RP, EP)
//           <Typography sx={{ fontStyle: "italic" }}>0,00€/mnt</Typography>
//         </MenuItem>
//         <MenuItem value="training">
//           Basis-Version + TrainingsPlaner
//           <Typography sx={{ fontStyle: "italic" }}>12,99€/mnt</Typography>
//         </MenuItem>
//         <MenuItem value="saison">
//           Basis-Version + SaisonPlaner
//           <Typography sx={{ fontStyle: "italic" }}>9,99€/mnt</Typography>
//         </MenuItem>
//         <MenuItem value="tactics">
//           Basis-Version + TaktikPlaner
//           <Typography sx={{ fontStyle: "italic" }}>4,99€/mnt</Typography>
//         </MenuItem>
//         <MenuItem value="premium">
//           Premium-Version (alle Tools)
//           <Typography sx={{ fontStyle: "italic" }}>19,99€/mnt</Typography>
//         </MenuItem>
//       </TextField>
//     </Grid>
//     {/* buttons */}
//     <Grid item xs={12}>
//       <Button type="submit" onClick={submitNewPackage}>
//         Paket auswählen
//       </Button>
//       <Button onClick={continueWithBasicPackage}>
//         Überspringen (Basis-Paket)
//       </Button>
//     </Grid>
//   </Grid>
// );

// normal view
const Dashboard = ({ user, updatePackage, tools }) => {
  const icons = [
    <WhatsApp fontSize="large" />,
    <Facebook fontSize="large" />,
    <LinkIcon fontSize="large" />,
    <Email fontSize="large" />,
  ];
  return (
    <>
      {/* <Grid container columnSpacing={3} mb={3}> */}
      {/* <Grid item xs={12} md={6}>
          <Typography
            sx={{ textAlign: "start", fontSize: "14px" }}
            variant="h2white"
          >
            Newsfeed
          </Typography>
          <Newsfeed />
        </Grid> */}
      {/* calendar */}
      {/* <Grid item xs={9} md={5}>
          <Typography
            sx={{ textAlign: "start", fontSize: "14px" }}
            variant="h2white"
          >
            Kalender
          </Typography>
          <Calendar />
        </Grid> */}
      {/* promote */}
      {/* <Grid item xs={3} md={1}>
          <Typography
            sx={{ textAlign: "start", fontSize: "14px" }}
            variant="h2white"
          >
            Einladen
          </Typography>
          <Card
            sx={{
              border: "1px solid var(--lightgray)",
              height: "250px",
              margin: "0px",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              sx={{ height: "100%" }}
            >
              {icons.map((icon, index) => (
                <Grid item key={index}>
                  {icon}
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid> */}
      {/* </Grid> */}
      <Grid container columnSpacing={3}>
        {/* heading */}
        <Grid item xs={12}>
          <Typography fontWeight="bold" textAlign="start">
            Meine Features
          </Typography>
        </Grid>

        {/* show all tools/features and disable them when not booked / mark them if not yet programmed */}
        {tools.map((tool, index) => (
          <Grid item xs={12} md={6} key={index} mb={2}>
            {/* <Tooltip title={tool.infoText} arrow> */}
            <Card sx={{ padding: "0px", margin: "0px" }}>
              <Link
                to={tool.link}
                // disable link if coach does not have the permit/package
                style={
                  tool.variant === "disabled" ? { pointerEvents: "none" } : null
                }
              >
                <CardMedia
                  sx={{
                    backgroundImage: tool.imgUrl,
                    height: 175,
                  }}
                >
                  <Grid
                    container
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    variant={tool.variant}
                    // bgcolor={tool.bgColor}
                    bgcolor="rgba(0,0,0,0.4)"
                    position="relative"
                  >
                    <Grid item>
                      {/* {tool.variant === "disabled" && (
                        <BadIcon
                          color="error"
                          sx={{
                            width: "80%",
                            height: "80%",
                            // center the icon over the text
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      )} */}
                      <Typography variant="largeBold">{tool.name}</Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="smallLight">
                        {/* {tool.description} */}
                        {tool.infoText}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardMedia>
              </Link>
            </Card>
            {/* </Tooltip> */}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

function DashboardCoach() {
  // set custom title (for google analytics)
  useEffect(() => {
    document.title = "MatchPlaner | Coach";
  }, []);

  const dispatch = useDispatch();

  const { user, status } = useSelector((state) => state.user);

  // scroll to top when visited
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // array of all tools with all props
  const tools = [
    {
      name: "MatchPlaner",
      description: "Testspielbörse",
      infoText: "Finde den passenden Gegner für Deine Testspiele",
      link: "matchplaner",
      imgUrl: `url(${imageMatchplaner})`,
      variant: "enabled", //enabled, disabled, comingSoon
      // bgColor: "rgba(100,100,0,0.5)",
    },
    {
      name: "TrainingsPlaner",
      description: "Übungsdatenbank",
      infoText:
        "Erhalte in sekundenschnelle eine perfekt abgestimmte Trainingseinheit für Deine Mannschaft",
      link: "trainingsplaner",
      imgUrl: `url(${imageTrainingsplaner})`,
      variant: user
        ? user.packages.trainingsplaner === true
          ? "enabled"
          : "disabled"
        : "disabled", //enabled, disabled, comingSoon
      // bgColor: "rgba(90,150,60,0.5)",
    },

    // {
    //   name: "ReisePlaner",
    //   description: "Trainingslager",
    //   link: "reiseplaner",
    //   imgUrl: `url(${imageReiseplaner})`,
    //   variant: "comingSoon", //enabled, disabled, comingSoon
    //   bgColor: "rgba(100,50,80,0.5)",
    // },
    // {
    //   name: "EventPlaner",
    //   description: "Teambuilding",
    //   link: "eventplaner",
    //   imgUrl: `url(${imageEventplaner})`,
    //   variant: "comingSoon", //enabled, disabled, comingSoon
    //   bgColor: "rgba(100,50,80,0.5)",
    // },

    {
      name: "SaisonPlaner",
      description: "Belastungssteuerung",
      infoText:
        "Plane Deine gesamte Saison und steuere die Belastung individuell",
      link: "saisonplaner",
      imgUrl: `url(${imageSaisonplaner})`,
      variant: "enabled", //enabled, disabled, comingSoon
      // bgColor: "rgba(100,50,80,0.5)",
    },

    {
      name: "VereinsPlaner",
      description: "Belegungsplan",
      infoText: "Verwalte alle Termine zentral und übersichtlich für alle",
      link: "clubplaner",
      imgUrl: `url(${imageVereinsplaner})`,
      variant: "enabled", //enabled, disabled, comingSoon
      // bgColor: "rgba(90,150,60,0.5)",
    },
    // {
    //   name: "TaktikPlaner",
    //   description: "Analysetool",
    //   link: "taktikplaner",
    //   imgUrl: `url(${imageTaktikplaner})`,
    //   variant: "comingSoon", //enabled, disabled, comingSoon
    //   bgColor: "rgba(100,50,80,0.5)",
    // },
  ];

  // dialog: show packages
  // const [openShowPackages, setOpenShowPackages] = useState(false);

  // handle new package
  const [newPackage, setNewPackage] = useState("");

  // Let App change e.g. while typing in input field
  const onChangePackage = (e) => {
    setNewPackage(e.target.value);
  };

  // submit the new chosen package (connection/infos: stripe)
  const submitNewPackage = async () => {
    if (newPackage === "") {
      toast.error("Bitte wählen Sie ein Paket aus");
    } else {
      localStorage.setItem("newPackage", newPackage);
      let priceId;
      switch (newPackage) {
        case "basic":
          priceId = "price_1LfOU9InQhoZcIpGi7YxBRAr";
          break;
        case "training":
          priceId = "price_1LfOC7InQhoZcIpGrRkR7Qcn";
          break;
        case "saison":
          priceId = "price_1LfOCaInQhoZcIpGh6XGZJtP";
          break;
        case "tactics":
          priceId = "price_1LfOD6InQhoZcIpGBMNmwFzN";
          break;
        case "premium":
          priceId = "price_1LfODYInQhoZcIpG4UkQYk6q";
          break;
        default:
          break;
      }
      const userData = {
        priceId,
        newPackage,
      };
      // const promise = dispatch(createSubscriptionSession({ userData }));
      // Redirect to stripe payment site
      // window.location = promise.payload.url;
    }
  };

  // continue without choosing a package (get basic free package)
  const continueWithBasicPackage = async () => {
    // set firstVisit to false
    const userData = {
      firstVisit: false,
    };
    // dispatch(update(userData));
    // redirect
    // window.location = "/coach";
  };

  // update package (stripe)
  const updatePackage = () => {
    // TODO: include strip
    // redirects to stripe: manage abo
    window.location =
      "https://billing.stripe.com/p/login/test_6oE17L2Li3Lx8fKeUU";
  };

  return (
    <>
      <Typography variant="mainHeader">
        Herzlich Willkommen {user.name}!
      </Typography>

      {/* Container with settings for toasts */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        closeOnClick
        pauseOnHover
      />

      {status === "loading" && <SpinnerLogo />}

      {/* {user.firstVisit ? (
        <StartPackageCoach
          newPackage={newPackage}
          onChangePackage={onChangePackage}
          submitNewPackage={submitNewPackage}
          continueWithBasicPackage={continueWithBasicPackage}
        />
      ) : (
        <Dashboard user={user} updatePackage={updatePackage} tools={tools} />
      )} */}
      <Container>
        <Dashboard user={user} updatePackage={updatePackage} tools={tools} />
      </Container>
    </>
  );
}

export default DashboardCoach;
