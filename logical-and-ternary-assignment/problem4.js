
// Problem 4:
// Given 3 numbers (all different values), print which is greatest

let a = 5; 
let b = 41; 
let c = 7; 

// method 1 
// if (a>b && a>c){
//   console.log("a is greatest");
// }
// else if (b>a && b>c0){
//   console.log("b is greatest");
// }
// else{
//   console.log("c is greatest")
// }

// method 2 
(a>b && a>c) ? console.log("a is greatest") : (b>a && b>c) ? console.log("b is greatest") : console.log("c is greatest")