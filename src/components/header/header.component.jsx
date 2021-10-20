import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = () => (
  <div className="header">
    <hi className="title">
      <Link to="/">Seenergy </Link>
    </hi>
    <nav className="nav">
      <Link to="/favourites"> Favourite Video</Link>
      <Link to="/sign-in">Sign in</Link>
    </nav>
    {/* <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/hdhEjh75LLU"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe> */}
  </div>
);

export default withRouter(Header);
