function sumOf(a, b)
{
    // if (a === b)
    // {
    // return (a+b)*3;
    // }
    // else 
    // {
    // return (a+b);
    // }
    let s = (a === b) ? (a+b)*3 : a+b;
    return s;
}
console.log(sumOf(2,2));