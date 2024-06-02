import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { themeOptions } from "./theme.mts";
import { Box, Container, createTheme } from "@mui/material";
import HeroParticles from "./components/Particles/Particles";
import DefaultComponent from "./components/Default/Default";
import Hero from "./components/Hero/Hero";
// import Footer from "./components/Footer/Footer";
import Timeline from "./components/Timeline/Timeline";

const App = () => {
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <Navbar />
      <Box sx={{ height: { xs: "60vh", md: "60vh" } }}>
        <Hero />
        <HeroParticles />
      </Box>
      <Container sx={{ height: "800px", mt: "30px" }}>
        <Timeline />
        <DefaultComponent />
      </Container>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default App;
