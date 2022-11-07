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
      <div className="main row justify-cotent-center pt-2 row-2 px-3">
        <div className="col-12">
          <div className="row row-2 justify-content-between">
            <div className="col-sm-3">
              <p>{json.footer.text}</p>
            </div>
            <div className="icons col-sm-3 ml-5 order-last">
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
        </div>
      </div>
    </footer>
  );
}

export default footer;
