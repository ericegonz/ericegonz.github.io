import { Box, Container, Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Paper component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        ></Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Eric Gonzalez
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
