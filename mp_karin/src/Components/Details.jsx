import { Typography} from "@mui/material";
import { Box, Container, Stack, styled } from "@mui/system";
import Votingbox from './Votingbox';
import handyBlank from '../img/handyBlank.png';

const DetailsBox = styled(Box)(({theme}) => ({
    backgroundColor: "#141414",
    backgroundImage: `url(${handyBlank})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 80%",
    backgroundPosition: "center 40%",
    margin: "0, 0",
}));

const CustomStack = (props) => {
    return (
        <Stack 
        direction={{ sm: 'column', md: 'row' }} 
        alignItems="center"
        spacing={{ sm: 0, md: 3}}
        sx={{margin:"20px 20%"}}
    >
        <Typography variant="h5" sx={{color: "white", whiteSpace: "nowrap"}}>{props.text}</Typography>
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
        sx={{margin:"20px 20%"}}
    >
        <Box sx={{textAlign: "center"}}>
            <img
                src={props.img}
                alt="handy Image"
                style={{ maxWidth: "80%"}}
            />
        </Box>
        <Typography variant="h5" sx={{color: "white", whiteSpace: "nowrap"}}>{props.text}</Typography>

    </Stack>
    );
}




const TextStack = () => {
    return (
        <Stack 
        direction={{ sm: 'column', md: 'row' }} 
        spacing={{ md: 2 }}
        sx={{color: "#d4fc04", whiteSpace: "nowrap"}}
        />
    );
}

const CustomBox = styled(Box)(({ theme }) => ({
    marginBottom: "2rem",
    display: "flex",
    gap: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
        gap: theme.spacing(0),
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
}));

const ColumnReverseBox = styled(Box)(({ theme }) => ({
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
        gap: theme.spacing(0),
        flexDirection: "column-reverse",
        alignItems: "center",
        textAlign: "center",
    },
}));

const CustomBox2 = styled(Box)(({ theme }) => ({
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",    
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
}));


const Details = () => {  
    return (
        <DetailsBox>
            <Typography variant="h4" 
                sx={{color: "#d4fc04", marginBottom: "10%"}}
            >
                Kommt dir das bekannt vor?
            </Typography>

            <Box sx={{m: "10% 10%"}}>

                <CustomReverseStack img={require("../img/image(2).png")} text="Kurzfristige"/>

                <CustomStack img={require("../img/image(2).png")} text="Kurzfristige Absagen"/>

                <CustomReverseStack img={require("../img/image(2).png")} text="Hallao"/>

                <CustomStack img={require("../img/image(2).png")} text="Kurzfristige Absagen"/>

                <CustomReverseStack img={require("../img/image(2).png")} text="Hallao"/>

            </Box>
            <CustomBox2>
                <TextStack>
                    <Typography variant="h4">Als Coach musst Du</Typography>
                    <Typography variant="h4" sx={{fontWeight: "bold"}}>ALLES MACHEN.</Typography>
                </TextStack>
                <Votingbox />
            </CustomBox2>
        </DetailsBox>
    );
  };    

export default Details;
