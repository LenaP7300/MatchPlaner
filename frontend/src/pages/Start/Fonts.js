import React from "react";
import { Typography , styled} from "@mui/material";

/* Styled Texts */
export const WhiteText = styled(Typography)({
    color: "white",
    whiteSpace:"nowrap",
    marginTop: "5px",
});

export const GreenText = styled(Typography)({
    whiteSpace:"nowrap",
    color: "#BFD200",
    fontStyle: "italic",
});

export const BigBlackText = styled(Typography)(({theme}) => ({
    whiteSpace:"nowrap",
    fontSize: "1.5rem",
    [theme.breakpoints.up("sm")]: {
        fontSize: "2.5rem",
    },
}));

export const BigText = styled(Typography)(({theme}) => ({
    whiteSpace:"nowrap",
    marginTop: "5px",
    fontSize: "1.5rem",
    [theme.breakpoints.up("sm")]: {
        fontSize: "2.5rem",
    },
}));

export const BigWhiteText = styled(WhiteText)(({theme}) => ({
    fontSize: "1.5rem",
    [theme.breakpoints.up("sm")]: {
        fontSize: "2.5rem",
    },
}));

export const BigGreenText = styled(Typography)(({theme}) => ({
    color: "#d4fc04",
    fontSize: "1.5rem",
    [theme.breakpoints.up("md")]:{
        textAlign: "left",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "2.5rem",
    },
}));

export const MessageText = styled(Typography)(({theme}) => ({
    color: "white",
    textAlign: "center", 
    fontSize: "1.5rem",
    [theme.breakpoints.down("lg")]:{
        fontSize: "1.25rem",
    },
    [theme.breakpoints.down("md")]:{
        display: "none",
    },
}));

export const StatsText = styled(WhiteText)({
    fontWeight: "bold", 
    fontSize: "1.5rem",
});
