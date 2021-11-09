import React, { useEffect}from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Redirect } from "react-router";

import {selectCollectionData, selectCollectionResult } from "../../redux/collection/collection.selectors";
import { mergeArrays } from "../../utils/collection.utils";
import { selectFavourites } from "../../redux/favourite/favourites.selector";
import { updateFavouritedItems } from "../../redux/collection/collection.actions";
import VideoPage from "./video-page.component";

const VideoPageContainer = ({ videos, data,favourites, updateFavouritedItems }) => {
    const { id } = useParams();
    
    useEffect(() => {
        const collectionResult = mergeArrays (data, favourites);
      updateFavouritedItems(collectionResult);
    }, [favourites, data, updateFavouritedItems]);
    
    const [videoCard] = videos.filter((video) => video.id === Number(id));
    
    return videoCard ? <VideoPage {...videoCard} /> :<Redirect to="/" />;
  }
;

const mapStateToProps = createStructuredSelector({
    videos: selectCollectionResult,
    data: selectCollectionData,
    favourites:selectFavourites
});

const mapDispatchToProps = dispatch => ({
    updateFavouritedItems: (collectionResult) =>
    dispatch(updateFavouritedItems (collectionResult))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoPageContainer);
