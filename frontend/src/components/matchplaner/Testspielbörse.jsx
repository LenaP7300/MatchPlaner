import { Filters } from "./Filters";
import { MatchCard } from "./MatchCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { MatchInfoModal } from "../modals/MatchInfoModal";
import { RequestMatchModal } from "../modals/RequestMatchModal";
import moment from "moment";
import { Grid } from "@mui/material";

export function Testspielbörse(props) {
  // set custom title (for google analytics)
  // useEffect(() => {
  //   document.title = "Matchplaner - Börse";
  // }, []);
  const { matchesAvailable } = useSelector((state) => state.matchplaner);
  const { user } = useSelector((state) => state.user);
  let matches = matchesAvailable;

  // filter state declarations
  const [ageFilter, setAgeFilter] = useState({
    name: "age",
    value: user.age.value,
    applied: true,
  });

  const [dateFilter, setDateFilter] = useState({
    name: "data",
    value: "",
    applied: false,
  });

  const [destFilter, setDestFilter] = useState({
    name: "destination",
    value: "",
    applied: false,
  });

  const [tofFilter, setTofFilter] = useState({
    name: "typeOfField",
    value: "",
    applied: false,
  });

  const [modFilter, setModFilter] = useState({
    name: "modus",
    value: "",
    applied: false,
  });

  const filterProps = {
    ageFilter,
    setAgeFilter,
    dateFilter,
    setDateFilter,
    destFilter,
    setDestFilter,
    tofFilter,
    setTofFilter,
    modFilter,
    setModFilter,
  };

  const filters = [ageFilter, dateFilter, destFilter, tofFilter, modFilter];

  for (var filter in filters) {
    if (filters[filter].applied && matches) {
      let prop = filters[filter].name;
      if (prop === "date") {
        matches = matches.filter(
          (match) =>
            moment(match.date).format("YYYY-MM-DD") === filters[filter].value
        );
      } else if (prop === "destination") {
        matches = matches.filter(
          (match) => match[prop] !== filters[filter].value
        );
      } else if (prop === "age") {
        matches = matches.filter(
          (match) => match[prop].value === filters[filter].value
        );
      }
      // else if (prop === "level") {

      // }
      else {
        matches = matches.filter(
          (match) => match[prop] === filters[filter].value
        );
      }
    }
  }

  const [matchId, setMatchId] = useState("");
  const [matchDate, setMatchDate] = useState("");
  const [matchTime, setMatchTime] = useState("");
  const [matchModus, setMatchModus] = useState("");
  const [matchDestination, setMatchDestination] = useState("");
  const [matchField, setMatchField] = useState("");
  const [matchNote, setMatchNote] = useState("");
  const [matchOpponent, setMatchOpponent] = useState("");
  const [matchOpponentAge, setMatchOpponentAge] = useState({});
  const [matchOpponentLeague, setMatchOpponentLeague] = useState({});
  const [matchOpponentCoach, setMatchOpponentCoach] = useState("");

  // const handleAgeChange =

  const matchInfo = {
    _id: matchId,
    date: matchDate,
    time: matchTime,
    modus: matchModus,
    destination: matchDestination,
    typeOfField: matchField,
    note: matchNote,
    opponent: matchOpponent,
    age: matchOpponentAge,
    league: matchOpponentLeague,
    coach: matchOpponentCoach,
  };

  const [infoOpen, setInfoOpen] = useState(false);

  const handleInfoOpen = (e, match) => {
    setInfoOpen(true);
    setMatchId(match._id);
    setMatchDate(match.date);
    setMatchTime(match.time);
    setMatchModus(match.modus);
    setMatchField(match.typeOfField);
    setMatchDestination(match.destination);
    setMatchNote(match.note);
    setMatchOpponent(match.club);
    setMatchOpponentAge(match.age);
    setMatchOpponentLeague(match.league);
    setMatchOpponentCoach(match.coachClub);
  };

  const handleInfoClose = () => {
    setInfoOpen(false);
  };

  const [requestOpen, setRequestOpen] = useState(false);

  const handleRequestOpen = (e, match) => {
    setRequestOpen(true);
    setMatchId(match._id);
    setMatchDate(match.date);
    setMatchTime(match.time);
    setMatchModus(match.modus);
    setMatchField(match.typeOfField);
    setMatchDestination(match.destination);
    setMatchOpponent(match.club);
    setMatchOpponentAge(match.age);
  };

  const handleRequestClose = () => {
    setRequestOpen(false);
  };

  const handleUpdate = (name, value) => {
    switch (name) {
      case "date": {
        setMatchDate(value);
        break;
      }
      case "time": {
        setMatchTime(value);
        break;
      }
      case "modus": {
        setMatchModus(value);
        break;
      }
      case "field": {
        setMatchField(value);
        break;
      }
      case "destination": {
        setMatchDestination(value);
        break;
      }
      default:
        break;
    }
  };

  return (
    <>
      <Grid container gap={1}>
        <Grid
          item
          container
          lg={2.5}
          md={4}
          sm={12}
          className="container-bg"
          sx={{ justifyContent: "center", alignContent: "flex-start" }}
        >
          <Filters filters={filters} filterProps={filterProps} />
        </Grid>
        <Grid
          item
          container
          lg={8.5}
          md={7}
          sm={12}
          className="container-bg"
          gap={2}
          sx={{ height: "max-content", padding: "1rem" }}
        >
          {matchesAvailable
            ? matches.map((match, index) => (
                <MatchCard
                  key={index}
                  index={index}
                  match={match}
                  onClick={(e) => handleInfoOpen(e, match)}
                  handleRequest={(e) => handleRequestOpen(e, match)}
                />
              ))
            : "Es sind derzeit keine Spiele verfügbar... "}
        </Grid>
      </Grid>
      <MatchInfoModal
        open={infoOpen}
        match={matchInfo}
        handleClose={handleInfoClose}
        hideRequestBtn={false}
      />
      <RequestMatchModal
        open={requestOpen}
        match={matchInfo}
        handleClose={handleRequestClose}
        handleUpdate={handleUpdate}
      />
    </>
  );
}
