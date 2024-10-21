import { default as MTimeline } from "@mui/lab/Timeline";
import { timelineOppositeContentClasses } from "@mui/lab";
import TimelineElement from "./TimelineElement";
import { timelineData } from "./timeline-data.mts";

const Timeline = () => {
  const { code } = timelineData;
  const { education } = timelineData;
  const { generic } = timelineData;
  return (
    <MTimeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.3,
        },
      }}
    >
      {code.map((experience) => (
        <TimelineElement type="code" experience={experience}></TimelineElement>
      ))}
      {generic.map((experience) => (
        <TimelineElement
          type="generic"
          experience={experience}
        ></TimelineElement>
      ))}
      {education.map((experience) => (
        <TimelineElement
          type="education"
          experience={experience}
        ></TimelineElement>
      ))}
    </MTimeline>
  );
};
export default Timeline;
