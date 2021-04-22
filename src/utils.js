export const reshapeArray = (arr, shape) => {
    const newArr = [];
    while (arr.length) {
      newArr.push(arr.splice(0, shape));
    }
    return newArr;
  };