import React from "react";
import "./aboutus.css";
import json from "../../data.json";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  AOS.init();
  return (
    
    <div className="main_div " >
      <div className="hadding" >
        <h1 className="he" id="about">{json.aboutMe.title}</h1>
      </div>
      <div className="second_div" >
        <div className="container" data-aos={"zoom-in-down"}>
          <div className="row">
            <div className="col-lg-11">
              {json.aboutMe.progress.map((a, i) => (
                <div key={i}>
                  <h3 className="progress-title">{a.title}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-danger"
                      style={{ width: a.width }}
                    >
                      <div className="progress-value">{a.width}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="para" data-aos={"zoom-in-down"}>
          {json.aboutMe.paragraph.split("  ").map((a, index) => (
            <p key={index}>{a}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
