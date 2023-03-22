export function MeineSpieleFilter(props) {
  return (
    <ul className="filter-list">
      <li>
        <button
          className="filter-button"
          id="btnGamesCreated"
          style={{ width: "100%", backgroundColor: "#d2ff00" }}
          onClick={props.handleGamesCreatedChange}
        >
          Eigene Anfragen
        </button>
      </li>
      <li className="filter-li">
        <button
          className="filter-button"
          id="btnGamesRequesting"
          style={{ width: "100%" }}
          onClick={props.handleGamesRequestingChange}
        >
          In Verhandlung
        </button>
      </li>
      {/* <li className="filter-li">
        <button
          className="filter-button"
          id="btnGamesRequested"
          style={{ width: "100%" }}
          onClick={props.handleGamesRequestedChange}
        >
          Eingehende Anfragen
        </button>
      </li> */}
      <li className="filter-li">
        <button
          className="filter-button"
          id="btnGamesFixed"
          style={{ width: "100%" }}
          onClick={props.handleGamesFixedChange}
        >
          Vereinbarte Spiele
        </button>
      </li>
    </ul>
  );
}
