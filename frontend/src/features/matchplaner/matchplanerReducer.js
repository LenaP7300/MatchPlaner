const initialState = {
  matchesAvailable: [],
  matchesCreated: [],
  matchesFixed: [],
  matchesApplied: [],
  error: null,
  status: "idle",
  addMatchModalIsOpen: false,
};

const matchplanerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MATCHES_LOADING":
      return {
        ...state,
        status: "loading",
      };
    case "GET_MATCHES_SUCCESS":
      return {
        error: null,
        status: "finished", // do not call "success", so it is possible to get all (new) matches with useEffect when status == "success", without creating an infinite call
        matchesAvailable: action.payload.matches[0],
        matchesCreated: action.payload.matches[1],
        matchesFixed: action.payload.matches[2],
        matchesApplied: action.payload.matches[3],
      };
    case "GET_MATCHES_ERROR":
      return {
        ...state,
        error: action.payload.error,
        status: "error",
      };

    case "CREATE_MATCH_LOADING":
      return {
        ...state,
        status: "loading",
      };
    case "CREATE_MATCH_SUCCESS":
      return {
        ...state,
        status: "success",
      };
    case "CREATE_MATCH_ERROR":
      return {
        ...state,
        error: action.payload.error,
        status: "error",
      };

    case "UPDATE_MATCH_LOADING":
      return {
        ...state,
        status: "loading",
      };
    case "UPDATE_MATCH_SUCCESS":
      return {
        ...state,
        status: "success",
      };
    case "UPDATE_MATCH_ERROR":
      return {
        ...state,
        error: action.payload.error,
        status: "error",
      };

    case "DELETE_MATCH_LOADING":
      return {
        ...state,
        status: "loading",
      };
    case "DELETE_MATCH_SUCCESS":
      return {
        ...state,
        status: "success",
      };
    case "DELETE_MATCH_ERROR":
      return {
        ...state,
        error: action.payload.error,
        status: "error",
      };

    case "RESET_STATUS":
      return {
        ...state,
        status: "idle",
      };

    case "OPEN_MODAL":
    return {
      ...state,
      addMatchModalIsOpen: true,
    };

    case "CLOSE_MODAL":
    return {
      ...state,
      addMatchModalIsOpen: false,
    };

    default:
      return initialState;
  }
};

export default matchplanerReducer;
