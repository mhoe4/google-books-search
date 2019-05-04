import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Nav extends Component {
  componentDidMount() {
    console.log(this.props.location);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Google Books
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={this.props.location.pathname === '/' ? 'nav-item active' : 'nav-item'} >
              <a className="nav-link" href="/">Search</a>
            </li>
            <li className={this.props.location.pathname === '/saved' ? 'nav-item active' : 'nav-item'} >
              <a className="nav-link" href="/saved">Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);