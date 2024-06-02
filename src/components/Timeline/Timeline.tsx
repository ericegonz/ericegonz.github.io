import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";
import { timelineData } from "./timeline-data.mts";
import { mainColors } from "../../theme.mts";

const { primary } = mainColors;

const Timeline = () => {
  const { code } = timelineData;
  const { education } = timelineData;
  const { generic } = timelineData;
  return (
    <VerticalTimeline className={"resume-timeline"} lineColor={primary}>
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
    </VerticalTimeline>
  );
};
export default Timeline;
