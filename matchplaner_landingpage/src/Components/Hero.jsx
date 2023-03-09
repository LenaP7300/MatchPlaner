import React from "react";
import {Box, Typography, styled, Button, Stack} from "@mui/material"
import Background from "./../Images/HeroBackground.jpg";
import { breakpoints } from "@mui/system";

const Header = styled(Stack)({
    position: "absolute",
    width: "100%",
    minHeight: "3.7rem",
    background: "#BFD200",
});

const Content = styled(Stack)({
    position: "relative",
});

const Handy = styled(Stack)({
    padding:"10px", 
    alignItems: "center",
});

const HeaderContent = styled(Stack)({
    alignItems: "center", 
    gap: 5,
    whiteSpace: "nowrap",
});

const RightOuterBox = styled(Box)({
    background: `linear-gradient(to left, rgba(20, 20, 20,0), rgba(20,20,20,1)),url(${Background})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between"
});

const RightInnerBox = styled(Box)({
    margin: "10%"
});

const StyledButton = styled(Button)({
    background: "#BFD200",
    color: "black",
    borderRadius: "5px",
    fontSize: "1.5rem",
    "&:hover": {
        background: "#DDDF00"
    }
});

const WhiteText = styled(Typography)({
    color: "white",
    whiteSpace:"nowrap",
});

const GreenText = styled(Typography)({
    color: "#BFD200",
    fontStyle: "italic",
});

//StyledBox als Parent von LeftBox und RightOuterBox?
export default function Hero(props) {
    return (
        <Box bgcolor= "rgba(20,20,20,1)">
            <Header direction="row" display={{sm:"block", xs:"none"}}/>
            <Content direction={{sm:"row", xs:"column-reverse"}}>
                <Handy flex={3}>
                    <Box component="img" 
                        src={require("../Images/handy.png")}
                        height="auto" 
                        width={{sm:"80%",xs:"40%"}} />
                </Handy>
                <Stack direction="column" flex={7}>
                    <HeaderContent direction="row" bgcolor={{xs: "#BFD200", sm: "transparent"}}>
                        <Typography sx={{fontSize:{sm:"2.5rem", xs:"1.5rem"}}}>
                            {props.FirstTitlePart}
                        </Typography>
                        <Typography sx={{fontSize:{sm:"2.5rem", xs:"1.5rem"}, fontWeight:"bold"}}>
                            {props.SecondTitlePart}
                        </Typography>
                    </HeaderContent>
                    <RightOuterBox>
                        <RightInnerBox>
                            <Stack sx={{  display:"flex", 
                                        flexDirection:"column",
                                        alignItems:"flex-end"}}>
                                <GreenText>
                                    {props.CallToAction.Headline}
                                </GreenText>
                                <WhiteText sx={{fontSize:{sm:"2.5rem", xs:"1.5rem"}}}>
                                    {props.CallToAction.Setup}
                                </WhiteText>
                                <WhiteText sx={{fontWeight:"bold", fontSize:{sm:"2.5rem", xs:"1.5rem"}}}>
                                    {props.CallToAction.Punchline}
                                </WhiteText>
                                <WhiteText>
                                    {props.CallToAction.Subline}
                                </WhiteText>
                                <StyledButton>
                                    {props.Button}
                                </StyledButton>
                            </Stack>
                        </RightInnerBox >
                        <RightInnerBox>
                            <Stack direction="row" sx={{display:"flex", 
                                                        flexDirection:"row",
                                                        justifyContent:"space-between"}}>
                                <Stack direction="column">
                                    <WhiteText sx={{fontWeight: "bold", fontSize: "1.5rem"}}>
                                        {props.Stats.Trainer}
                                    </WhiteText>
                                    <WhiteText>
                                        Trainer
                                    </WhiteText>
                                </Stack>
                                <Stack direction="column">
                                    <WhiteText  sx={{fontWeight: "bold", fontSize: "1.5rem"}}>
                                        {props.Stats.Trainings}
                                    </WhiteText>
                                    <WhiteText>
                                        Trainings
                                    </WhiteText>
                                </Stack>
                                <Stack direction="column">
                                    <WhiteText  sx={{fontWeight: "bold", fontSize: "1.5rem"}}>
                                        {props.Stats.Spiele}
                                    </WhiteText>
                                    <WhiteText>
                                        Spiele
                                    </WhiteText>
                                </Stack>
                            </Stack>
                        </RightInnerBox>
                    </RightOuterBox>
                </Stack>
            </Content>
        </Box>
    )
}