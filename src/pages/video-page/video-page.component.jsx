import React from "react";
import genres from "../../utils/video/video-utils";


const VideoPage = ({
    overview,
    popularity,
    title,
    release_date,
    vote_average,
    poster_path,
    genre_ids,
      vote_count,
      isFavourite
  }) => (
<div className="video-page">
        <div className="backdrop__wrapper">
          <img src={poster_path} alt="video" className="backdrop" />
        </div>
        <div className="video-page__container">
          <h1 className="video-page__title"> {isFavourite && <i class="fas fa-heart"></i>} {title}  </h1>
          <p className="video-page__overview"> {overview}</p>
          <div className="video-page__page-body">
            <p className="video-page__genres">
              <span className="text-heading">Genre: </span>
              {genre_ids.map((id) => genres[id]).join(", ")}
            </p>
            <p className="video-page__release-date">
              <span className="text-heading">Release Date:</span> {release_date}
            </p>
            <p className="video-page__popularity">
              <span className="text-heading">Popularity:</span> {popularity}
            </p>
            <p className="video-page__vote">
              <span className="text-heading">Votes:</span> {vote_count}
            </p>
            <p className="video-page__vote-average">
              <span className="text-heading">Average Rating:</span>{" "}
              {vote_average}
            </p>
          </div>
        </div>
      </div>
)

export default VideoPage