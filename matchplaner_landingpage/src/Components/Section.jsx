import { Typography} from "@mui/material";
import { Box, Stack, styled } from "@mui/system";
import Votingbox from './Votingbox';
import handyBlank from '../Images/handyBlank.png';

const SectionBox = styled(Box)(({theme}) => ({
    backgroundColor: "#141414",
    backgroundImage: `url(${handyBlank})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 70%",
    backgroundPosition: "center 25%",
    margin: "0, 0",
    [theme.breakpoints.down("md")]: {
        backgroundSize: "auto 50%",
        backgroundPosition: "center 30%",
    },
    [theme.breakpoints.down("sm")]: {
        backgroundPosition: "center 30%",
        backgroundSize: "auto 50%",        
    },
    [theme.breakpoints.down("xs")]: {
        backgroundPosition: "center 30%",
        backgroundSize: "auto 45%",        
    },
}));

const CustomStack = (props) => {
    return (
        <Stack 
            direction={{ sm: 'column', md: 'row' }} 
            alignItems="center"
            spacing={{ sm: 0, md: 3}}
            justifyContent= "space-evenly"
            sx={{margin:"20px 5%", marginRight:"20%"}}
        >
            <Typography variant="h5" 
                sx={{
                    color: "white", 
                    textAlign: "center", 
                    display: {xs: "none", sm: "none", md: "block"}}} 
                >
                    {props.text}</Typography>
            <Box sx={{textAlign: "center"}}>
                <img
                    src={props.img}
                    alt="handy Image"
                    style={{ maxWidth: "50%"}}
                />
            </Box>
    </Stack>
    );
}

const CustomReverseStack = (props) => {
    return (
        <Stack 
        direction={{ sm: 'column-reverse', md: 'row' }} 
        alignItems="center"
        spacing={{ sm: 0, md: 3}}
        justifyContent= "flex-start"
        sx={{margin:"20px 5%", marginLeft:"20%"}}
        >
        <Box sx={{textAlign: "center"}}>
            <img
                src={props.img}
                alt="handy Image"
                style={{ maxWidth: "50%"}}
            />
        </Box>
        <Typography variant="h5" sx={{color: "white", textAlign: "center", display: {xs: "none", sm: "none", md: "block"}}}>{props.text}</Typography>

    </Stack>
    );
}

const Section = () => {  
    return (
        <SectionBox sx={{padding: "5% 5%"}}>

            <Typography variant="h4" sx={{textAlign: {sm: "center", md: "left" }, color: "#d4fc04", }}
            >Kommt dir DAS bekannt vor?</Typography>

            <Box sx={{m: "0 0"}}>

                <CustomReverseStack 
                    img={require("../Images/image(2).png")} text="Kurzfristige Absagen"/>

                <CustomStack 
                    img={require("../Images/image(3).png")} text="Komplizierte Testspielsuche"/>

                <CustomReverseStack 
                    img={require("../Images/image(4).png")} text="Schwere Entscheidungen bei der Belastungssteuerung"/>

                <CustomStack 
                    img={require("../Images/image(5).png")} text="Eingeschränkte Trainingsmöglichkeiten"/>

                <CustomReverseStack 
                    img={require("../Images/image(6).png")} text="Terminprobleme"/>

            </Box>

            <Stack
                direction={{ sm: 'column', md: 'row' }} 
                justifyContent="space-between"
                spacing={{ xs: 2, sm: 2}}
                sx={{alignItems: "center", marginTop: {md: "5%", lg:"0"}, marginRight: {md: "0", lg: "20%"}}}
            >
                <Stack 
                    direction={{ sm: 'column', md: 'row' }} 
                    spacing={{ md: 2}}
                    sx={{color: "#d4fc04", whiteSpace: "nowrap", m: {md: "15% 0", lg: "0 0"}}}
                >
                    <Typography variant="h4">Als Coach musst Du</Typography>
                    <Typography variant="h4" sx={{fontWeight: "bold"}}>ALLES MACHEN.</Typography>
                </Stack>
                <Votingbox />
            </Stack>
            
        </SectionBox>
    );
  };    

export default Section;
