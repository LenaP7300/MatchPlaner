import { Typography, Grid} from "@mui/material";
import { Box, Stack, styled } from "@mui/system";
import Votingbox from './Votingbox';
import handyBlank from '../../images/handy_empty.png';
import { BigText } from "./Fonts";

const AgreementBox = styled(Box)(({theme}) => ({
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
            <Typography
                lineheight={1}
                sx={{
                    color: "white", 
                    textAlign: "center", 
                    display: {xs: "none", sm: "none", md: "block"}}} 
                >
                    {props.text}
            </Typography>
            <Box backgroundColor="white"
                sx={{textAlign: "center",
                borderRadius: "5px",
                maxWidth: "300px"}}>
                <Typography color="primary.contrastText"
                    variant="smallLight"
                    component="p"
                    p="4px"
                    textAlign="start"
                    sx={{textAlign: "center"}}>
                    {props.message}
                </Typography>
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
        <Box backgroundColor="white"
            sx={{textAlign: "center",
                borderRadius: "5px",
                maxWidth: "300px"}}>
            <Typography
                color="primary.contrastText"
                variant="smallLight"
                component="p"
                p="4px"
                textAlign="start"
                >
                {props.message}
            </Typography>
        </Box>
        <Typography lineheight={1} 
            sx={{color: "white", textAlign: "center", 
            display: {xs: "none", sm: "none", md: "block"}}}>
                {props.text}
        </Typography>

    </Stack>
    );
}

const Agreement = (props) => {  

    return (
        <AgreementBox sx={{padding: "5% 5%"}}>

            <Typography variant="h4" sx={{textAlign: {sm: "center", md: "left" }, color: "#d4fc04", }}
            >Kommt dir DAS bekannt vor?</Typography>

            <Box sx={{m: "0 0"}}>

                <CustomReverseStack 
                    message="ich packs wahrscheinlich nicht mehr bin spontan essen mit 
                            Oma Opa weil Opa B-day hatte vor paar Tagen" 
                    text="Kurzfristige Absagen"/>

                <CustomStack 
                    message="Servus, unser Plan steht schon. Wir haben leider keine
                            Kapazität mehr für ein Testspiel..."
                    text="Komplizierte Testspielsuche"/>

                <CustomReverseStack 
                    message="Hab vom Training gestern mega Muskelkater und würde lieber
                            Pause machen, damit ich fürs Spiel am Samstag fit bin" 
                    text="Schwere Entscheidungen bei der Belastungssteuerung"/>

                <CustomStack 
                    message="Hey, ihr habt heute erst ab 20 Uhr den ganzen Platz. Ab 19
                            Uhr nen halben" 
                    text="Eingeschränkte Trainingsmöglichkeiten"/>

                <CustomReverseStack 
                    message="Hallo Kollegen der E2. Wir (C2) haben am Montag um 19 Uhr
                    ein Spiel. Mit Alex hatte ich schon gesprochen. Ich wusste
                    nicht, dass ihr von der E2 auch drauf seid" 
                    text="Terminprobleme"/>

            </Box>

            <Stack
                direction={{ sm: 'column', md: 'row' }} 
                justifyContent="space-between"
                spacing={{ xs: 2, sm: 2}}
                sx={{alignItems: "center", marginTop: {md: "5%", lg:"0"}, marginRight: {md: "0", lg: "20%"}}}
            >
                <Grid item alignSelf="flex-end"
                    direction={{ sm: 'column', md: 'row' }} 
                    sx={{whiteSpace: "nowrap", m: {md: "15% 0", lg: "0 0"}}}
                >
                    <BigText display="inline" variant="largeLight">Als Coach musst Du{" "}</BigText>
                    <BigText 
                        display="inline"
                        textTransform="uppercase"
                        variant="largeLight"
                        color={props.color && "primary"}
                        id="coach-tasks"
                        sx={{fontWeight: "bold"}}>alles machen.</BigText>
                </Grid>
                <Votingbox setCounterAgreement={props.setCounterAgreement}
                    counterAgreement={props.counterAgreement}/>
            </Stack>
            
        </AgreementBox>
    );
  };    

export default Agreement;
