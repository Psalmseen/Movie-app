import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/home-page/home-page.component";
import FavouritePage from "./pages/favourite-page/favourite-page.component";
import SigInPage from "./pages/sign-in-page/sign-in-page.component";
import VideoPage from "./pages/video-page/video-page.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import { createUserDocument, auth } from "./utils/firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { setCurrentUser } from "./redux/user/user.actions";
import { onSnapshot } from "@firebase/firestore";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

function App({setCurrentUser, currentUser}) {
  useEffect(() => {
     onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        onSnapshot(userRef, userSnapshot => {
          setCurrentUser({
            id: userSnapshot.id,
            ...userSnapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    });
  }, [setCurrentUser]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/favourites">
          <FavouritePage />
        </Route>
        <Route path="/sign-in">
          {currentUser ?
            <Redirect to='/'/> :
          <SigInPage />}
        </Route>
        <Route path="/video">
          <VideoPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
