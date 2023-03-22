import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Newsfeed from "../components/Newsfeed";

import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

// const ProductDisplay = ({ dispatch, newAllocation }) => (
//   <section>
//     <div className="product">
//       <div className="description">
//         <h3>Ausgewählt: {newAllocation} Lizenzen</h3>
//         <h5>2,50€ für 10 Lizenzen pro Monat</h5>
//         <h6>{newAllocation * 0.25}€</h6>
//       </div>
//     </div>
//     {/* <form action="/create-checkout-session" method="POST">
//       {/* Add a hidden field with the lookup_key of your Price */}
//     {/* <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
//       <button id="checkout-and-portal-button" type="submit">
//         Checkout
//       </button>
//     </form> */}
//     <Button
//       onClick={async () => {
//         const priceId = "price_1LeayzInQhoZcIpG1S1y4m80";
//         const userData = {
//           priceId,
//           allocation: newAllocation,
//         };
//         const promise = await dispatch(createSubscriptionSession({ userData }));
//         // Redirect to stripe payment site
//         window.location = promise.payload.url;
//       }}
//     >
//       Checkout
//     </Button>
//   </section>
// );

// successfull subscription
// const SuccessDisplay = ({ sessionId }) => {
//   return (
//     <section>
//       <div className="product Box-root">
//         <div className="description Box-root">
//           <h3>Subscription to starter plan successful!</h3>
//         </div>
//       </div>
//       <form action="/create-portal-session" method="POST">
//         <input
//           type="hidden"
//           id="session-id"
//           name="session_id"
//           value={sessionId}
//         />
//         <button id="checkout-and-portal-button" type="submit">
//           Manage your billing information
//         </button>
//       </form>
//     </section>
//   );
// };

// status message
// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// first login after email validation/registration
// choose package manager
const StartPackageManager = ({
  newAllocation,
  onChangeAllocation,
  user,
  freeCodes,
  submitNewCodes,
  continueWithoutCodes,
}) => {
  return (
    <>
      <Grid container justifyContent="center">
        {/* new allocation */}
        <Grid item>
          <TextField
            select
            label="Zugangscodes"
            name="newAllocation"
            id="newAllocation"
            value={newAllocation}
            onChange={onChangeAllocation}
            // helperText="Wähle Deine Anzahl an Zugangscodes"
          >
            <MenuItem value={0} disabled>
              Anzahl Codes auswählen
            </MenuItem>
            <MenuItem
              // value="10"
              value={10}
              disabled={
                user.allocation < 10 ||
                (user.allocation >= 10 && freeCodes >= 10)
                  ? false
                  : true
              }
            >
              10 Stück
              {user.allocation === 10 && (
                <Typography pl={1} sx={{ fontStyle: "italic" }}>
                  aktuelles Paket
                </Typography>
              )}
            </MenuItem>
            <MenuItem
              value={20}
              disabled={
                user.allocation < 20 ||
                (user.allocation >= 20 && freeCodes >= 20)
                  ? false
                  : true
              }
            >
              20 Stück
              {user.allocation === 20 && (
                <Typography pl={1} sx={{ fontStyle: "italic" }}>
                  aktuelles Paket
                </Typography>
              )}
            </MenuItem>
            <MenuItem
              value={30}
              disabled={
                user.allocation < 30 ||
                (user.allocation >= 30 && freeCodes >= 30)
                  ? false
                  : true
              }
            >
              30 Stück
              {user.allocation === 30 && (
                <Typography pl={1} sx={{ fontStyle: "italic" }}>
                  aktuelles Paket
                </Typography>
              )}
            </MenuItem>
            <MenuItem
              value={40}
              disabled={
                user.allocation < 40 ||
                (user.allocation >= 40 && freeCodes >= 40)
                  ? false
                  : true
              }
            >
              40 Stück
              {user.allocation === 40 && (
                <Typography pl={1} sx={{ fontStyle: "italic" }}>
                  aktuelles Paket
                </Typography>
              )}
            </MenuItem>
            <MenuItem
              value={50}
              disabled={
                user.allocation < 50 ||
                (user.allocation >= 50 && freeCodes >= 50)
                  ? false
                  : true
              }
            >
              50 Stück
              {user.allocation === 50 && (
                <Typography pl={1} sx={{ fontStyle: "italic" }}>
                  aktuelles Paket
                </Typography>
              )}
            </MenuItem>
          </TextField>
        </Grid>
        {/* buttons */}
        <Grid item container justifyContent="center">
          <Button type="submit" onClick={submitNewCodes}>
            Paket auswählen
          </Button>
          <Button onClick={continueWithoutCodes}>
            Überspringen (ohne Paket)
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

// normal view
const Dashboard = ({
  messageNewsfeed,
  numberCoaches,
  setOpenShowCoaches,
  freeCodes,
  user,
  setOpenShowPackages,
  setOpenShowCodes,
  oldCode,
  onChangeCode,
  deleteAndReplace,
  updatePackage,
}) => (
  <>
    <Grid
      container
      mt={2}
      justifyContent={{ xs: "space-evenly", md: "space-between" }}
    >
      {/* container for the newsfeed */}
      <Grid item xs={12} md={5}>
        <Newsfeed />
      </Grid>

      {/* container for codes/coaches overview and interaction */}
      <Grid
        item
        xs={12}
        md={7}
        container
        justifyContent={{ xs: "space-evenly" }}
      >
        {/* used codes */}
        <Grid item container xs={4} minWidth={"170px"}>
          <Card sx={{ width: "100%" }}>
            <CardHeader
              sx={{ paddingX: "6px", height: "25%" }}
              title="Genutzte Zugänge"
              titleTypographyProps={{
                fontSize: { xs: "14px", md: "16px" },
                color: "white",
                noWrap: true,
              }}
            />
            <CardContent sx={{ padding: "0", height: "40%" }}>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: "bolder",
                  // transform: "translateY(20%)", // half of height
                }}
              >
                {numberCoaches}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", height: "35%" }}>
              <Button
                variant="outlined"
                sx={{ fontSize: "12px" }}
                onClick={() => setOpenShowCoaches(true)}
              >
                Trainer zeigen
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* free codes */}
        <Grid item container xs={4} minWidth={"170px"}>
          <Card sx={{ width: "100%" }}>
            <CardHeader
              sx={{ paddingX: "6px", height: "25%" }}
              title="Freie Zugänge"
              titleTypographyProps={{
                fontSize: { xs: "14px", md: "16px" },
                color: "white",
                noWrap: true,
              }}
            />
            <CardContent sx={{ padding: "0", height: "40%" }}>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: "bolder",
                  color: freeCodes > 0 ? "var(--lightgreen)" : "red",
                  // transform: "translateY(20%)", // half of height
                }}
              >
                {freeCodes}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", height: "35%" }}>
              <Button
                // variant="outlined"
                sx={{
                  fontSize: "12px",
                  color: freeCodes > 0 ? "initial" : "red",
                }}
                onClick={() => setOpenShowCodes(true)}
              >
                Codes anzeigen
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* recent packages */}
        <Grid item container xs={4} minWidth={"170px"}>
          <Card sx={{ width: "100%" }}>
            <CardHeader
              sx={{ paddingX: "6px", height: "25%" }}
              title="Aktuelles Paket"
              titleTypographyProps={{
                fontSize: { xs: "14px", md: "16px" },
                color: "white",
                noWrap: true,
              }}
            />
            <CardContent sx={{ padding: "0", height: "40%" }}>
              <Typography
                sx={{
                  fontSize: "50px",
                  fontWeight: "bolder",
                  // transform: "translateY(20%)", // half of height
                }}
              >
                {user.allocation}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", height: "35%" }}>
              {/* <Button onClick={() => setOpenShowPackages(true)}>
                Pakete anzeigen
              </Button> */}
              <Button
                // variant="outlined"
                sx={{ fontSize: "12px" }}
                onClick={updatePackage}
              >
                Abo anpassen
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>

    {/* container for inviting others and disjoint coach and get new code */}
    <Grid
      container
      justifyContent={{ xs: "space-evenly", md: "space-between" }}
    >
      {/* container inviting */}
      <Grid item container xs={12} md={5} minWidth={"170px"}>
        <Card
          sx={{
            width: "100%",
            minHeight: "100px",
          }}
        >
          <Typography variant="subtitle2">MatchPlaner empfehlen</Typography>
          <Typography variant="body2">
            Laden Sie weitere Vereine ein und erhalten Sie einen Monat Premium
            gratis.
          </Typography>
          {/* <Typography variant="body2">
            (sobald sich der Vereinsvertreter angemeldet hat - Kontrollieren,
            dass jeder Verein nur einmal angemeldet ist (unique Vereinsname?!)).
          </Typography> */}
        </Card>
      </Grid>

      {/* container disjoint coach */}
      <Grid item container xs={12} md={7} minWidth="170px">
        <Grid item container direction="column">
          <Card>
            <Grid item>
              <Typography variant="subtitle2">
                Trainer abmelden und neuen Zugangscode beantragen
              </Typography>
            </Grid>
            <Grid item mt={1}>
              <TextField
                // TODO: hier error einbauen
                // sowohl wenn "" als auch wenn falsch
                // inkl. passendem helperText
                id="oldCode"
                name="oldCode"
                label="Alter Zugangscode"
                placeholder="Alter Zugangscode"
                value={oldCode}
                onChange={onChangeCode}
              />
            </Grid>
            <Grid item m={1}>
              <Button
                // variant="contained"
                sx={{ fontSize: "12px" }}
                onClick={() => deleteAndReplace()}
              >
                Löschen und ersetzen
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  </>
);

function DashboardManager() {
  // set custom title (for google analytics)
  useEffect(() => {
    document.title = "MatchPlaner | Manager";
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // scroll to top when visited
  // and redirect if token is expired
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { user, status } = useSelector((state) => state.user);

  // states of auth in authSlice
  // const {
  //   isLoading,
  //   isError,
  //   isSuccess,
  //   message,
  //   isSuccessPassword,
  //   clientSecretState,
  //   clientSecretId,
  // } = useSelector((state) => state.auth);

  // // stats of manager
  // const {
  //   messageNewsfeed,
  //   isErrorMessage = isError,
  //   messageMessage = message,
  //   isSuccessMessage = isSuccess,
  //   isLoadingMessage = isLoading,
  // } = useSelector((state) => state.manager);

  // // get messages/news
  // useEffect(() => {
  //   if (isErrorMessage) {
  //     toast.error(messageMessage);
  //   }
  //   dispatch(getMessages());
  //   // reset when unmount
  //   return () => {
  //     dispatch(resetMessage());
  //   };
  //   // }, [isSuccessMessage, messageMessage, isErrorMessage]);
  // }, []);

  // control payment states
  // let [messagePayment, setMessagePayment] = useState("");
  // let [success, setSuccess] = useState(false);
  // let [sessionId, setSessionId] = useState("");
  // let [showPaymentFlow, setPaymentFlow] = useState(false);

  // useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);

  //   if (query.get("success")) {
  //     setSuccess(true);
  //     setSessionId(query.get("session_id"));
  //   }

  //   if (query.get("canceled")) {
  //     setSuccess(false);
  //     setMessagePayment(
  //       "Order canceled -- continue to shop around and checkout when you're ready."
  //     );
  //   }
  // }, [sessionId]);

  // set properties of coaches/codes
  const codes = [];
  const coaches = [];
  // add unused codes to codes-array and used codes into coaches-array (as object)
  user.codes.map((obj, index) =>
    obj.coach === "" ? codes.push(obj.code) : coaches.push(obj)
  );
  let numberCoaches = user.allocation - codes.length;
  if (numberCoaches < 0) {
    numberCoaches = 0;
  }
  const freeCodes = codes.length;

  // handle dialogs
  // dialog: show coaches
  const [openShowCoaches, setOpenShowCoaches] = useState(false);
  // dialog: show codes
  const [openShowCodes, setOpenShowCodes] = useState(false);
  // dialog: show packages
  const [openShowPackages, setOpenShowPackages] = useState(false);
  // dialog: payment codes
  // const [paymentDialog, setPaymentDialog] = useState(false);

  // handle new allocation/package
  const [newAllocation, setNewAllocation] = useState(0);

  // submit new allocation
  const changePackage = async (e) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    e.preventDefault();

    //   // handle update Data (has nothing to do with the real payment)
    //   // close dialog
    //   setOpenShowPackages(false);
    //   const userData = {
    //     allocation: newAllocation,
    //   };
    //   dispatch(update(userData));
    //   setNewAllocation("");
    // }
  };

  // Let App change e.g. while typing in input field
  const onChangeCode = (e) => {
    setOldCode(e.target.value);
  };

  // handle delete and replace
  const [deleteReplaceDialog, setDeleteReplaceDialog] = useState(false);
  const [oldCode, setOldCode] = useState("");
  const [oldCoach, setOldCoach] = useState("");

  // delete coach and repace code
  const deleteAndReplace = () => {
    const coach = user.codes.find((obj) => {
      return obj.code === oldCode;
    });
    if (!oldCode) {
      toast.error("Bitte füllen Sie das Feld aus");
    } else if (!coach || !coach.coach) {
      toast.error("Code nicht vorhanden");
    } else {
      setOldCoach(coach.coach);
      setDeleteReplaceDialog(true);
    }
  };
  const submitDeleteReplaceDialog = () => {
    // close dialog
    setDeleteReplaceDialog(false);
    // update backend
    const userData = { oldCode };
    // dispatch(update(userData));
    // reset variables
    setOldCode("");
    setOldCoach("");
    // show success
    toast.success("Neuer Code unter Freie Zugänge verfügbar");
  };

  // // reload after data update
  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }
  //   // Reset
  //   // dispatch(reset());
  // }, [
  //   isError,
  //   isSuccess,
  //   isSuccessPassword,
  //   message,
  //   messageNewsfeed,
  //   dispatch,
  // ]);

  // Let App change e.g. while typing in input field
  const onChangeAllocation = (e) => {
    setNewAllocation(e.target.value);
  };

  // redirect to stripe and set localstorage to update allocation
  const submitNewCodes = async () => {
    if (newAllocation === 0) {
      toast.error("Bitte geben Sie eine Anzahl an Codes an");
    } else {
      // set storage allocation
      localStorage.setItem("newAllocation", newAllocation);
      // create session for subscription
      const priceId = "price_1LeayzInQhoZcIpG1S1y4m80";
      const userData = {
        priceId,
        allocation: newAllocation,
      };
      // const promise = await dispatch(createSubscriptionSession({ userData }));
      // Redirect to stripe payment site
      // window.location = promise.payload.url;
    }
  };

  // allow to continue without choosing codes
  const continueWithoutCodes = async () => {
    // set firstVisit to false
    const userData = {
      firstVisit: false,
    };
    // await dispatch(update(userData));
    // redirect
    // window.location = "/manager";
  };

  // redirect to stripe to manage the abo
  const updatePackage = () => {
    // const emailUser = user.email;
    // window.location = `https://billing.stripe.com/p/login/test_6oE17L2Li3Lx8fKeUU?prefilled_email=${emailUser}`;
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

      {/* {user.firstVisit ? ( */}
      {false ? (
        <StartPackageManager
          newAllocation={newAllocation}
          onChangeAllocation={onChangeAllocation}
          user={user}
          freeCodes={freeCodes}
          submitNewCodes={submitNewCodes}
          continueWithoutCodes={continueWithoutCodes}
        />
      ) : (
        <Dashboard
          // messageNewsfeed={messageNewsfeed}
          messageNewsfeed={[]}
          numberCoaches={numberCoaches}
          setOpenShowCoaches={setOpenShowCoaches}
          freeCodes={freeCodes}
          user={user}
          setOpenShowPackages={setOpenShowPackages}
          setOpenShowCodes={setOpenShowCodes}
          oldCode={oldCode}
          onChangeCode={onChangeCode}
          deleteAndReplace={deleteAndReplace}
          updatePackage={updatePackage}
        />
      )}

      {/* Dialogs */}
      {/* Dialog: show coaches */}
      <Dialog open={openShowCoaches} onClose={() => setOpenShowCoaches(false)}>
        <DialogTitle sx={{ color: "black" }}>Registrierte Trainer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Folgende Trainer haben sich bereits mit einem Zugangscode
            angemeldet:
          </DialogContentText>
          {coaches.length > 0 ? (
            <>
              {coaches.map((obj, index) => (
                <Typography key={index}>
                  {obj.coach} - {obj.code}
                </Typography>
              ))}
            </>
          ) : (
            <p>Keine Trainer registriert</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenShowCoaches(false)}>Schließen</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog: show codes */}
      <Dialog open={openShowCodes} onClose={() => setOpenShowCodes(false)}>
        <DialogTitle sx={{ color: "black" }}>Freie Zugangscodes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ihnen stehen noch folgende Codes zu Verfügung:
          </DialogContentText>
          {freeCodes > 0 ? (
            <>
              {codes.map((c, index) => (
                <Typography key={index}>{c}</Typography>
              ))}
            </>
          ) : (
            <>
              <p>Keine freien Codes vorhanden.</p>
              <p>Sie können sich unter "Pakete anzeigen" neue Codes holen.</p>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenShowCodes(false)}>Schließen</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog: show packages */}
      <Dialog
        open={openShowPackages}
        onClose={() => setOpenShowPackages(false)}
      >
        <DialogTitle sx={{ color: "black" }}>
          Mögliche Vereinspakete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Es gibt folgende Pakete für Sie als Vereinsvertreter:
          </DialogContentText>
          <TextField
            select
            label="Zugangscodes"
            name="newAllocation"
            id="newAllocation"
            value={newAllocation}
            onChange={onChangeAllocation}
            // helperText="Wähle Deine Anzahl an Zugangscodes"
          >
            <MenuItem value={0} disabled>
              Anzahl Codes auswählen
            </MenuItem>
            <MenuItem
              // value="10"
              value={10}
              disabled={
                user.allocation < 10 ||
                (user.allocation >= 10 && freeCodes >= 10)
                  ? false
                  : true
              }
            >
              10 Stück
              {user.allocation === 10 && (
                <Typography pl={1} sx={{ fontStyle: "italic" }}>
                  aktuelles Paket
                </Typography>
              )}
            </MenuItem>
            <MenuItem
              value={20}
              disabled={
                user.allocation < 20 ||
                (user.allocation >= 20 && freeCodes >= 20)
                  ? false
                  : true
              }
            >
              20 Stück
              {user.allocation === 20 && (
                <Typography pl={1} sx={{ fontStyle: "italic" }}>
                  aktuelles Paket
                </Typography>
              )}
            </MenuItem>
            <MenuItem
              value={30}
              disabled={
                user.allocation < 30 ||
                (user.allocation >= 30 && freeCodes >= 30)
                  ? false
                  : true
              }
            >
              30 Stück
              {user.allocation === 30 && (
                <Typography pl={1} sx={{ fontStyle: "italic" }}>
                  aktuelles Paket
                </Typography>
              )}
            </MenuItem>
            <MenuItem
              value={40}
              disabled={
                user.allocation < 40 ||
                (user.allocation >= 40 && freeCodes >= 40)
                  ? false
                  : true
              }
            >
              40 Stück
              {user.allocation === 40 && (
                <Typography pl={1} sx={{ fontStyle: "italic" }}>
                  aktuelles Paket
                </Typography>
              )}
            </MenuItem>
            <MenuItem
              value={50}
              disabled={
                user.allocation < 50 ||
                (user.allocation >= 50 && freeCodes >= 50)
                  ? false
                  : true
              }
            >
              50 Stück
              {user.allocation === 50 && (
                <Typography pl={1} sx={{ fontStyle: "italic" }}>
                  aktuelles Paket
                </Typography>
              )}
            </MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            onClick={
              submitNewCodes

              // () => {
              //   setOpenShowPackages(false);
              //   setPaymentDialog(true);
              // }

              // () => {

              // if (newAllocation !== 0) {
              //   const items = { codes: newAllocation };

              // one-time-payment
              //   // dispatch(createPayment(items));

              //   navigate("/manager/payment");
              // } else {
              //   toast.error("Bitte Anzahl Codes auswählen");
              // }
              // }
            }
          >
            Paket auswählen
          </Button>
          <Button onClick={() => setOpenShowPackages(false)}>Schließen</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog: payment */}
      {/* <Dialog open={paymentDialog} onClose={() => setPaymentDialog(false)}>
        <DialogTitle sx={{ color: "black" }}>
          Codes kostenpflichtig bestätigen
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form action="/create-checkout-session" method="POST">
              {/* Add a hidden field with the lookup_key of your Price 
              <input
                type="hidden"
                name="lookup_key"
                value="{{PRICE_LOOKUP_KEY}}"
              />
              Anzahl Codes: <input type="text" disabled value={newAllocation} />
              Kosten: newPrice / Period
              {/* {newPrice} {newPricePeriod} 
              <button id="checkout-and-portal-button" type="submit">
                Checkout
              </button>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button>Abbrechen</Button>
          <Button>Checkout</Button> 
        </DialogActions>
      </Dialog> */}

      {/* Dialog: delete coach and replace code */}
      <Dialog
        open={deleteReplaceDialog}
        onClose={() => setDeleteReplaceDialog(false)}
      >
        <DialogTitle>Trainer löschen und Code ersetzen</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Wollen Sie wirklich den folgenden Trainer (inklusive Testspielen
            etc) endgültig löschen und einen neuen Code anfordern?
          </DialogContentText>
          <Typography>
            {oldCode}: {oldCoach}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => submitDeleteReplaceDialog()}>
            Löschen und Ersetzen
          </Button>
          <Button onClick={() => setDeleteReplaceDialog(false)}>
            Schließen
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DashboardManager;
