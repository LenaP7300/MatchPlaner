import React from "react";
import { Typography , styled} from "@mui/material";

/* Styled Texts */
export const WhiteText = styled(Typography)({
    color: "white",
    whiteSpace:"nowrap",
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

export const BigWhiteText = styled(WhiteText)(({theme}) => ({
    fontSize: "1.5rem",
    [theme.breakpoints.up("sm")]: {
        fontSize: "2.5rem",
    },
}));

export const StatsText = styled(WhiteText)({
    fontWeight: "bold", 
    fontSize: "1.5rem",
});