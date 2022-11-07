import React from "react";
import "./footer.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import json from "../../data.json";

function footer() {
  const links =[
    {icon:<FaLinkedinIn /> ,link:json.home.links.linkedinIn},
    {icon:<FaFacebookF />,link:json.home.links.facebook},
    {icon:<FaInstagram />,link: json.home.links.instagram}
  ]

  return (
    <footer>
          <div className=" main">
            <div className="">
              <p>{json.footer.text}</p>
            </div>
            <div className=" ">
              {links.map((a, i) => (
                <a
                  key={i}
                  href={a.link}
                  style={{ color: "#545658", fontSize: "20px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {a.icon}
                </a>
              ))}
            </div>
          </div>
        
      
    </footer>
  );
}

export default footer;
