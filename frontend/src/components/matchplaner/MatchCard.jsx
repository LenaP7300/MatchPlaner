import { Grid } from "@mui/material";
export function MatchCard(props) {
  const match = props.match;

  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const month = months[
    match.date.split("T")[0].split("-")[1].slice(1) - 1
  ].slice(0, 3);

  // if (props.matchesRequesting || props.matchesCreated) {
  //   const requestIcon = document.getElementById("requestIcon");
  //   requestIcon.classList.add("hidden");
  // }

  if (props.gamesFixed && props.userClub === match.club) {
    // TODO: opponent aus DB abfragen und Daten übernehmen
  }

  return (
    <>
      <Grid item container className="match-card" lg={5.8} md={12} sm={12}>
        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          md={2}
          sm={2}
          xs={3}
          className="match-date"
        >
          <Grid item className="match-month bold">
            {month}
          </Grid>
          <Grid item className="match-day bold">
            {match.date.split("T")[0].split("-")[2]}
          </Grid>
          <Grid item className="match-time bold">
            {match.time}
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="column"
          justifyContent="space-evenly"
          alignItems="flex-start"
          md={7}
          sm={7}
          xs={6}
        >
          <Grid item className="match-opponent bold">
            {props.gamesFixed &&
            match.club === props.user.club &&
            match.age === props.user.age
              ? match.opponentClub
              : match.club}
          </Grid>
          <Grid item className="match-info-sec">
            <p>{match.age.label}</p>
            <p>{match.league.label}</p>
            <p>
              Spielort:{" "}
              {match.destination !== "" ? match.destination : "ohne Angabe"}
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="column"
          justifyContent="space-between"
          alignItems="flex-end"
          md={3}
          sm={3}
          xs={3}
        >
          <Grid item>
            <img
              src={require("../../resources/icons/info-icon.svg").default}
              alt="info icon"
              style={{ height: "50px", width: "54px", cursor: "pointer" }}
              onClick={props.onClick}
            />
          </Grid>
          <Grid item>
            <img
              src={require("../../resources/icons/agree-icon.svg").default}
              id="requestIcon"
              alt=""
              className={`${
                props.matchesCreated ||
                props.matchesRequesting ||
                props.gamesFixed
                  ? "hidden"
                  : ""
              }  `}
              style={{
                height: "50px",
                width: "54px",
                cursor: "pointer",
              }}
              onClick={props.handleRequest}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* <div key={props.index} className="match-card">
        <div className="match-date">
          <p className="match-month bold">{month}</p>
          <p className="match-day bold">
            {match.date.split("T")[0].split("-")[2]}
          </p>
          <p className="match-time bold">{match.time}</p>
        </div>
        <div className="match-info-sec">
          <p className="match-opponent bold">
            {props.gamesFixed &&
            match.club === props.user.club &&
            match.age === props.user.age
              ? match.opponentClub
              : match.club}
          </p>
          <p className="match-info">{match.age.label}</p>
          <p className="match-info">{match.league.label}</p>
          <p className="match-info">
            Spielort:{" "}
            {match.destination !== "" ? match.destination : "ohne Angabe"}
          </p>
        </div>
        <div className="card-icon-grid">
          <img
            src={require("../../resources/icons/info-icon.svg").default}
            alt="info icon"
            style={{ height: "50px", width: "54px", cursor: "pointer" }}
            onClick={props.onClick}
          />
          <div className="bottom-icon-sec">
            <img
              src={require("../../resources/icons/star-icon.svg").default}
              id="staricon"
              alt=""
              style={{
                height: "28px",
                width: "28px",
                alignSelf: "center",
                visibility: "hidden", //TODO: add functionality, remove hidden
              }}
            />
            <img
              src={require("../../resources/icons/agree-icon.svg").default}
              id="requestIcon"
              alt=""
              className={`${
                props.matchesCreated ||
                props.matchesRequesting ||
                props.gamesFixed
                  ? "hidden"
                  : ""
              }  `}
              style={{
                height: "50px",
                width: "54px",
                cursor: "pointer",
              }}
              onClick={props.handleRequest}
            />
          </div>
        </div>
      </div> */}
    </>
  );
}
