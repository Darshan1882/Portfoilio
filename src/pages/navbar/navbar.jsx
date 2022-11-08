import { Link } from "react-scroll";
import "./navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import json from "../../data.json";

const Navbar = (props) => {
  const { payload } = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top">
        <Link className="nevbar" to="home">
          {json.navbar.logo}
        </Link>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse  navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {json.navbar.manu.map((a, index) => (
              <li 
                className={
                  payload[index].title === a.title && payload[index].active
                    ? "nav-item active"
                    : "nav-item"
                }
                key={index}
              >
                <Link
                  
                  className="nav-link text-dark text-capitalize"
                  to={a.title}
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
