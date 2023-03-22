import React from "react";
import {Box, styled, Button, Stack} from "@mui/material"
import Background from "../../images/background-image-catcher.jpg"
import {GreenText, WhiteText, BigWhiteText, BigBlackText, StatsText} from './Fonts';

/* Background of the title and title of the Catcher */
const Header = styled(Stack)({
    position: "absolute",
    width: "100%",
    minHeight: "3.75rem",
    background: "#d4fc04",
});

function HeaderContent(){
    return (
        <Stack direction="row"
            sx={{   alignItems: "center", 
                    whiteSpace: "nowrap",
                    padding: "0 7px",}}>
            <BigBlackText>
                Dein Digitaler <Box component="span" fontWeight="bold">
                Co-Trainer
                </Box>
            </BigBlackText>

        </Stack>
    )
}

/*Box that wraps the content of the Catcher  */
const Content = styled(Stack)({
    position: "relative",
});

/* Picture of Handy at top of the Catcher */
function Handy(){
    return (
        <Box component="img" 
        alt="example image"
        src={require("../../images/handy.png")}
        height="auto" 
        width={{sm:"80%",xs:"40%"}} 
        sx={{   padding:"10px", 
                alignItems: "center",}}/>
    )
}

/* Call to action on main part of the Catcher */
function CallToAction(){
    return (
        <Stack sx={{  display:"flex", 
                    flexDirection:"column",
                    alignItems:"flex-end"}}>
            <GreenText>
                COACHING MADE EASY
            </GreenText>
            <BigWhiteText>
                MINIMALER AUFWAND.
            </BigWhiteText>
            <BigWhiteText sx={{fontWeight:"bold"}}>
                MAXIMALER ERFOLG.
            </BigWhiteText>
            <WhiteText>
                Weil der Trainerjob Spaß machen soll!
            </WhiteText>
            <StyledButton>
                LOS GEHT'S
            </StyledButton>
        </Stack>
    )
}

/* Stats at the bottom of the Catcher */
function Statistics(props){
    const Statistics = props.Stats.map( stat => {
        return (
            <Stack direction="column">
                <Box direction="row" display="flex">
                    <StatsText id={stat.id}/>
                    <StatsText>{stat.appendum}</StatsText>
                </Box>
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

/* Box that wraps the main part of the Catcher */
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

export default function Catcher(props) {

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