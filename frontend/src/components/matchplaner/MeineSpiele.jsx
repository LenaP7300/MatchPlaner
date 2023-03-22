import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { MatchCard } from "./MatchCard";
import { MatchInfoModal } from "../modals/MatchInfoModal";
import { MeineSpieleFilter } from "./MeineSpieleFilter";
import { ChangeMatchModal } from "../modals/ChangeMatchModal";

export function MeineSpiele(props) {
  // set custom title (for google analytics)
  // useEffect(() => {
  //   document.title = "Matchplaner - Eigener Bereich";
  // }, []);

  const { matchesCreated, matchesApplied, matchesFixed } = useSelector(
    (state) => state.matchplaner
  );

  const { user, token } = useSelector((state) => state.user);

  const [gamesCreated, setGamesCreated] = useState(true);
  // const [gamesRequested, setGamesRequested] = useState(false);
  const [gamesRequesting, setGamesRequesting] = useState(false);
  const [gamesFixed, setGamesFixed] = useState(false);

  //TODO: filter handling schöner machen -> viel zu viel unnötiger Code hier

  const handleGamesCreatedChange = () => {
    // let btnGamesRequested = document.getElementById("btnGamesRequested");
    let btnGamesCreated = document.getElementById("btnGamesCreated");
    let btnGamesFixed = document.getElementById("btnGamesFixed");
    let btnGamesRequesting = document.getElementById("btnGamesRequesting");
    if (gamesCreated) {
      setGamesCreated(false);
      btnGamesCreated.style.backgroundColor = "rgb(235,235,228)";
    } else {
      setGamesCreated(true);
      setGamesFixed(false);
      // setGamesRequested(false);
      setGamesRequesting(false);
      btnGamesCreated.style.backgroundColor = "#d2ff00";
      btnGamesFixed.style.backgroundColor = "rgb(235,235,228)";
      // btnGamesRequested.style.backgroundColor = "rgb(235,235,228)";
      btnGamesRequesting.style.backgroundColor = "rgb(235,235,228)";
    }
  };

  // const handleGamesRequestedChange = () => {
  //   let btnGamesRequested = document.getElementById("btnGamesRequested");
  //   let btnGamesCreated = document.getElementById("btnGamesCreated");
  //   let btnGamesFixed = document.getElementById("btnGamesFixed");
  //   let btnGamesRequesting = document.getElementById("btnGamesRequesting");
  //   if (gamesRequested) {
  //     setGamesRequested(false);
  //     btnGamesRequested.style.backgroundColor = "rgb(235,235,228)";
  //   } else {
  //     setGamesRequested(true);
  //     setGamesFixed(false);
  //     setGamesCreated(false);
  //     setGamesRequesting(false);
  //     btnGamesRequested.style.backgroundColor = "#d2ff00";
  //     btnGamesFixed.style.backgroundColor = "rgb(235,235,228)";
  //     btnGamesCreated.style.backgroundColor = "rgb(235,235,228)";
  //     btnGamesRequesting.style.backgroundColor = "rgb(235,235,228)";
  //   }
  // };

  const handleGamesFixedChange = () => {
    // let btnGamesRequested = document.getElementById("btnGamesRequested");
    let btnGamesCreated = document.getElementById("btnGamesCreated");
    let btnGamesFixed = document.getElementById("btnGamesFixed");
    let btnGamesRequesting = document.getElementById("btnGamesRequesting");
    if (gamesFixed) {
      setGamesFixed(false);
      btnGamesFixed.style.backgroundColor = "rgb(235,235,228)";
    } else {
      setGamesFixed(true);
      // setGamesRequested(false);
      setGamesCreated(false);
      setGamesRequesting(false);
      btnGamesFixed.style.backgroundColor = "#d2ff00";
      // btnGamesRequested.style.backgroundColor = "rgb(235,235,228)";
      btnGamesCreated.style.backgroundColor = "rgb(235,235,228)";
      btnGamesRequesting.style.backgroundColor = "rgb(235,235,228)";
    }
  };

  const handleGamesRequestingChange = () => {
    // let btnGamesRequested = document.getElementById("btnGamesRequested");
    let btnGamesCreated = document.getElementById("btnGamesCreated");
    let btnGamesFixed = document.getElementById("btnGamesFixed");
    let btnGamesRequesting = document.getElementById("btnGamesRequesting");
    if (gamesRequesting) {
      setGamesRequesting(false);
      btnGamesRequesting.style.backgroundColor = "rgb(235,235,228)";
    } else {
      setGamesRequesting(true);
      setGamesFixed(false);
      // setGamesRequested(false);
      setGamesCreated(false);
      btnGamesRequesting.style.backgroundColor = "#d2ff00";
      // btnGamesRequested.style.backgroundColor = "rgb(235,235,228)";
      btnGamesCreated.style.backgroundColor = "rgb(235,235,228)";
      btnGamesFixed.style.backgroundColor = "rgb(235,235,228)";
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      handleCloseMatchInfo();
    }
  };

  const handleClick = (event) => {
    const matchInfo = document.getElementById("match-info-modal");
    if (event.target.contains(matchInfo)) {
      handleCloseMatchInfo();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const { hideRequestButton, setHideRequestButton } = useState(false);

  const [matchId, setMatchId] = useState("");
  const [matchDate, setMatchDate] = useState("");
  const [matchTime, setMatchTime] = useState("");
  const [matchModus, setMatchModus] = useState("");
  const [matchDestination, setMatchDestination] = useState("");
  const [matchField, setMatchField] = useState("");
  const [matchNote, setMatchNote] = useState("");
  const [matchOpponent, setMatchOpponent] = useState("");
  const [matchOpponentAge, setMatchOpponentAge] = useState("");
  const [matchOpponentLeague, setMatchOpponentLeague] = useState("");
  const [matchOpponentCoach, setMatchOpponentCoach] = useState("");
  const [matchApplicants, setMatchApplicants] = useState([]);

  const resetMatchInfo = () => {
    setMatchId("");
    setMatchDate("");
    setMatchTime("");
    setMatchModus("");
    setMatchDestination("");
    setMatchField("");
    setMatchNote("");
    setMatchOpponent("");
    setMatchOpponentAge("");
    setMatchOpponentLeague("");
    setMatchOpponentCoach("");
    setMatchApplicants([]);
  };

  const handleSetApplicants = (applicant) => {
    setMatchApplicants([...matchApplicants, applicant]);
  };

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
    applicants: matchApplicants,
  };

  const handleOpenMatchInfo = (e, match) => {
    console.log(match);
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

    let isApplicant = false;

    for (var applicant of match.applicants) {
      if (applicant.name === user.name) {
        isApplicant = true;
      } else {
        handleSetApplicants(applicant);
      }
    }

    if (match.coachClub === user.name && !match.matched) {
      let changeMatchModal = document.getElementById("change-match-modal");
      changeMatchModal.classList.add("is-open");
    } else if (isApplicant) {
      let matchInfoModal = document.getElementById("match-info-modal");
      matchInfoModal.classList.add("is-open");
      setHideRequestButton(true);
      // TODO: soll applicant nachträglich weitere optionen haben?
    } else if (
      match.coachOpponent === user.name ||
      (match.coachClub === user.name && match.matched)
    ) {
      let matchInfoModal = document.getElementById("match-info-modal");
      matchInfoModal.classList.add("is-open");
      setHideRequestButton(true);
      // TODO: soll opponent nach festlegen des matches weitere optionen haben?
    } else {
      return;
    }
  };

  const handleCloseMatchInfo = () => {
    let addMatchModal = document.getElementById("match-info-modal");
    addMatchModal.classList.remove("is-open");
  };

  const handleCloseChangeMatchModal = () => {
    let changeMatchModal = document.getElementById("change-match-modal");
    changeMatchModal.classList.remove("is-open");
    resetMatchInfo();
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
      case "note": {
        setMatchNote(value);
        break;
      }
      default:
        break;
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "1.5rem",
          flexDirection: "columns",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          gap: "2rem",
          width: "100%",
        }}
        className="test-spiel-container"
      >
        <div className="filter-container">
          <MeineSpieleFilter
            handleGamesCreatedChange={handleGamesCreatedChange}
            handleGamesFixedChange={handleGamesFixedChange}
            // handleGamesRequestedChange={handleGamesRequestedChange}
            handleGamesRequestingChange={handleGamesRequestingChange}
          />
        </div>
        <div className="game-container">
          {gamesCreated &&
            matchesCreated &&
            matchesCreated.map((match, index) => (
              <MatchCard
                index={index}
                match={match}
                matchesCreated={true}
                onClick={(e) => handleOpenMatchInfo(e, match)}
              />
            ))}
          {gamesRequesting &&
            matchesApplied &&
            matchesApplied.map((match, index) => (
              <MatchCard
                index={index}
                match={match}
                matchesRequesting={true}
                onClick={(e) => handleOpenMatchInfo(e, match)}
              />
            ))}
          {gamesFixed &&
            matchesFixed &&
            matchesFixed.map((match, index) => (
              <MatchCard
                index={index}
                match={match}
                gamesFixed={true}
                user={user}
                onClick={(e) => handleOpenMatchInfo(e, match)}
              />
            ))}
          {((gamesCreated && !matchesCreated) ||
            (gamesRequesting && !matchesApplied) ||
            (gamesFixed && !matchesFixed)) &&
            "Es sind derzeit keine Spiele verfügbar..."}
        </div>
      </div>
      <MatchInfoModal
        match={matchInfo}
        handleClose={handleCloseMatchInfo}
        user={user}
        hideRequestBtn={hideRequestButton}
      />
      <ChangeMatchModal
        match={matchInfo}
        handleClose={handleCloseChangeMatchModal}
        handleUpdate={handleUpdate}
        user={user}
        token={token}
      />
    </>
  );
}
