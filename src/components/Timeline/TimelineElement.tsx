import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { List, ListItem, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { Experience, ExperienceType } from "./timeline-data.mts";
import { mainColors } from "../../theme.mts";

const { primary, secondary } = mainColors;

type Props = {
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

const TimelineElement = ({ type, experience }: Props) => {
  const {
    dates,
    title,
    subtitle,
    institution,
    location,
    briefDescription,
    bulletPoints,
  } = experience;
  return (
    <VerticalTimelineElement
      icon={getIcon(type)}
      date={dates}
      iconStyle={{ background: secondary, color: "white" }}
      contentArrowStyle={{
        borderRight: `7px solid ${primary}`,
      }}
      contentStyle={{
        boxShadow: "0 0 13px #ccc",
        padding: "2% 3%",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      <Typography variant="subtitle2">
        {institution} | {location}
      </Typography>
      <Typography variant="body2">{briefDescription}</Typography>
      <List dense={true}>
        {bulletPoints.map((bullet) => (
          <ListItem>• {bullet}</ListItem>
        ))}
      </List>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
