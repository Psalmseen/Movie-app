const addItem = (arr, item) => {
  if (!arr.find(arrItem => arrItem.id === item.id)) {
    arr.push({ ...item, isFavourite: true })   
  }
    return arr;
  };
  const deleteItem = (arr, item) => {
    return arr.filter((arrItem) => arrItem.id !== item.id);
};

  export const toggleFavouriteItem = (arr, item) => {
    return item.isFavourite ? deleteItem(arr, item) : addItem(arr, item);
  };  