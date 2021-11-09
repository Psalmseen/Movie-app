import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/home-page/home-page.component";
import FavouritePage from "./pages/favourite-page/favourite-page.component";
import SigInPage from "./pages/sign-in-page/sign-in-page.component";
import {default as VideoPage} from "./pages/video-page/video-page.container";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import {
  createUserDocument,
  auth,
  getUserFavourites,
} from "./utils/firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { setCurrentUser } from "./redux/user/user.actions";
import { onSnapshot } from "@firebase/firestore";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

function App({ setCurrentUser, currentUser, dispatch }) {
  useEffect(() => {
    onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        onSnapshot(userRef, (userSnapshot) => {
          setCurrentUser({
            id: userSnapshot.id,
            ...userSnapshot.data(),
          });
        });
        const userFav = await getUserFavourites(userAuth.uid);
        dispatch(userFav);
      } else {
        setCurrentUser(userAuth);
      }
    });
  }, [setCurrentUser, dispatch]);
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
          {currentUser ? <Redirect to="/" /> : <SigInPage />}
        </Route>
        <Route path="/videos/:id">
          <VideoPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  dispatch: (action) => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
