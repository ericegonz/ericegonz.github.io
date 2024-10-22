import { default as MTimeline } from "@mui/lab/Timeline";
import { timelineItemClasses, timelineOppositeContentClasses } from "@mui/lab";
import TimelineElement from "./TimelineElement";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { timelineData } from "../../content/timeline.data.mts";
import { ExperienceType } from "./types.mts";

const responsiveTimelineStyle = (small: boolean) => {
  if (small) {
    return {
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    };
  }
  return {
    [`& .${timelineOppositeContentClasses.root}`]: {
      flex: 0.3,
    },
  };
};

const Timeline = () => {
  const { code, education, generic } = timelineData;

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjust for small screens

  return (
    <MTimeline
      sx={{
        ...responsiveTimelineStyle(smallScreen),
      }}
    >
      {code.map((experience, index) => (
        <TimelineElement
          smallScreen={smallScreen}
          key={`${experience.title}-${index}`}
          type={ExperienceType.Code}
          experience={experience}
        />
      ))}
      {generic.map((experience, index) => (
        <TimelineElement
          smallScreen={smallScreen}
          key={`${experience.title}-${index}`}
          type={ExperienceType.Generic}
          experience={experience}
        />
      ))}
      {education.map((experience, index) => (
        <TimelineElement
          smallScreen={smallScreen}
          key={`${experience.title}-${index}`}
          type={ExperienceType.Education}
          experience={experience}
        />
      ))}
    </MTimeline>
  );
};

export default Timeline;
