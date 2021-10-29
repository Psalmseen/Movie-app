import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {signUserOut} from '../../utils/firebase/firebase.utils'

const Header = ({ currentUser }) => {
  return(
  <div className="header">
    <h1 className="title">
      <Link to="/">Seenergy </Link>
    </h1>
    <nav className="nav">
      <Link to="/favourites"> Favourite Video</Link>
      {currentUser ?
      <Link onClick={signUserOut} to="/">Sign out</Link> :
      <Link to="/sign-in">Sign in</Link>}
    </nav>
  </div>
)};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(withRouter(Header));
