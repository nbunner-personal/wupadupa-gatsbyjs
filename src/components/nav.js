import React from "react";
import { Link } from "gatsby";
// import github from '../img/github-icon.svg'
// import logo from "../img/logo-full.png";
import navStyles from "./nav.module.css";

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navBurger"),
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
        className={navStyles.top_nav}
        role="navigation"
        aria-label="main-navigation"
      >
        {/* Hamburger menu */}
        <div
          className={`navBurger ${navStyles.nav_burger}`}
          data-target="navMenu"
        >
          <span />
          <span />
          <span />
        </div>

        <div className={`navMain ${navStyles.nav_main}`} id="navMenu">
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
      </nav>
    );
  }
};

export default Navbar;
