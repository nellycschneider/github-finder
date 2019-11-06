import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* FontAwesome logo */}
        <i className={icon} />
        {title}
      </h1>
    </nav>
  );
};

// default props, if nothing is passed
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

// type of props
//   make application more robust by making sure the props have the right type
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
