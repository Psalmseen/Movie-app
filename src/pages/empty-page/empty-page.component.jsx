import React from "react";

const EmptyPage = () => (
  <div className="empty-page">
    <div className="empty-page-container">
      <div className="empty-page__logo-container">
        <img
          src="https://i.imgur.com/qIufhof.png"
          alt="Empty page"
          className="empty-page__logo"
        />
      </div>
      <p className="empty-page__text"> Oops! this page seems to be empty</p>
    </div>
  </div>
);

export default EmptyPage
