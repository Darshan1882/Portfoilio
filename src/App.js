import { useRef } from "react";
import Navbar from "./pages/navbar/navbar";
import "./App.css";
import Home from "./pages/home/home";
import Education from "./pages/education/education";
import Contactme from "./pages/contact/contact";
import AboutUs from "./pages/aboutus/aboutus";
import Footer from "./pages/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useOnScreen } from "./component/hooks";

function App() {
  const homeRef = useRef();
  const homeActive = useOnScreen(homeRef, "-50%");
  const eduRef = useRef();
  const eduActive = useOnScreen(eduRef, "-50%");
  const aboutRef = useRef();
  const aboutActive = useOnScreen(aboutRef, "-50%");
  const contactRef = useRef();
  const contactActive = useOnScreen(contactRef, "-50%");

  const navbarData = [
    { title: "home", active: homeActive },
    { title: "education", active: eduActive },
    { title: "about", active: aboutActive },
    { title: "contact", active: contactActive },
  ];

  return (
    <>
      <Navbar payload={navbarData} />

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={eduRef}>
        <Education />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={contactRef}>
        <Contactme />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default App;
