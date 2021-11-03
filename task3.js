// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

dd= (dd < 10) ? dd = '0' + dd : dd;
mm= (mm < 10) ? mm = '0' + mm : mm;
console.log(mm+"-"+dd+"-"+yyyy);
console.log(mm+"/"+dd+"/"+yyyy);
console.log(dd+"-"+mm+"-"+yyyy);
console.log(dd+"/"+mm+"/"+yyyy);


// another way

// var today = new Date();
// var dd = today.getDate();

// var mm = today.getMonth()+1; 
// var yyyy = today.getFullYear();
// if(dd<10) 
// {
//     dd='0'+dd;
// } 

// if(mm<10) 
// {
//     mm='0'+mm;
// } 
// today = mm+'-'+dd+'-'+yyyy;
// console.log(today);
// today = mm+'/'+dd+'/'+yyyy;
// console.log(today);
// today = dd+'-'+mm+'-'+yyyy;
// console.log(today);
// today = dd+'/'+mm+'/'+yyyy;
// console.log(today);