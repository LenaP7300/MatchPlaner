import { Box, Stack, styled } from "@mui/system";
import Votingbox from './Votingbox';
import handyBlank from '../Images/handyBlank.png';
import { BigGreenText, MessageText } from '../Fonts';

/** Box wrapping the section */
const SectionBox = styled(Box)(({theme}) => ({
    backgroundColor: "#141414",
    backgroundImage: `url(${handyBlank})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 65%",
    backgroundPosition: "center 50%",
    margin: "0, 0",
    [theme.breakpoints.down("md")]: {
        backgroundSize: "auto 50%",
        backgroundPosition: "center 30%",
    },
    [theme.breakpoints.down("sm")]: {
        backgroundPosition: "center 20%",
        backgroundSize: "auto 50%",        
    },
    [theme.breakpoints.down("xs")]: {
        backgroundPosition: "center 30%",
        backgroundSize: "auto 45%",        
    },
}));

/** Stack for Text Messages and Explanations */
const CustomStack = (props) => {
    return (
        <Stack 
            direction={{ sm: 'column', md: 'row' }} 
            alignItems="center"
            spacing={{ sm: 0, md: 0}}
            justifyContent= "space-evenly"
            sx={{margin:"20px 5%", marginRight:"20%"}}
        >

            <MessageText>{props.text}</MessageText>
            <Box sx={{textAlign: "center"}}>
                <img
                    src={props.img}
                    alt="handy Image"
                    style={{ width: "60%"}}
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
            spacing={{ sm: 0, md: 1}}
            justifyContent= "flex-start"
            sx={{margin:"20px 5%", marginLeft:"20%"}}
        >
        <Box sx={{textAlign: "center"}}>
            <img
                src={props.img}
                alt="handy Image"
                style={{ maxWidth: "60%"}}
            />
        </Box>
        <MessageText>{props.text}</MessageText>
    </Stack>
    );
}

const Section = () => {  
    return (
        <SectionBox sx={{padding: "5% 5%"}}>

            <BigGreenText sx={{marginBottom: {md: "10%", sm: "5", xs: "0"}}}>
                Kommt dir <Box component="span" fontWeight="bold">DAS</Box> bekannt vor?
            </BigGreenText>

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
                sx={{alignItems: "center", 
                    marginTop: {sm: "10%", md: "5%", lg:"0"}, 
                    marginRight: {md: "0", lg: "20%"},                 
                    }}
            >
                <BigGreenText sx={{marginTop: {sm:"0%", md:"0"}}}>
                    Als Coach musst Du <Box component="span" fontWeight="bold">ALLES MACHEN.</Box>
                </BigGreenText>
                <Votingbox />
            </Stack>
            
        </SectionBox>
    );
  };    

export default Section;
