// Problem 1:
// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let birth_year = 1997; 
let current_year =2022;
let age = current_year-birth_year;

// method 1 (with ternary operator)
(age>=13 && age<=19) ? console.log("Teenage") : (age>=20 && age<=29) ? console.log("Twenties") : console.log("NA")

// method 2

// if (age>=13 && age<=19) {
//   console.log("Teenage");
// }
// else if (age>=20 && age<=29){
//   console.log("Twenties")
// }