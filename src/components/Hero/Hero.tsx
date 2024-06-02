import { Box, Typography } from "@mui/material";
import me from "../../assets/me.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Box
      className={styles.overlay}
      sx={{ textAlign: "center", top: { xs: "35vh", md: "35vh" } }}
    >
      <img
        style={{ height: "290px", borderRadius: "50%", marginBottom: "20px" }}
        alt="Eric Gonzalez"
        src={me}
      />
      <Typography variant="h3" gutterBottom>
        hi, i'm eric.
      </Typography>
      <Typography variant="subtitle1">software engineer</Typography>
      <Typography variant="subtitle1">graphic designer</Typography>
    </Box>
  );
};

export default Hero;
