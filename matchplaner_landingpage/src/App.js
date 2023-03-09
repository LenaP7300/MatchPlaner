import './App.css';
import {Box} from "@mui/material"
import Hero from './Components/Hero';
import Section from './Components/Section';
import HeroData from './HeroData'

function App() {
  return (
    <Box className="App">
      <Hero {...HeroData} />
      <Section />
    </Box>
  );
}

export default App;
