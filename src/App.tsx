import { ThemeProvider } from "@emotion/react";
// @ts-expect-error -- TODO create a d.ts file here
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { themeOptions } from "./theme.mts";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Typography,
} from "@mui/material";
import HeroParticles from "./components/Particles/Particles";
import Hero from "./components/Hero/Hero";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
      <ScrollToHashElement behavior="smooth" />
      <Navbar />
      <Box id="about" sx={{ height: { xs: "60vh", md: "60vh" } }}>
        <Hero />
        <HeroParticles />
      </Box>
      <Container sx={{ mt: "30px" }}>
        {[
          {
            id: "about",
            heading: "About",
            component: <About />,
          },
          {
            id: "projects",
            heading: "Projects",
            component: <Projects />,
          },
          {
            id: "work",
            heading: "Work",
            component: <Timeline />,
          },
          {
            id: "contact",
            heading: "Let's Build Stuff Together",
            component: <Contact />,
          },
        ].map(({ heading, component, id }, index) => (
          <Box key={index} sx={{ mb: 10 }}>
            <Typography id={id} sx={{ mb: 2 }} variant="h4">
              {heading}
            </Typography>
            {component}
          </Box>
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
