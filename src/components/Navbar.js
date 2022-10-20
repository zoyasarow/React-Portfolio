import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/about">Zoya Sarow</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/about"
            > About
        </NavLink>
        <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/portfolio"
            > Portfolio
        </NavLink>  
        <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/resume"
            > Resume
        </NavLink> 
        <NavLink
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
            to="/contact"
            > Contact
        </NavLink>
    </div>
    </nav>
  );
};

export default Navbar;