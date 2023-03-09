import { useState } from "react";
import { Button } from "@mui/material";

const Counter = (props) => { 

    const [counter, setCounter] = useState(props.startValue);

    const handleClick = () => {
        setCounter(counter +1);
    };

    return (
        <Button 
            startIcon={props.icon} 
            onClick={handleClick}
            sx={{color: props.c}}
        >
            {counter}
        </Button>); 
}

export default Counter;