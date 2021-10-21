const getCollectionsAsync = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=89cbd8f9a2829355783549b21d6e1769&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=true&page=1&primary_release_date.gte=2010&release_date.gte=2010&vote_count.gte=6&vote_average.gte=6&with_watch_monetization_types=flatrate"
    );
      const rawData = await response.json();
      
    return rawData.results.map(
        ({
          id,
          overview,
          popularity,
          title,
          release_date,
          vote_average,
          poster_path,
        }) => ({
          id,
          overview,
          popularity,
          title,
          release_date,
          vote_average,
          poster_path: `http://image.tmdb.org/t/p/w500/${poster_path}`,
        })
      );
  } catch(error) {console.error(error);}
};

const getCollections = () => {
    fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=89cbd8f9a2829355783549b21d6e1769&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=true&page=1&primary_release_date.gte=2010&release_date.gte=2010&vote_count.gte=6&vote_average.gte=6&with_watch_monetization_types=flatrate"
    )
        .then(res => res.json());
}
export default getCollectionsAsync;


