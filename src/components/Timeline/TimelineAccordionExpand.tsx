import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const TimelineAccordionExpand: React.FC<{ bulletPoints: string[] }> = ({
  bulletPoints,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    bulletPoints.length > 0 && (
      <Accordion
        sx={{
          mt: 1,
          boxShadow: "none",
          border: "1px solid #ccc",
        }}
        expanded={expanded}
        onChange={handleToggle}
      >
        <AccordionSummary expandIcon={<ArrowDownward />}>
          <Typography variant="body1" color="textSecondary">
            {expanded ? "Read Less" : "Read More"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <List dense>
            {bulletPoints.map((point, index) => (
              <ListItem key={index}>
                <Typography variant="body2">• {point}</Typography>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    )
  );
};

export default TimelineAccordionExpand;
