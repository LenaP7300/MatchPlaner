import React from "react";
import {Box, styled, Button, Stack} from "@mui/material"
import Background from "./../Images/HeroBackground.jpg";
import {GreenText, WhiteText, BigWhiteText, BigBlackText, StatsText} from '../Fonts';

/* Background of the title and title of the Hero */
const Header = styled(Stack)({
    position: "absolute",
    width: "100%",
    minHeight: "3.75rem",
    background: "#d4fc04",
});

function HeaderContent(props){
    return (
        <Stack direction="row"
            sx={{   alignItems: "center", 
                    gap: "7px",
                    whiteSpace: "nowrap",
                    padding: "0 7px",}}>
            <BigBlackText>
                {props.FirstTitlePart}
            </BigBlackText>
            <BigBlackText sx={{fontWeight:"bold"}}>
                {props.SecondTitlePart}
            </BigBlackText>
        </Stack>
    )
}

/*Box that wraps the content of the Hero  */
const Content = styled(Stack)({
    position: "relative",
});

/* Picture of Handy at top of the Hero */
function Handy(){
    return (
        <Box component="img" 
        alt="example image"
        src={require("../Images/handy.png")}
        height="auto" 
        width={{sm:"80%",xs:"40%"}} 
        sx={{   padding:"10px", 
                alignItems: "center",}}/>
    )
}

/* Call to action on main part of the Hero */
function CallToAction(props){
    return (
        <Stack sx={{  display:"flex", 
                    flexDirection:"column",
                    alignItems:"flex-end"}}>
            <GreenText>
                {props.CallToAction.Headline}
            </GreenText>
            <BigWhiteText>
                {props.CallToAction.Setup}
            </BigWhiteText>
            <BigWhiteText sx={{fontWeight:"bold"}}>
                {props.CallToAction.Punchline}
            </BigWhiteText>
            <WhiteText>
                {props.CallToAction.Subline}
            </WhiteText>
            <StyledButton>
                {props.Button}
            </StyledButton>
        </Stack>
    )
}

/* Stats at the bottom of the Hero */
function Statistics(props){
    const Statistics = props.Stats.map( stat => {
        return (
            <Stack direction="column">
                <StatsText>
                    {stat.number}
                </StatsText>
                <WhiteText>
                    {stat.name}
                </WhiteText>
            </Stack>
        )
    })
    return (
        <Stack direction="row" sx={{display:"flex", 
                                    flexDirection:"row",
                                    justifyContent:"space-between"}}>
            {Statistics}
        </Stack>
    )
}

/* Box that wraps the main part of the Hero */
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

/* LOS GEHT's Button*/
const StyledButton = styled(Button)({
    background: "#d4fc04",
    color: "black",
    borderRadius: "5px",
    fontSize: "1.5rem",
    marginTop: "8px",
    "&:hover": {
        background: "#DDDF00"
    }
});

export default function Hero(props) {
    return (
        <Box bgcolor= "rgba(20,20,20,1)">
            <Header/>
            <Content direction={{sm:"row", xs:"column-reverse"}}>
                <Box flex={3}>
                    <Handy />
                </Box>
                <Stack direction="column" flex={7}>
                    <HeaderContent {...props}/>
                    <RightOuterBox>
                        <RightInnerBox>
                            <CallToAction {...props } />
                        </RightInnerBox >
                        <RightInnerBox>
                            <Statistics {...props} />
                        </RightInnerBox>
                    </RightOuterBox>
                </Stack>
            </Content>
        </Box>
    )
}