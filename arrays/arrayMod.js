const strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error']
function filterArrayWithStrings(array) {
  let filteredArray = [];
  let i = 0;
  while (i <= array.length - 1) {
    if (array[i].includes("error") === false) {
      filteredArray.push(array[i]);
    }
    i++;
  }
  return filteredArray;
}
console.log(filterArrayWithStrings(strArr));