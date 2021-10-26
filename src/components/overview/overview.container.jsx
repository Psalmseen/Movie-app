import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollectionData } from "../../redux/collection/collection.actions";
import { selectCollectionResult } from "../../redux/collection/collection.selectors";
import getCollections from "../../utils/collection.utils";
import Overview from "./overview.component";
import Spinner from "../spinner/spinner.component";
import { selectPageCountValue } from "../../redux/page-count/page-count.selectors";

const OverviewContainer = ({ fetchCollectionData, results, value}) => {
  const [isFetching, setIsFetching] = useState(false);

  const url =
    `https://api.themoviedb.org/3/discover/movie?api_key=89cbd8f9a2829355783549b21d6e1769&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=true&page=${value}&primary_release_date.gte=2010&release_date.gte=2010&vote_count.gte=6&vote_average.gte=6&with_watch_monetization_types=flatrate`;

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

  return isFetching ? <Spinner /> : <Overview results={results} />;
};
const mapStateToProps = createStructuredSelector({
    results: selectCollectionResult,
    value:selectPageCountValue
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionData: (collectionData) =>
    dispatch(fetchCollectionData(collectionData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
