import { Typography} from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import Votingbox from './Votingbox';
import handyBlank from '../img/handyBlank.png';

const ColumnReverseBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
    },
  }));

const CustomBox2 = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",    
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

const Details = () => {  
    return (
        <Box sx={{backgroundColor: "#141414", margin: "0, 0"}}>
            <Typography variant="h4" sx={{color: "#d4fc04"}}>Kommt dir das bekannt vor?</Typography>
            <Box sx={{m: "0 10%"}}>
                <ColumnReverseBox>
                    <Box sx={{flex: 1}}>
                    <img
                        src={require("../img/image(2).png")}
                        alt="handy Image"
                        style={{ maxWidth: "50%", marginBottom: "2rem" }}
                    />
                    </Box >
                    <Typography variant="h5" sx={{color: "white"}}>Kurzfristige Absagen</Typography>
                </ColumnReverseBox>
                <CustomBox2>
                    <Typography variant="h5" sx={{color: "white"}}>Kurzfristige Absagen</Typography>
                    <Box sx={{flex: 1}}>
                        <img
                            src={require("../img/image(2).png")}
                            alt="handy Image"
                            style={{ maxWidth: "50%", marginBottom: "2rem" }}
                        />
                    </Box>
                </CustomBox2>
                <ColumnReverseBox>
                    <Box sx={{flex: 1}}>
                        <img
                            src={require("../img/image(2).png")}
                            alt="handy Image"
                            style={{ maxWidth: "50%", marginBottom: "2rem" }}
                        />
                    </Box>
                    <Typography variant="h5" sx={{color: "white"}}>Kurzfristige Absagen</Typography>
                </ColumnReverseBox>
            </Box>
            <CustomBox2 sx={{justifyContent: "space-between", m: "0 10%"}}>
                <Box sx={{display: "flex", gap: 1, color: "#d4fc04"}}>
                    <Typography variant="h4">Als Coach musst Du</Typography>
                    <Typography variant="h4" sx={{fontWeight: "bold"}}>ALLES MACHEN.</Typography>
                </Box>
                <Votingbox />
            </CustomBox2>
        </Box>
    );
  };    

export default Details;
