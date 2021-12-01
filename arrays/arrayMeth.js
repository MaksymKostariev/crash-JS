// Task 5 - merge arrays and remove duplicates
const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];
function mergeArraysWithoutDuplicates(array1, array2) {
    let margeArray = array1.concat(array2);
    margeArray.sort((a, b) => a - b);
    margeArray.filter((p, index) => {
      return margeArray.indexOf(p) === index;
    })
  }
console.log(mergeArraysWithoutDuplicates(arNum,arNum2));
