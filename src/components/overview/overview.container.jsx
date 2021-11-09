import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  fetchCollectionData,
  updateFavouritedItems,
} from "../../redux/collection/collection.actions";
import {
  selectCollectionData,
  selectCollectionResult,
} from "../../redux/collection/collection.selectors";
import getCollections from "../../utils/collection.utils";
import { mergeArrays } from "../../utils/collection.utils";
import Overview from "./overview.component";
import Spinner from "../spinner/spinner.component";
import { selectPageCountValue } from "../../redux/page-count/page-count.selectors";
import { selectFavourites } from "../../redux/favourite/favourites.selector";

const OverviewContainer = ({
  fetchCollectionData,
  updateFavouritedItems,
  results,
  favourites,
  value,
  data,
}) => {
  const [isFetching, setIsFetching] = useState(false);

  // props that has to do with the TODO below
  

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=89cbd8f9a2829355783549b21d6e1769&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=true&page=${value}&primary_release_date.gte=2010&release_date.gte=2010&vote_count.gte=6&vote_average.gte=6&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    const fetchAsync = async (url) => {
      try {
        setIsFetching(true);
        const response = await fetch(url);
        const data = await response.json();
        fetchCollectionData(getCollections(data.results));
        setIsFetching(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAsync(url);
  }, [fetchCollectionData, url]);

  // TODO : Work on this funtionality so as to see faourited videos on the homepage
  useEffect(() => {
    const collectionResult = mergeArrays(data, favourites);
  updateFavouritedItems(collectionResult);
  },[favourites,data, updateFavouritedItems]);

  //

  return isFetching ? <Spinner /> : <Overview results={results} />;
};

const mapStateToProps = createStructuredSelector({
  results: selectCollectionResult,
  value: selectPageCountValue,
  data: selectCollectionData,
  favourites: selectFavourites,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionData: (collectionData) =>
    dispatch(fetchCollectionData(collectionData)),
  updateFavouritedItems: (collectionResult) =>
    dispatch(updateFavouritedItems(collectionResult)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
