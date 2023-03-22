import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  MenuItem,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Grid,
} from "@mui/material";
import {
  createMatchLoading,
  createMatchError,
  createMatchSuccess,
} from "../../features/matchplaner/matchplanerActions";
import { createMatch } from "../../features/matchplaner/matchplanerAPI";
import {
  locationSelection,
  fieldSelection,
  modusSelection,
} from "../../utils/filter";

export function AddMatchModal(props) {
  // modal specifications
  const dispatch = useDispatch();

  const [matchDate, setMatchDate] = useState("");
  const [matchTime, setMatchTime] = useState("");
  const [matchDestination, setMatchDestination] = useState("");
  const [matchField, setMatchField] = useState("");
  const [matchModus, setMatchModus] = useState("");
  const [matchNote, setMatchNote] = useState("");

  const handleMatchDateChange = (e) => {
    setMatchDate(e.target.value);
    let dateRequired = document.getElementById("dateRequired");
    if (dateRequired.classList.contains("visible")) {
      dateRequired.classList.remove("visible");
    }
  };
  const handleMatchTime = (e) => {
    setMatchTime(e.target.value);
    let timeRequired = document.getElementById("timeRequired");
    if (timeRequired.classList.contains("visible")) {
      timeRequired.classList.remove("visible");
    }
  };
  const handleMatchDestinationChange = (e) =>
    setMatchDestination(e.target.value);
  const handleMatchFieldChange = (e) => setMatchField(e.target.value);
  const handleMatchModusChange = (e) => setMatchModus(e.target.value);
  const handleMatchNoteChange = (e) => setMatchNote(e.target.value);

  const resetForm = () => {
    setMatchDate("");
    setMatchTime("");
    setMatchDestination("");
    setMatchField("");
    setMatchModus("");
    setMatchNote("");
    let teamInfoRequired = document.getElementById("teamInfoRequired");
    if (teamInfoRequired.classList.contains("visible")) {
      teamInfoRequired.classList.remove("visible");
    }
    let dateRequired = document.getElementById("dateRequired");
    if (dateRequired.classList.contains("visible")) {
      dateRequired.classList.remove("visible");
    }
    let timeRequired = document.getElementById("timeRequired");
    if (timeRequired.classList.contains("visible")) {
      timeRequired.classList.remove("visible");
    }
  };

  // submit match proposal

  const onSubmit = async (e) => {
    e.preventDefault();

    // // return true, if there is one match with the same date, else false
    // matchAtSameDay = matchesFixed.some((match) => {
    //   // return moment(new Date(match.date)).format("YYYY-MM-DD") === date;
    //   return moment(new Date(match.date)).format("YYYY-MM-DD") === newMatchDate;
    // });

    // // if the user confirms the match at the same day - create match
    // if (e.target.id === "submitSameDayRequest") {
    //   matchAtSameDay = false;
    // }

    if (!matchDate) {
      let dateRequired = document.getElementById("dateRequired");
      dateRequired.classList.add("visible");
    } else if (!matchTime) {
      let timeRequired = document.getElementById("timeRequired");
      timeRequired.classList.add("visible");
    } else if (
      !props.user.age ||
      !props.user.league ||
      !props.user.association
    ) {
      let teamInfoRequired = document.getElementById("teamInfoRequired");
      teamInfoRequired.classList.add("visible");
    } else {
      props.handleClose();

      const userData = {
        emailAsId: props.user.email,
        opponentEmailAsId: "",
        newMatchDate: matchDate,
        newMatchTime: matchTime,
        newMatchDestination: matchDestination,
        newMatchTypeOfField: matchField,
        newMatchModus: matchModus,
        newMatchNote: matchNote,
        club: props.user.club,
        applicants: [],
        opponent: "",
        coachClub: props.user.name,
        coachOpponent: "",
        age: props.user.age,
        league: props.user.league,
        association: props.user.association,
        matched: false,
      };

      dispatch(createMatchLoading());
      try {
        const response = await createMatch(userData, props.userToken);
        console.log(response);
        // dispatch(createMatchSuccess(response.data));
        dispatch(createMatchSuccess());
        resetForm();
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        createMatchError(message);
      }
    }
    // else if (matchAtSameDay) {
    // if there is a match at the same day, show warnings (in the dialog)
    // document.getElementById("submitRequest").style.display = "none";
    // document.getElementById("warningSameDayMatch").style.display =
    //   "inline-block";
    // document.getElementById("submitSameDayRequest").style.display =
    //   "inline-block";
    // } else {
    // close dialog
  };

  const handleClose = () => {
    props.handleClose();
    resetForm();
  };

  return (
    <>
      <Dialog open={props.open} onClose={handleClose} fullwidth maxWidth="sm">
        <DialogContent
          sx={{
            backgroundColor: "#161616",
            border: "1px solid #D2FF00",
            borderRadius: "5px",
          }}
        >
          <DialogTitle sx={{ paddingTop: "2rem" }}>
            Neue Anfrage erstellen
          </DialogTitle>
          <Grid container justifyContent="center">
            <Grid container item xs={6} gap={2} justifyContent="center">
              <p id="teamInfoRequired">
                Bitte füllen Sie zuerst Ihr Profil aus!
              </p>
              <TextField
                label="Datum"
                type="date"
                name="date"
                variant="outlined"
                value={matchDate}
                onChange={handleMatchDateChange}
                sx={{ marginTop: "1rem" }}
              />
              <p id="dateRequired">Datum ist ein Pflichtfeld!</p>
              <TextField
                label="Uhrzeit"
                type="time"
                name="time"
                variant="outlined"
                value={matchTime}
                onChange={handleMatchTime}
              />
              <p id="timeRequired">Zeit ist ein Pflichtfeld!</p>
              <TextField
                select
                label="Spielort"
                name="destination"
                variant="outlined"
                value={matchDestination}
                onChange={handleMatchDestinationChange}
              >
                <MenuItem key={0} value={""}>
                  Wählen Sie eine Option
                </MenuItem>
                {locationSelection.map((option, idx) => (
                  <MenuItem key={idx + 1} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                name="field"
                label="Rasenart"
                variant="outlined"
                value={matchField}
                onChange={handleMatchFieldChange}
              >
                <MenuItem key={0} value={""}>
                  Wählen Sie eine Option
                </MenuItem>
                {fieldSelection.map((option, idx) => (
                  <MenuItem key={idx + 1} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                name="modus"
                label="Spielmodus"
                variant="outlined"
                value={matchModus}
                onChange={handleMatchModusChange}
              >
                <MenuItem key={0} value={""}>
                  Wählen Sie eine Option
                </MenuItem>
                {modusSelection.map((option, idx) => (
                  <MenuItem key={idx + 1} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                multiline
                variant="outlined"
                rows={6}
                label="Weitere Informationen"
                value={matchNote}
                onChange={handleMatchNoteChange}
              ></TextField>
              <Button
                variant="contained"
                // className="submit-button"
                onClick={onSubmit}
              >
                Anfrage erstellen
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
