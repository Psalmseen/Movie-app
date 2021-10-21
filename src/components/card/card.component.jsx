import React from "react";

const Card = ({
  poster_path,
  release_date,
  title,
  vote_average,
  overview,
  popularity,
}) => (
  <div className="card">
    <div
      className="card__image"
      style={{ backgroundImage: `url(${poster_path})` }}
    ></div>
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

export default Card;
