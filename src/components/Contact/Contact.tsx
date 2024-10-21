import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const email = "ericegonz.se@gmail.com";
const linkedIn = "https://www.linkedin.com/in/ericegonz/";

const Contact = () => (
  <Box>
    <Typography>
      Shoot me an email at <Link to={`mailto:${email}`}>{email}</Link>, or feel
      free to reach out to me on <Link to={linkedIn}>LinkedIn</Link>.
    </Typography>
  </Box>
);
export default Contact;
