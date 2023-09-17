const arraySplitter = (arr, chunkSize) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    newArray.push(arr.slice(i, i + chunkSize));
  }

  return newArray;
};

export default arraySplitter;
