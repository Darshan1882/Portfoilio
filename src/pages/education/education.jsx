import React from "react";
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import json from "../../data.json";

const Education = () => {
  const Icons = [
    {
      date: "2022 - Continue",
      heading: " Front End Army",
      text: "Job",
      icon: <MdBusinessCenter />,
    },
    {
      date: "2018 - 2020",
      heading: "Smt. S. M. Panchal Science College, Talod",
      text: "College Education",
      icon: <IoMdSchool />,
    },
    {
      date: "2014 - 2018",
      heading: "Shri C D Patel High School ,Talod",
      text: "Secondary And Highsecondary School Education",
      icon: <IoMdSchool />,
    },
  ];
  return (
    <div>
      <div className="Eduction" id="education">
        <div>
          <h1 className="he">{json.education.title}</h1>
          <div className="vartical">
            <VerticalTimeline lineColor="black">
              {Icons.map((icon_data, index) => (
                <VerticalTimelineElement
                  key={`education_Icons${index}`}
                  className="vertical-timeline-element--education"
                  date={icon_data.date}
                  iconStyle={{ background: "black", color: "white" }}
                  icon={icon_data.icon}
                >
                  <h3 className="vertical-timeline-element-title">
                    {icon_data.heading}
                  </h3>
                  <p>{icon_data.text}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
