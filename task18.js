function compare(a, b) {
    // let s = a + b;
    if (a === 50) {
        return "True";
    } else if (b === 50) {
        return "True";
      } else if (a + b === 50) {
        return "True";
        } else {
          return "False";
          }
}
console.log(compare(25,45));
console.log(compare(50,75));
console.log(compare(25,50));
console.log(compare(25,25));

// function test50(x, y) 
// {
//   return ((x == 50 || y == 50) || (x + y == 50));
// }