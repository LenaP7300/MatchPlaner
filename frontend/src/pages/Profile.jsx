import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  ListSubheader,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { resetStatus } from "../features/user/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  // set custom title (for google analytics)
  useEffect(() => {
    document.title = "MatchPlaner | Profil";
  }, []);

  const { user, status, error } = useSelector((state) => state.user);

  // delete account
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  // open dialog
  const handleOpenDelete = () => {
    setOpenDeleteDialog(true);
  };
  // close dialog
  const handleCloseDelete = () => {
    setOpenDeleteDialog(false);
    // means dont delete - so just do nothing
  };
  // submit delete dialog
  const handleDelete = () => {
    setOpenDeleteDialog(false);

    // TODO
    // delete account

    // deleteUser()
    // onLogout()
  };

  // update data
  // change password
  const [passwordData, setPasswordData] = useState({
    newPassword1: "",
    newPassword2: "",
    oldPassword: "",
  });
  const { newPassword1, newPassword2, oldPassword } = passwordData;
  // on change input password
  const onChangePassword = (e) => {
    setPasswordData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // handle password dialog
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    new1: false,
    new2: false,
    old: false,
  });
  // open password dialog
  const handleOpenPassword = () => {
    setOpenPasswordDialog(true);
  };
  // close password dialog
  const handleClosePassword = () => {
    setOpenPasswordDialog(false);
    // means dont delete - so just do nothing
  };
  // submit change password via dialog
  const handleChangePassword = () => {
    setOpenPasswordDialog(false);
    let userData;
    if (newPassword1 !== newPassword2) {
      toast.error("Neue Passwörter stimmen nicht überein");
    } else {
      userData = {
        password: [newPassword1, oldPassword],
      };
      // dispatch(update(userData));
    }
  };
  // reset and confirm if password changed
  // useEffect(() => {
  //   if (status === "success") {
  //     // reset password dialog data
  //     setPasswordData({
  //       newPassword1: "",
  //       newPassword2: "",
  //       oldPassword: "",
  //     });
  //     toast.success("Passwort erfolgreich geändert");
  //   }
  // }, [status]);

  // other properties
  const [profileData, setProfileData] = useState({
    email: user.email,
    newEmail: "",
    club: user.club,
    newClub: "",
    // age: user.age,
    newAge: "",
    // league: user.league,
    newLeague: "",
  });
  const { email, newEmail, club, newClub, age, newAge, league, newLeague } =
    profileData;
  const onChangeProps = (e) => {
    setProfileData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // change email
  const [openEmailDialog, setOpenEmailDialog] = useState(false);
  // open email dialog
  const handleOpenEmail = () => {
    setOpenEmailDialog(true);
  };
  // close email dialog
  const handleCloseEmail = () => {
    setOpenEmailDialog(false);
    // means dont delete - so just do nothing
  };
  // submit change email via dialog
  const handleChangeEmail = () => {
    setOpenEmailDialog(false);
    const userData = {
      email: newEmail,
    };
    // dispatch(update(userData));
  };

  // change club
  const [openClubDialog, setOpenClubDialog] = useState(false);
  // open club dialog
  const handleOpenClub = () => {
    setOpenClubDialog(true);
  };
  // close club dialog
  const handleCloseClub = () => {
    setOpenClubDialog(false);
    // means dont delete - so just do nothing
  };
  // submit change club via dialog
  const handleChangeClub = () => {
    setOpenClubDialog(false);
    // hier dann code verifizieren und neue Daten eintragen/speichern (sowohl DB als auch localStorage)
    console.log("Verein wird gewechselt...");
  };

  // new season
  const [openSeasonDialog, setOpenSeasonDialog] = useState(false);
  // open new season dialog
  const handleOpenSeason = () => {
    setOpenSeasonDialog(true);
  };
  // close new season dialog
  const handleCloseSeason = () => {
    setOpenSeasonDialog(false);
    // means dont delete - so just do nothing
  };
  // submit start new season dialog
  const handleNewSeason = () => {
    setOpenSeasonDialog(false);
    // hier dann code verifizieren und neue Daten eintragen/speichern (sowohl DB als auch localStorage)
    console.log("Neue Saison...");
  };

  // highlight the values that can be changed with this button by adding a className
  // the class "changeClub" is just used to find the components (includes no style)
  const highlightClubChangeFields = () => {
    const fields = document.querySelectorAll(".changeClub");
    fields.forEach((field) => {
      field.classList.add("highlightField");
    });
  };
  const highlightNewSeasonFields = () => {
    const fields = document.querySelectorAll(".newSeason");
    fields.forEach((field) => {
      field.classList.add("highlightField");
    });
  };
  // reset the highlight effect by removing the className
  const resetHighlightFields = () => {
    const allFields = document.querySelectorAll(".changeClub, .newSeason"); //hier dann alle anderen auch dazu
    allFields.forEach((field) => {
      field.classList.remove("highlightField");
    });
  };

  // handle status
  useEffect(() => {
    if (status === "failed" || error) {
      toast.error(error);
    }

    if (status === "success") {
      toast.success("Profil erfolgreich aktualisiert");
      setProfileData({
        email: user.email,
        newEmail: "",
        club: user.club,
        newClub: "",
        // age: user.age,
        newAge: "",
        // league: user.league,
        newLeague: "",
        allocation: user.allocation,
        newAllocation: "",
        codes: user.codes,
      });
    }

    resetStatus();
  }, [status, error]);

  // get country
  let userCountry;
  switch (user.country) {
    case "D":
      userCountry = "Deutschland";
      break;
    case "AT":
      userCountry = "Österreich";
      break;
    case "CH":
      userCountry = "Schweiz";
      break;

    default:
      userCountry = "Land";
      break;
  }

  // get age
  // let userAge;
  // switch (user.age) {
  //   case "senioren":
  //   case "seniorinnen":
  //   case "herren":
  //   case "frauen":
  //     userAge = user.age.charAt(0).toUpperCase() + user.age.slice(1);
  //     break;
  //   case "U19m":
  //   case "U18m":
  //     userAge = "A-Junioren";
  //     break;
  //   case "U19f":
  //   case "U18f":
  //     userAge = "A-Juniorinnen";
  //     break;
  //   case "U17m":
  //   case "U16m":
  //     userAge = "B-Junioren";
  //     break;
  //   case "U17f":
  //   case "U16f":
  //     userAge = "B-Juniorinnen";
  //     break;
  //   case "U15m":
  //   case "U14m":
  //     userAge = "C-Junioren";
  //     break;
  //   case "U15f":
  //   case "U14f":
  //     userAge = "C-Juniorinnen";
  //     break;
  //   case "U13m":
  //   case "U12m":
  //     userAge = "D-Junioren";
  //     break;
  //   case "U13f":
  //   case "U12f":
  //     userAge = "D-Juniorinnen";
  //     break;
  //   case "U11m":
  //   case "U10m":
  //     userAge = "E-Junioren";
  //     break;
  //   case "U11f":
  //   case "U10f":
  //     userAge = "E-Juniorinnen";
  //     break;
  //   case "U9m":
  //   case "U8m":
  //     userAge = "F-Junioren";
  //     break;
  //   case "U9f":
  //   case "U8f":
  //     userAge = "F-Juniorinnen";
  //     break;
  //   case "U7":
  //     userAge = "Bambini";
  //     break;
  //   case "U6":
  //     userAge = "Mini-Bambini";
  //     break;

  //   default:
  //     userAge = "Alter";
  //     break;
  // }

  // get association
  let userAssociation;
  switch (user.association) {
    case "WB":
      userAssociation = "WFV";
      break;

    default:
      userAssociation = "Verband";
      break;
  }

  // get league
  // TODO: Die Funktion(en) hier und die bei der Registrierung zusammenfassen und auslagern
  // let userLeague;
  // if (user.age === "senioren") {
  //   switch (user.league) {
  //     case 6:
  //       userLeague = "Bezirksliga";
  //       break;
  //     case 7:
  //       userLeague = "Kreisliga A";
  //       break;

  //     default:
  //       userLeague = "Liga";
  //       break;
  //   }
  // } else if (user.age === "herren") {
  //   switch (user.league) {
  //     case 1:
  //       userLeague = "Bundesliga";
  //       break;
  //     case 2:
  //       userLeague = "2.Bundesliga";
  //       break;
  //     case 3:
  //       userLeague = "3.Liga";
  //       break;
  //     case 4:
  //       userLeague = "Regionalliga Südwest";
  //       break;
  //     case 5:
  //       userLeague = "Oberliga BaWü";
  //       break;
  //     case 6:
  //       userLeague = "Verbandsliga";
  //       break;
  //     case 7:
  //       userLeague = "Landesliga";
  //       break;
  //     case 8:
  //       userLeague = "Bezirksliga";
  //       break;
  //     case 9:
  //       userLeague = "Kreisliga A";
  //       break;
  //     case 10:
  //       userLeague = "Kreisliga B";
  //       break;
  //     case 11:
  //       userLeague = "Kreisliga C";
  //       break;

  //     default:
  //       userLeague = "Liga";
  //       break;
  //   }
  // } else if (
  //   user.age === "U19m" ||
  //   user.age === "U18m" ||
  //   user.age === "U17m" ||
  //   user.age === "U16m" ||
  //   user.age === "U15m" ||
  //   user.age === "U14m"
  // ) {
  //   switch (user.league) {
  //     case 6:
  //       userLeague = "Verbandsstaffel";
  //       break;
  //     case 7:
  //       userLeague = "Landesstaffel";
  //       break;
  //     case 8:
  //       userLeague = "Regionenstaffel";
  //       break;
  //     case 9:
  //       userLeague = "Bezirksstaffel";
  //       break;
  //     case 10:
  //       userLeague = "Kreisleistungsstaffel";
  //       break;
  //     case 11:
  //       userLeague = "Kreisstaffel";
  //       break;

  //     default:
  //       userLeague = "Liga";
  //       break;
  //   }
  // } else if (user.age === "U13m" || user.age === "U12m") {
  //   switch (user.league) {
  //     case 6:
  //       userLeague = "Verbandsstaffel";
  //       break;
  //     case 7:
  //       userLeague = "Bezirksstaffel";
  //       break;
  //     case 8:
  //       userLeague = "Kreisleistungsstaffel";
  //       break;
  //     case 9:
  //       userLeague = "Kreisstaffel";
  //       break;

  //     default:
  //       userLeague = "Liga";
  //       break;
  //   }
  // } else if (
  //   user.age === "U11m" ||
  //   user.age === "U10m" ||
  //   user.age === "U13f" ||
  //   user.age === "U12f" ||
  //   user.age === "U11f" ||
  //   user.age === "U10f"
  // ) {
  //   switch (user.league) {
  //     case 6:
  //       userLeague = "Kreisstaffel";
  //       break;

  //     default:
  //       userLeague = "Liga";
  //       break;
  //   }
  // } else if (user.age === "frauen") {
  //   switch (user.league) {
  //     case 6:
  //       userLeague = "Verbandsliga";
  //       break;
  //     case 7:
  //       userLeague = "Landesliga";
  //       break;
  //     case 8:
  //       userLeague = "Regionenliga";
  //       break;
  //     case 9:
  //       userLeague = "Bezirksliga";
  //       break;
  //     case 10:
  //       userLeague = "Kreisliga A";
  //       break;

  //     default:
  //       userLeague = "Liga";
  //       break;
  //   }
  // } else if (user.age === "U17f" || user.age === "U16f") {
  //   switch (user.league) {
  //     case 6:
  //       userLeague = "Verbandsstaffel";
  //       break;
  //     case 7:
  //       userLeague = "Bezirksstaffel";
  //       break;
  //     case 8:
  //       userLeague = "Kreisstaffel";
  //       break;

  //     default:
  //       userLeague = "Liga";
  //       break;
  //   }
  // } else if (user.age === "U15f" || user.age === "U14f") {
  //   switch (user.league) {
  //     case 6:
  //       userLeague = "Kreisleistungsstaffel";
  //       break;
  //     case 7:
  //       userLeague = "Kreisstaffel";
  //       break;

  //     default:
  //       userLeague = "Liga";
  //       break;
  //   }
  // }

  // array of names and props and map infos (instead of type every property)
  const propsNamesDeutsch = [
    "Name",
    "E-Mail",
    "Verein",
    "PLZ",
    "Stadt",
    "Addresse",
    "Land",
    "Alter",
    "Verband",
    "Liga",
  ];
  const props = [
    user.name ? user.name : "Name",
    user.email ? user.email : "E-Mail",
    user.club ? user.club : "Verein",
    user.plz ? user.plz : "PLZ",
    user.city ? user.city : "Stadt",
    user.adress ? user.adress : "Straße",
    userCountry,
  ];
  user.role === "coach" &&
    props.push(
      user.age ? user.age.label : "Alter",
      userAssociation,
      user.league ? user.league.label : "Liga"
    );
  // class names to highlight with hover over button
  const propsClassNames = [
    "",
    "",
    "changeClub",
    "changeClub",
    "changeClub",
    "changeClub",
    "changeClub",
    "changeClub newSeason",
    "changeClub newSeason",
    "changeClub newSeason",
  ];

  return (
    <>
      {/* heading */}
      <Typography variant="mainHeader">Dein Profil</Typography>

      {/* Container with settings for toasts */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        closeOnClick
        pauseOnHover
      />

      {/* render all props */}
      <Grid container rowSpacing={1}>
        {props.map((p, index) => (
          <Grid
            item
            key={index}
            xs={12}
            md={6}
            lg={4}
            container
            alignItems="center"
            className={propsClassNames[index]}
          >
            {/* property name */}
            <Grid item xs={3} minWidth="50px">
              {propsNamesDeutsch[index]}
            </Grid>
            {/* property */}
            <Grid item xs={9} minWidth="200px">
              <TextField
                id="outlined-read-only-input"
                // label="Read Only"
                defaultValue={p}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* container buttons */}
      {/* <Grid container spacing={2} justifyContent="center" mt={2}> */}
      {/* change password */}
      {/* <Grid item>
          <Button
            variant="outlined"
            onClick={handleOpenPassword}
            className="pointer"
          >
            Passwort ändern
          </Button>
        </Grid> */}
      {/* change email */}
      {/* <Grid item>
          <Button
            variant="outlined"
            onClick={handleOpenEmail}
            className="pointer"
          >
            E-Mail ändern
          </Button>
        </Grid> */}
      {/* Buttons only for coaches: newSeason, changeClub */}
      {/* {user.role === "coach" && ( */}
      {/* <> */}
      {/* change club */}
      {/* <Grid item>
              <Button
                variant="outlined"
                onClick={handleOpenClub}
                onMouseOver={highlightClubChangeFields}
                onMouseOut={resetHighlightFields}
                className="pointer"
                color="warning"
                sx={{ "&:hover": { backgroundColor: "orange" } }}
              >
                Verein wechseln
              </Button>
            </Grid> */}
      {/* new season */}
      {/* <Grid item>
              <Button
                variant="outlined"
                onClick={handleOpenSeason}
                onMouseOver={highlightNewSeasonFields}
                onMouseOut={resetHighlightFields}
                className="pointer"
                color="warning"
                sx={{ "&:hover": { backgroundColor: "orange" } }}
              >
                Neue Saison
              </Button>
            </Grid> */}
      {/* </> */}
      {/* )} */}
      {/* delete account */}
      {/* <Grid item>
          <Button
            variant="outlined"
            onClick={handleOpenDelete}
            className="pointer"
            color="error"
            sx={{ "&:hover": { backgroundColor: "red" } }}
          >
            Account löschen
          </Button>
        </Grid> */}
      {/* </Grid> */}

      {/* Dialog for delete user */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Account"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>No, do not delete</Button>
          <Button
            onClick={handleDelete}
            color="error"
            sx={{ "&:hover": { backgroundColor: "red" } }}
          >
            Yes, delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for change email */}
      <Dialog open={openEmailDialog} onClose={handleCloseEmail}>
        <DialogTitle>E-Mail ändern</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hier kannst Du eine neue E-Mail Adresse angeben. Diese neue E-Mail
            Adresse muss dann erst noch bestätigt werden.
          </DialogContentText>
          <TextField
            helperText="Neue E-Mail Adresse"
            id="newEmail"
            name="newEmail"
            value={newEmail}
            type="email"
            onChange={onChangeProps}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEmail}>Abbruch</Button>
          <Button onClick={handleChangeEmail}>Ändern</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for update password */}
      <Dialog open={openPasswordDialog} onClose={handleClosePassword}>
        <DialogTitle>Passwort ändern</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hier kannst Du Dein Passwort ändern
          </DialogContentText>
          <TextField
            helperText="Neues Passwort"
            id="newPassword1"
            name="newPassword1"
            value={newPassword1}
            type={showPasswords.new1 ? "text" : "password"}
            onChange={onChangePassword}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPasswords({
                        ...showPasswords,
                        new1: !showPasswords.new1,
                      })
                    }
                  >
                    {showPasswords.new1 ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            helperText="Neues Passwort bestätigen"
            id="newPassword2"
            name="newPassword2"
            value={newPassword2}
            type={showPasswords.new2 ? "text" : "password"}
            onChange={onChangePassword}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPasswords({
                        ...showPasswords,
                        new2: !showPasswords.new2,
                      })
                    }
                  >
                    {showPasswords.new2 ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            helperText="Altes Passwort"
            id="oldPassword"
            name="oldPassword"
            value={oldPassword}
            type={showPasswords.old ? "text" : "password"}
            onChange={onChangePassword}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPasswords({
                        ...showPasswords,
                        old: !showPasswords.old,
                      })
                    }
                  >
                    {showPasswords.old ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePassword}>Abbruch</Button>
          <Button onClick={handleChangePassword}>Passwort ändern</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for change club */}
      <Dialog open={openClubDialog} onClose={handleCloseClub}>
        <DialogTitle>Verein wechseln</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hier kannst du Dein Profil aktualisieren, wenn du Deinen Verein
            wechselst. Ändert sich lediglich die Altersklasse oder die Liga,
            dann schau doch mal bei "Neue Saison".
          </DialogContentText>
          <Typography color="orange">
            Bitte beachte, dass Du für Deinen Account bei einem Vereinswechselt
            erneut einen Zugangscode (vom neuen Verein) brauchst.
          </Typography>
          <Typography color="error">
            Wichtig: Alle bereits ausgemachten Spiele (und die Bewerbungen auf
            Spiele) werden gelöscht, da diese mit dem aktuellen Account
            verbunden sind.
          </Typography>

          <TextField
            helperText="Neuer Zugangscode"
            id="code"
            name="code"
            // value={code}
            type="text"
            onChange={onChangeProps}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseClub}>Abbruch</Button>
          <Button onClick={handleChangeClub}>Verein wechseln</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for new season */}
      <Dialog open={openSeasonDialog} onClose={handleCloseSeason}>
        <DialogTitle>Neue Saison</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hier kannst du Dein Profil aktualisieren, wenn sich die Spielklasse
            oder das Alter der Spieler ändert (was im Normalfall bei einer neuen
            Saison der Fall ist). Willst Du in einen neuen Verein wechseln, dann
            schau doch mal bei "Verein wechseln".
          </DialogContentText>
          <Typography color="error">
            Wichtig: Alle bereits ausgemachten Spiele (und die Bewerbungen auf
            Spiele) werden gelöscht, da diese mit dem aktuellen Account
            verbunden sind.
          </Typography>

          {/* league */}
          <TextField
            select
            label="Liga"
            defaultValue=""
            // name="league"
            // id="league"
            // value={league}
            onChange={onChangeProps}
            helperText="Wähle Deine Spielklasse"
            SelectProps={{
              MenuProps: { PaperProps: { sx: { maxHeight: 200 } } },
            }}
          >
            <MenuItem value="" disabled>
              Spielklasse
            </MenuItem>
            <ListSubheader>Deutschland</ListSubheader>
            <MenuItem value="Bundesliga">Bundesliga</MenuItem>
            <MenuItem value="2. Bundesliga">2. Bundesliga</MenuItem>
            <MenuItem value="3. Liga">3. Liga</MenuItem>
            <MenuItem value="Regionalliga">Regionalliga</MenuItem>
            <MenuItem value="Oberliga">Oberliga</MenuItem>
            <MenuItem value="Verbandsliga">Verbandsliga</MenuItem>
            <MenuItem value="Landesliga">Landesliga</MenuItem>
            <MenuItem value="Bezirksliga">Bezirksliga</MenuItem>
            <MenuItem value="Kreisliga A">Kreisliga A</MenuItem>
            <MenuItem value="Kreisliga B">Kreisliga B</MenuItem>
            <MenuItem value="Kreisliga C">Kreisliga C</MenuItem>
            <ListSubheader>Österreich</ListSubheader>
            <MenuItem value="Bundesliga">Bundesliga</MenuItem>
            <MenuItem value="2. Bundesliga">2. Bundesliga</MenuItem>
            <MenuItem value="Regionalliga">Regionalliga</MenuItem>
            <MenuItem value="Landesliga">Landesliga</MenuItem>
            <ListSubheader>Schweiz</ListSubheader>
            <MenuItem value="Super League">Super League</MenuItem>
            <MenuItem value="Challange League">Challange League</MenuItem>
            <MenuItem value="Promotion League">Promotion League</MenuItem>
            <MenuItem value="1. Liga">1. Liga</MenuItem>
            <MenuItem value="2. Liga interregional">
              2. Liga interregional
            </MenuItem>
            <MenuItem value="2. Liga">2. Liga</MenuItem>
            <MenuItem value="3. Liga">3. Liga</MenuItem>
            <MenuItem value="4. Liga">4. Liga</MenuItem>
            <MenuItem value="5. Liga">5. Liga</MenuItem>
          </TextField>

          {/* age */}
          <TextField
            select
            label="Altersklasse"
            defaultValue=""
            // name="age"
            // id="age"
            // value={age}
            onChange={onChangeProps}
            helperText="Wähle die Altersklasse"
            SelectProps={{
              MenuProps: { PaperProps: { sx: { maxHeight: 200 } } },
            }}
          >
            <MenuItem value="" disabled>
              Altersklasse
            </MenuItem>
            <ListSubheader>Herren/Junioren</ListSubheader>
            <MenuItem value="AH">Senioren</MenuItem>
            <MenuItem value="Ü19">Herren</MenuItem>
            <MenuItem value="U19">A-Junioren</MenuItem>
            <MenuItem value="U17">B-Junioren</MenuItem>
            <MenuItem value="U15">C-Junioren</MenuItem>
            <MenuItem value="U13">D-Junioren</MenuItem>
            <MenuItem value="U11">E-Junioren</MenuItem>
            <MenuItem value="U9">F-Junioren</MenuItem>
            <MenuItem value="U7">G-Junioren</MenuItem>
            <ListSubheader>Frauen/Juniorinnen</ListSubheader>
            <MenuItem value="fÜ19">Frauen</MenuItem>
            <MenuItem value="fU19">A-Juniorinnen</MenuItem>
            <MenuItem value="fU17">B-Juniorinnen</MenuItem>
            <MenuItem value="fU15">C-Juniorinnen</MenuItem>
            <MenuItem value="fU13">D-Juniorinnen</MenuItem>
            <MenuItem value="fU11">E-Juniorinnen</MenuItem>
            <MenuItem value="fU9">F-Juniorinnen</MenuItem>
            <MenuItem value="fU7">G-Juniorinnen</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSeason}>Abbruch</Button>
          <Button onClick={handleNewSeason}>Profil anpassen</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Profile;
