import React from "react";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import TimelineAccordionExpand from "./TimelineAccordionExpand";
import { formatDate, getRelativeDuration } from "../../utility/dates.mts";
import { Experience, ExperienceType } from "./types.mts";

type TimelineElementProps = {
  smallScreen: boolean;
  type: ExperienceType;
  experience: Experience;
};

const getIcon = (type: ExperienceType) => {
  switch (type) {
    case "code":
      return <CodeIcon />;
    case "education":
      return <SchoolIcon />;
    default:
      return <WorkIcon />;
  }
};

const ExperienceMetadataContent: React.FC<{ experience: Experience }> = ({
  experience: { dates, dateStart, dateEnd, location },
}) => (
  <>
    <Typography variant="body1">
      {dates
        ? dates
        : `${formatDate(dateStart!)} - ${
            dateEnd ? formatDate(dateEnd) : "Present"
          }`}
    </Typography>
    {dateStart && (
      <Typography variant="body2" color="textSecondary">
        {getRelativeDuration(dateStart, dateEnd)}
      </Typography>
    )}
    <Typography variant="body2" color="textSecondary">
      {location}
    </Typography>
  </>
);

const TimelineElement: React.FC<TimelineElementProps> = ({
  type,
  experience,
  smallScreen,
}) => {
  const { title, organization, briefDescription, bulletPoints } = experience;

  return (
    <TimelineItem>
      {!smallScreen && (
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="textSecondary"
        >
          <ExperienceMetadataContent experience={experience} />
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">{getIcon(type)}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: 2, px: 2 }}>
        {smallScreen && (
          <Box sx={{ mb: 1 }}>
            <ExperienceMetadataContent experience={experience} />
          </Box>
        )}
        <Card sx={{ p: 1 }}>
          <CardContent>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {organization}
            </Typography>
            {(briefDescription || bulletPoints.length != 0) && (
              <Divider sx={{ mb: 1 }} />
            )}
            {briefDescription && (
              <Typography variant="body1">{briefDescription}</Typography>
            )}
            {bulletPoints.length > 0 && (
              <TimelineAccordionExpand
                bulletPoints={bulletPoints}
              ></TimelineAccordionExpand>
            )}
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineElement;
