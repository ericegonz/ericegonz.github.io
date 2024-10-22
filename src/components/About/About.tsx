import { Box, Typography, Stack } from "@mui/material";
import { introSection, aboutSections } from "../../content/about.data";

const About = () => {
  return (
    <Box>
      <Typography variant="body1" component="p" sx={{ mb: 2 }}>
        {introSection}
      </Typography>

      {aboutSections.map((section, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            {section.content}
          </Typography>
          <Stack
            sx={{ mt: 3 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {section.icons}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default About;
