import Counter from "./Counter";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Votingbox = () => {
    return (
        <Box sx={{borderRadius: "5px", border: '1px solid #d4fc04', p: "5px 13px"}}>
            <Typography variant="h5" sx={{color: "#d4fc04"}}>Geht's Dir auch so?</Typography>
            <Box sx={{display: "flex", alignItems: "center", m:"0 20%"}}>
                <Counter icon={<ThumbUpOffAltIcon />} c={"white"}></Counter>
                <Counter icon={<ThumbDownOffAltIcon />} c={"red"}/>
            </Box>
        </Box>
    );
}

export default Votingbox;