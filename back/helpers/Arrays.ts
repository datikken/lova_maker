export const swapElPlacesInArr = (arr, str, indToPut) => {
  arr.splice(arr.indexOf(str), indToPut).unshift.apply(arr, [str]);
  return arr;
};
