import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectFavourites } from '../../redux/favourite/favourites.selector'
import {signUserOut} from '../../utils/firebase/firebase.utils'

const Header = ({ currentUser, favourites }) => {
  const handleSignOut = () => {
    signUserOut(currentUser.id ,favourites)
  }
  return(
  <div className="header">
    <h1 className="title">
      <Link to="/">Seenergy </Link>
    </h1>
    <nav className="nav">
      <Link to="/favourites"> Favourite Video</Link>
      {currentUser ?
      <Link onClick={handleSignOut} to="/">Sign out</Link> :
      <Link to="/sign-in">Sign in</Link>}
    </nav>
  </div>
)};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  favourites: selectFavourites
})

export default connect(mapStateToProps)(withRouter(Header));
