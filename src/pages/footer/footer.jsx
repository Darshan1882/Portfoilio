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
            <div>
              <p>{json.footer.text}</p>
            </div>
            <div className="icon">
              {links.map((link, index) => (
                <a
                  key={`social_media_${index}`}
                  href={link.link}
                  style={{ color: "#545658", fontSize: "20px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        
      
    </footer>
  );
}

export default footer;
