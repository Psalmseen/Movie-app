import React from "react";
import createMe from "../../utils/firebase/firebase.utils";

const FavouritePage = () => {
  createMe({
    email: "test4@gmail.com",
    password: "hellothere",
    displayName: "Dn4",
  });
  return <div>THIS IS THE FAVOURITE PAGE</div>;
};

export default FavouritePage;
