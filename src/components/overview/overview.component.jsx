import React, { useEffect, useState } from "react";
// import results from "../../result";
import Card from "../card/card.component";
import getCollections from "../../utils/collection.utils";
import Spinner from "../spinner/spinner.component";

const Overview = () => {
  const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const fetchAsync = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=89cbd8f9a2829355783549b21d6e1769&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=true&page=1&primary_release_date.gte=2010&release_date.gte=2010&vote_count.gte=6&vote_average.gte=6&with_watch_monetization_types=flatrate"
      );
      const data = await response.json();
      setResults(getCollections(data.results));
      setIsFetching(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAsync();
  }, []);

  return isFetching ? (
    <Spinner />
  ) : (
    <div className="overview">
      {results.map((result) => (
        <Card key="result.id" {...result} />
      ))}
    </div>
  );
};

export default Overview;

/******************************************************************************
 *
 *              CREATE THE REACT REDUX STORE  TO DISPATCH THE DATA FROM FETCH
 *
 *              WORK ON THE COLLECTION UTILS COMPONENT
 *
 *              
 * 

 * *************************************************************************** */
