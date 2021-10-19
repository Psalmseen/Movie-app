import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component";
import FavouritePage from "./pages/favourite-page/favourite-page.component";
import SigInPage from "./pages/sign-in-page/sign-in-page.component";
import VideoPage from "./pages/video-page/video-page.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/favourites">
            <FavouritePage />
          </Route>
          <Route path="/sign-in">
            <SigInPage />
          </Route>
          <Route path="/video">
            <VideoPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
