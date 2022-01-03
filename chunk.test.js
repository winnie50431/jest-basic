const chunkArray = (arr, len) => {
  // Int chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach((val) => {
    // Get last element
    const last = chunkedArr[chunkArray.length - 1];

    // Check if last and if last length is equal to chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};
