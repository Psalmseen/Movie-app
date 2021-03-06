import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { toggleItemFavourite } from "../../redux/favourite/favourites.action";
import { useSingleAndDoubleClick } from "../../utils/custom-hooks/custom-hooks";

const Card = ({ result, toggleFavourite, history }) => {
  const { poster_path, id, vote_average } = result;

  const [liked, setLiked] = useState("");
  const singleClick = () => {
    history.push(`/videos/${id}`);
  };

  const doubleClick = () => {
    setLiked("icon");
    toggleFavourite(result);
    setTimeout(() => {
      setLiked("");
    }, 1000);
  };
  const clickAction = useSingleAndDoubleClick(singleClick, doubleClick);
  return (
    <div onClick={clickAction} className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${poster_path})` }}
      >
        <i className={liked}></i>
      </div>
      <span className="card__img-rating"> {vote_average}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavourite: (item) => dispatch(toggleItemFavourite(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(Card));
/**
 * release_date,
    title,
    vote_average,
    overview,
    popularity,
 * 
 *  <div className="card__wrapper">
        <div className="card__head">
          <h3 className="card__head-title">{title}</h3>
          <p className="card__release-date">{`Released: ${release_date}`}</p>
          <div className="card__buttom">
            <span className="card__popularity">
              {`Popularity: ${popularity}`}{" "}
            </span>
            <span className="card__rating">{`Rating: ${vote_average}`} </span>
          </div>
        </div>
        <div className="card__overview">{overview} </div>
      </div>
 */
