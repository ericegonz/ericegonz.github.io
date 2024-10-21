import React from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { Experience, ExperienceType } from "./timeline-data.mts";
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

type TimelineElementProps = {
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

const TimelineElement: React.FC<TimelineElementProps> = ({
  type,
  experience,
}) => {
  const {
    dates,
    dateStart,
    dateEnd,
    title,
    organization,
    location,
    briefDescription,
    bulletPoints,
  } = experience;
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="textSecondary"
      >
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
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">{getIcon(type)}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: 2, px: 2 }}>
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
