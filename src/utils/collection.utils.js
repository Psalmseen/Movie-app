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
      genre_ids,
      vote_count,
    }) => ({
      id,
      overview,
      popularity,
      title,
      release_date,
      vote_average,
      poster_path: `http://image.tmdb.org/t/p/w500/${poster_path}`,
      isFavourite: false,
      genre_ids,
      vote_count,
    })
  );

export const updateCollectionItem = (arr, item) => {
  const updated = arr.map((arrItem) =>
    arrItem.id === item.id
      ? { ...item, isFavourite: !item.isFavourite }
      : arrItem
  );
  return updated;
};

export const mergeArrays = (collection, favourites) => {
  let mergedArray = [...collection];
  for (let i = 0; i < favourites.length; i++) {
    let itemToTest = favourites[i];
    mergedArray = mergedArray.map((collectionItem) =>
      collectionItem.id === itemToTest.id ? itemToTest : collectionItem
    );
  }
  return mergedArray;
};

export default getCollections;
