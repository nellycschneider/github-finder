import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  // default props, if nothing is passed
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
  };

  // type of props
  //   make application more robust by making sure the props have the right type
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          {/* FontAwesome logo */}
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
