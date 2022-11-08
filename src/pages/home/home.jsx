import React,{useEffect} from "react";
import "./home.css";
import json from "../../data.json";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Home = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();  
  }, []);
  const links =[
    {icon:<FaLinkedinIn /> ,link:json.home.links.linkedinIn},
    {icon:<FaFacebookF />,link:json.home.links.facebook},
    {icon:<FaInstagram />,link: json.home.links.instagram}
  ]

  return (
    <div>
      <section className="Home" id="home" >
        <div className="main_div_">
          <p className="name" data-aos={"fada-up"} data-aos-delay={"100"}>
            <b>{json.home.title}</b>
          </p>
          <p className="p">{json.home.text} </p>
          <div className="logos">
            {links.map((a, i) => (
                <a
                  key={i}
                  href={a.link}
                  style={{ color: "white", fontSize: "35px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {a.icon}
                </a>
))}
          </div>
          <div />
        </div>
      </section>
    </div>
  );
};
export default Home;
