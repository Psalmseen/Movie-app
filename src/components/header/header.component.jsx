import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = () => (
  <div className="header">
    <h1 className="title">
      <Link to="/">Seenergy </Link>
    </h1>
    <nav className="nav">
      <Link to="/favourites"> Favourite Video</Link>
      <Link to="/sign-in">Sign in</Link>
    </nav>
  </div>
);

export default withRouter(Header);
