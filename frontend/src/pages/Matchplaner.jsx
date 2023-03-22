import { Typography, Grid, Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Navigation } from "../components/matchplaner/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  getMatchesLoading,
  getMatchesSuccess,
  getMatchesError,
  resetStatus,
} from "../features/matchplaner/matchplanerActions";
import { getMatches } from "../features/matchplaner/matchplanerAPI";
import SpinnerLogo from "../components/SpinnerLogo";
import "react-toastify/dist/ReactToastify.css";
import { AddMatchModal } from "../components/modals/AddMatchModal";
import { Link } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";

export function Matchplaner() {
  // set custom title (for google analytics)
  useEffect(() => {
    document.title = "MatchPlaner | Matchplaner";
  }, []);

  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.user);

  const { error, status } = useSelector((state) => state.matchplaner);

  const loadMatches = async () => {
    try {
      // init loading
      dispatch(getMatchesLoading());
      // api call
      const response = await getMatches(token);
      dispatch(getMatchesSuccess(response));
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch(getMatchesError(message));
    }
  };

  // get all matches of the current user at first render
  useEffect(() => {
    loadMatches();
  }, []);

  // after any action show error message and reset status
  useEffect(() => {
    if (error || status === "failed") {
      toast.error(error);
    }

    if (status === "success") {
      loadMatches();
    }

    if (status !== "loading") {
      dispatch(resetStatus());
    }
  }, [status, error]);

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  // loading sign
  if (status === "loading") {
    return <SpinnerLogo />;
  }

  return (
    <div style={{ margin: "0 2rem" }}>
      <Typography variant="mainHeader">Matchplaner</Typography>
      {/* Container with settings for toasts */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        closeOnClick
        pauseOnHover
      />
      <Container>
        <Grid container alignItems="center">
          <Grid item xs>
            <Link to="/coach">
              <Grid container alignContent="center">
                <Grid item>
                  <ArrowBackIos sx={{ color: "white" }} />
                </Grid>
                <Grid item>
                  <Typography
                    fontSize="20px"
                    textTransform="uppercase"
                    color="white"
                  >
                    Dashboard
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          </Grid>
          <Grid item xs>
            <div className="add-match-button" onClick={handleDialogOpen}></div>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%" }} mb={2}>
          <div style={{ marginTop: "2rem" }}>
            <Navigation />
          </div>
          {/* Modal: create new match */}
          <AddMatchModal
            handleClose={handleDialogClose}
            open={dialogOpen}
            user={user}
            userToken={token}
          />
        </Box>
      </Container>
    </div>
  );
}
