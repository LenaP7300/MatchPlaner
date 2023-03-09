import { Typography} from "@mui/material";
import { Box, Container, Stack, styled } from "@mui/system";
import Votingbox from './Votingbox';
import handyBlank from '../Images/handyBlank.png';

const SectionBox = styled(Box)(({theme}) => ({
    backgroundColor: "#141414",
    backgroundImage: `url(${handyBlank})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 60%",
    backgroundPosition: "center 50%",
    margin: "0, 0",
    [theme.breakpoints.down("md")]: {
        backgroundSize: "auto 50%",
    },
    [theme.breakpoints.down("sm")]: {
        backgroundImage: "none",        
    },
}));

const CustomStack = (props) => {
    return (
        <Stack 
        direction={{ sm: 'column', md: 'row' }} 
        alignItems="center"
        spacing={{ sm: 0, md: 3}}
        sx={{margin:"20px 15%"}}
    >
        <Typography variant="h6" sx={{color: "white", textAlign: "center", display: {sm: "none", md: "block"}}} >{props.text}</Typography>
        <Box sx={{textAlign: "center"}}>
            <img
                src={props.img}
                alt="handy Image"
                style={{ maxWidth: "80%"}}
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
        sx={{margin:"20px 15%"}}
        >
        <Box sx={{textAlign: "center"}}>
            <img
                src={props.img}
                alt="handy Image"
                style={{ maxWidth: "80%"}}
            />
        </Box>
        <Typography variant="h6" sx={{color: "white", textAlign: "center"}}>{props.text}</Typography>

    </Stack>
    );
}

const Section = () => {  
    return (
        <SectionBox sx={{padding: "10% 5%"}}>

            <Stack 
                direction={{ sm: 'column', md: 'row' }} 
                spacing={{ sm: 3, md: 5 }}
                sx={{color: "#d4fc04"}}
            >
                <Typography variant="h4" 
                    sx={{color: "#d4fc04", marginBottom: "10%"}}
                >Kommt dir DAS bekannt vor?</Typography>
            </Stack>

            <Box sx={{m: "0% 10%"}}>

                <CustomReverseStack img={require("../Images/image(2).png")} text="Kurzfristige Absagen"/>

                <CustomStack img={require("../Images/image(3).png")} text="Komplizierte Testspielsuche"/>

                <CustomReverseStack img={require("../Images/image(4).png")} text="Schwere Entscheidungen bei der Belastungssteuerung"/>

                <CustomStack img={require("../Images/image(5).png")} text="Eingeschränkte Trainingsmöglichkeiten"/>

                <CustomReverseStack img={require("../Images/image(6).png")} text="Terminprobleme"/>

            </Box>

            <Stack
                direction={{ sm: 'column', md: 'row' }} 
                justifyContent="space-evenly"
                spacing={{ sm: 2}}
                sx={{alignItems: "center"}}
            >
                <Stack 
                    direction={{ sm: 'column', md: 'row' }} 
                    spacing={{ md: 2}}
                    sx={{color: "#d4fc04", whiteSpace: "nowrap"}}
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
