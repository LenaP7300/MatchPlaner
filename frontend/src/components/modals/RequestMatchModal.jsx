import {
  DialogContent,
  DialogTitle,
  Dialog,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMatchLoading,
  updateMatchSuccess,
  updateMatchError,
} from "../../features/matchplaner/matchplanerActions";
import { updateMatch } from "../../features/matchplaner/matchplanerAPI";
import { RequestChangeModal } from "./RequestChangeModal";

export function RequestMatchModal(props) {
  const dispatch = useDispatch();
  const { matchesFixed } = useSelector((state) => state.matchplaner);
  const { user, token } = useSelector((state) => state.user);

  let matchDestination;

  // submit ask for match
  const submitRequest = async (e) => {
    // return true, if there is one match with the same date, else false
    let requestMatchSameDay = matchesFixed.some((match) => {
      return (
        moment(new Date(match.date)).format("YYYY-MM-DD") ===
        moment(new Date(props.match.date)).format("YYYY-MM-DD")
      );
    });

    // close warning that there is already a match at that day, when user submits with info of this warning
    if (e.target.id === "submitAskSameDay") {
      requestMatchSameDay = false;

      //TODO: checken ob das notwendig ist
      // setzt das warn-div wieder auf hidden und zeigt den anfragen button wieder an
      let requestButton = document.getElementById("requestButton");
      requestButton.classList.remove("hidden");
      let warning = document.getElementById("warning-same-day");
      warning.classList.remove("visible");
      props.handleClose();
    }

    if (requestMatchSameDay) {
      //disable regular submit button
      let requestButton = document.getElementById("requestButton");
      requestButton.classList.add("hidden");
      //show div with warning and button
      let warning = document.getElementById("warning-same-day");
      warning.classList.add("visible");
    } else {
      const userData = [user, props.match, "ask"];
      dispatch(updateMatchLoading());
      try {
        const response = await updateMatch(userData, token);
        console.log(props.match);
        console.log(response);
        dispatch(updateMatchSuccess());
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        updateMatchError(message);
      }
    }
  };

  const [requestChangesOpen, setRequestChangesOpen] = useState(false);

  const handleRequestChangeClose = () => {
    setRequestChangesOpen(false);
  };

  const handleRequestChangeOpen = () => {
    setRequestChangesOpen(true);
  };

  if (props.match.destination === "Heim") {
    matchDestination =
      props.match.destination + " (" + props.match.opponent + ")";
  } else {
    matchDestination = props.match.destination + " (" + user.club + ")";
  }

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        fullwidth
        maxWidth="sm"
      >
        <DialogContent
          sx={{
            backgroundColor: "#161616",
            border: "1px solid #D2FF00",
            borderRadius: "5px",
          }}
        >
          <DialogTitle sx={{ paddingTop: "2rem" }}>
            Match vereinbaren
          </DialogTitle>
          <Grid container justifyContent="center">
            <Grid container item xs={6} gap={2} justifyContent="center">
              <TextField
                variant="outlined"
                disabled
                label="Gegner"
                sx={{ marginTop: "1rem" }}
                value={props.match.opponent}
              ></TextField>
              <TextField
                variant="outlined"
                disabled
                label="Alter"
                value={props.match.age.label}
              ></TextField>
              <TextField
                variant="outlined"
                disabled
                label="Datum"
                value={moment(props.match.date).format("DD.MM.YYYY")}
              ></TextField>
              <TextField
                variant="outlined"
                disabled
                label="Uhrzeit"
                value={props.match.time}
              ></TextField>
              <TextField
                variant="outlined"
                disabled
                label="Spielstätte"
                value={matchDestination}
              ></TextField>
              <TextField
                variant="outlined"
                disabled
                label="Spielmodus"
                value={props.match.modus}
              ></TextField>
              <TextField
                variant="outlined"
                disabled
                label="Platz"
                value={props.match.typeOfField}
              ></TextField>
              <Button
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  backgroundColor: "white",
                }}
                onClick={handleRequestChangeOpen}
              >
                Anpassen
              </Button>
              <Button
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
                id="requestButton"
                onClick={submitRequest}
              >
                Match anfragen
              </Button>
              <div id="warning-same-day">
                <p style={{ marginBottom: "0.5rem", color: "#dc3545" }}>
                  Du hast bereits ein Match für diesen Tag vereinbart.
                  <br />
                  Willst du dennoch fortfahren?
                </p>
                <Button
                  style={{
                    width: "100%",
                    marginBottom: "1rem",
                  }}
                  id="submitAskSameDay"
                  onClick={submitRequest}
                >
                  Trotzdem anfragen
                </Button>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <RequestChangeModal
        match={props.match}
        open={requestChangesOpen}
        handleUpdate={props.handleUpdate}
        handleClose={handleRequestChangeClose}
        handleSubmit={submitRequest}
      />
    </>
  );
}
