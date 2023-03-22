import {
  Typography,
  MenuItem,
  ListSubheader,
  TextField,
  Box,
  Button,
  Grid,
  Stepper,
  Step,
  StepContent,
  StepLabel,
  SvgIcon,
  Tooltip,
  InputAdornment,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkRegistrationCode, register } from "../features/user/userAPI";
import {
  registerCodeValidationLoading,
  registerCodeValidationSuccess,
  registerCodeValidationError,
  registerLoading,
  registerSuccess,
  registerError,
} from "../features/user/userActions";
import SpinnerLogo from "../components/SpinnerLogo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VerifiedUser, LockOpen, CoPresentOutlined } from "@mui/icons-material";

import RegistrationCoach from "../components/RegistrationCoach";
import RegistrationManager from "../components/RegistrationManager";

function Register() {
  // set custom title (for google analytics)
  useEffect(() => {
    document.title = "MatchPlaner | Registrieren";
  }, []);

  const dispatch = useDispatch();

  // general infos
  const [tab, setTab] = useState(0);
  const [role, setRole] = useState("");

  // password checklist requirements
  const length = 7;
  const patternNumber = /[0-9]/;
  const patternCapital = /[A-Z]/;
  const patternSpecialChars = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/;
  // password checklist test functions
  const hasLength = (pw) => {
    return pw.length >= length;
  };
  const hasNumber = (pw) => {
    return patternNumber.test(pw);
  };
  const hasCapital = (pw) => {
    return patternCapital.test(pw);
  };
  const hasSpecialChar = (pw) => {
    return patternSpecialChars.test(pw);
  };

  const pwProps = { hasLength, hasNumber, hasCapital, hasSpecialChar };

  const { user, status, error } = useSelector((state) => state.user);

  return (
    <>
      {/* heading */}
      <Typography variant="mainHeader">Registrierung</Typography>

      {/* Container with settings for toasts */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        closeOnClick
        pauseOnHover
      />

      {status === "loading" && <SpinnerLogo />}

      {/* Tabs für Manager / Coach */}
      <Box sx={{ width: "100%" }} mb={2}>
        <Tabs
          value={tab}
          onChange={(event, newTab) => setTab(newTab)}
          textColor={"primary"}
          variant="fullWidth"
        >
          <Tab
            value={0}
            sx={{ fontSize: "11px", minWidth: 0, p: "4px" }}
            label="Trainer"
          />
          <Tab
            value={1}
            sx={{ fontSize: "11px", minWidth: 0, p: "4px" }}
            label="Manager"
          />
        </Tabs>
      </Box>

      <Grid container justifyContent="center">
        <Box width="800px">
          {tab === 0 && <RegistrationCoach pwProps={pwProps} />}
          {tab === 1 && <RegistrationManager pwProps={pwProps} />}
        </Box>
      </Grid>
    </>
  );
}

export default Register;
