import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Profilepic from "../../images/profile-pic.svg";
import "./navbar-style.css";

export default function Navbar() {
  return (
    <>
      <nav
        id="nav"
        className={`navbar navbar-expand-lg navbar-light light`}
        //   style={{ paddingTop: `24px`, backgroundColor: `${props.back}` }}
      >
        <a className="navbar-brand" href="#">
          <img src={Logo} className="logo" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/" activeClassName="is-active" className="nav-link">
                explore
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/drops"
                activeClassName="is-active"
                className="nav-link"
              >
                drops
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/artists"
                activeClassName="is-active"
                className="nav-link"
              >
                artists
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="#"
                activeClassName="is-active"
                className="nav-link"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="#"
                activeClassName="is-active"
                className="nav-link"
              >
                <i className="fa fa-bell" aria-hidden="true"></i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/create"
                activeClassName="is-active"
                className="nav-link"
              >
                create
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/profile"
                activeClassName="is-active"
                className="nav-link"
              >
                <div className="profile-pic">
                  <img src={Profilepic} className="profile-img" alt="profile-img" />
                 <span className="online-circle"></span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
