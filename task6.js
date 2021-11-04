// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

let year = 2004;

function leapyear(year)
{
    return (year % 100 === 0)? (year % 400 === 0) : (year % 4 === 0 );
}
((leapyear(year)) == true) ? (console.log (year, " is a leapyear.")) : (console.log (year, " is not a leapyear."));

// other way

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));