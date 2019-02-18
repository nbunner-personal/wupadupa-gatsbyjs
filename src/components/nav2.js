import React from "react";
import { Link } from "gatsby";
// import github from '../img/github-icon.svg'
import logo from "../img/logo-full.png";
import navbarStyles from "./navbar.module.css";

const Navbar = class extends React.Component {
  componentDidMount(), {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <nav
        className={`navbar is-transparent ${navbarStyles.navbarTop}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={`container ${navbarStyles.navContainer}`}>
          <Link to="/" className={navbarStyles.navbarLogo}>
            <figure className="image">
              <img src={logo} alt="" />
            </figure>
          </Link>
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
            <Link to="/artists/" className={navStyles.nav_photos}>
                <span>Artists</span>
                </Link>
                <Link to="/string-thing/" className={navStyles.nav_stringthing}>
                <span>String Thing</span>
                </Link>
                <Link to="/sing-thing/" className={navStyles.nav_singthing}>
                <span>Sing Thing</span>
                </Link>
                <Link to="/doodlebook/" className={navStyles.nav_doodlebook}>
                <span>Doodlebook</span>
                </Link>
                <Link to="/mail-art/" className={navStyles.nav_mailart}>
                <span>Mail Art</span>
                </Link>
                <Link to="/phone-art/" className={navStyles.nav_phoneart}>
                <span>Phone Art</span>
                </Link>
            </div>
                        
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
