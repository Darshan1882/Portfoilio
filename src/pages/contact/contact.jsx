import React, { useState } from "react";
import "./contact.css";
import json from "../../data.json";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setnameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setmessageError] = useState(false);
  const nameRegex = /^[a-z ,.'-]+$/i;
  const emailRegex = /\S+@\S+\.\S+/;

  const validation = () => {
    let formisvalid = true;

    if (name.trim().length === 0) {
      setnameError("Please Enter Name");
      formisvalid = false;
    } else if (nameRegex.test(name)) {
      setnameError("");
    } else {
      setnameError("Please Enter Valid Name");
      formisvalid = false;
    }

    if (email.trim().length === 0) {
      setemailError("Please Enter Email");
      formisvalid = false;
    } else if (emailRegex.test(email)) {
      setemailError("");
    } else {
      setemailError("Please Enter Valid Email");
      formisvalid = false;
    }

    if (message.trim().length === 0) {
      setmessageError("Please Enter Message ");
      formisvalid = false;
    } else if (nameRegex.test(message)) {
      setmessageError("");
    } else {
      setmessageError("Please Enter Valid Message");
      formisvalid = false;
    }
    return formisvalid;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      axios
        .post("https://633eb5ab0dbc3309f3bb64fb.mockapi.io/portfolio", {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        })
        .then((e) => {

          setName("");
          setEmail("");
          setMessage("");
        });
    }
  };
  return (
    <div className="containers ">
      <h1 className="hading"  id="contact">{json.contectMe.title}</h1>
      <div className="mainn">
        <div className="npm">
          <iframe
            title="map"
            width="100%"
            src={json.contectMe.map}
            height="375px"
            loading="lazy"
          ></iframe>
        </div>
        <form onSubmit={onSubmit}>
          <h1 className="text-primary">Send Message</h1>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              onChange={(event) => [
                setName(event.target.value),
                setnameError(""),
              ]}
              value={name}
              type="text"
              id="name"
            />
            <div className="text-danger ">{nameError}</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              onChange={(event) => [
                setEmail(event.target.value),
                setemailError(""),
              ]}
              value={email}
              type="email"
              id="email"
            />
            <div className="text-danger">{emailError}</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              onChange={(event) => [
                setMessage(event.target.value),
                setmessageError(""),
              ]}
              value={message}
              id="message"
            />
            <div className="text-danger">{messageError}</div>
          </div>
          <div className="submit">
            <button
              className="btn btn-danger "
              type="submit"
              onClick={onSubmit}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;