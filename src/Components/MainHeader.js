import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainHeader extends Component {
  render() {
    return (
      <header className="s-header">
        <div className="row s-header__navigation">
          <nav className="s-header__nav-wrap">
            <h3 className="s-header__nav-heading h6">Navigate to</h3>

            <ul className="s-header__nav">
              <li className="current">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <a
              href="#0"
              title="Close Menu"
              className="s-header__overlay-close close-mobile-menu"
            >
              Close
            </a>
          </nav>
        </div>
        <a className="s-header__toggle-menu" href="#0" title="Menu">
          <span>Menu</span>
        </a>
      </header>
    );
  }
}

export default MainHeader;
