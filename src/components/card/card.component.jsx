import React from "react";
import { connect } from "react-redux";
import { toggleItemFavourite } from "../../redux/favourite/favourites.action";
import { useSingleAndDoubleClick } from "../../utils/custom-hooks/custom-hooks";

const Card = ({ result,toggleFavourite }) => {
  const {
    poster_path,
    release_date,
    title,
    vote_average,
    overview,
    popularity,
  } = result;
  const singleClick = () => alert("single Click");
  const doubleClick = () => toggleFavourite(result);
  const clickAction = useSingleAndDoubleClick(singleClick, doubleClick);
  return (
    <div onClick={clickAction} className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${poster_path})` }}
      >
      </div>
      <div className="card__wrapper">
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
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleFavourite : (item) => dispatch(toggleItemFavourite(item)),
})

export default connect(null, mapDispatchToProps)(Card);
