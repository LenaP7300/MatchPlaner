import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Counter from "./Counter";

const Votingbox = () => {
    return (
        <Box sx={{
                width: "175px",
                borderRadius: "5px", 
                border: '1px solid #d4fc04', 
                p: "5px 13px", 
                textAlign:"center",
                alignItems: "center"}}>
            <Typography variant="h5" sx={{color: "#d4fc04"}}>Geht's Dir auch so?</Typography>
            <Box sx={{display: "flex", alignItems: "center", m:"0 20%"}}>
                <Counter startValue={134} icon={<ThumbUpOffAltIcon />}c={"white"}/>
                <Counter startValue={4} icon={<ThumbDownOffAltIcon />} c={"red"}/>
            </Box>
        </Box>
    );
}

export default Votingbox;