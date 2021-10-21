export const getCollections = (arr) =>
  arr.map(
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

export default getCollections;