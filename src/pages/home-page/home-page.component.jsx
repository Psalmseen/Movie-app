import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=89cbd8f9a2829355783549b21d6e1769&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2000&release_date.gte=2000&vote_count.gte=6&vote_average.gte=6&with_watch_monetization_types=flatrate"
    )
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  }, []);
  return <div className='homepage'> THIS IS THE HOME PAGE</div>;
};

export default HomePage;

// fetch("https://api.themoviedb.org/3/movie/550?api_key=89cbd8f9a2829355783549b21d6e1769").then(res => res.json()).then(data => console.log({data}))
//https://api.themoviedb.org/3/discover/movie?api_key=89cbd8f9a2829355783549b21d6e1769&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=true&page=1&primary_release_date.gte=2010&release_date.gte=2010&vote_count.gte=6&vote_average.gte=6&with_original_language=en-US&with_watch_monetization_types=flatrate
