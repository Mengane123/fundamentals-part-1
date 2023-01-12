// let js = "amazing";

// console.log(40 + 8 + 23 - 10);

// let firstName = "prashant";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

/*////////////////////////*/

// BASIC OPERATORS

// MATHEMATICAL OPERATORS
// const now = 2037;
// const agePrashant = now - 1999;
// const ageRam = now - 2018;
// console.log(agePrashant, ageRam);

// console.log(agePrashant * 2, agePrashant / 10, 2 ** 3);

// we can also concatenate or add 2 or more strings
// const firstName = "Prashant";
// const lastName = "Mengane";
// console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS
// let x = 10 + 5;
// x += 10; //x=x+10
// x *= 4; //x=x*4
// x++; //x=x+1
// x--; //x=x-1
// console.log(x);

// COMPARISON OPERATORS
// console.log(agePrashant > ageRam); //(< , > , <= , >=)
// console.log(ageRam >= 18);

/*////////////////////////*/
// OPERATOR PRECEDENCE

// const now = 2037;
// const agePrashant = now - 1999;
// const ageRam = now - 2018;

// console.log(now - 1999 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageNew = (agePrashant + ageRam) / 2;
// console.log(agePrashant, ageRam, averageNew);

/*////////////////////////*/
// STRINGS AND TEMPLATE LITERALS
// contatenating strings using regular way
// const firstName = "Prashant";
// const job = "programmer";
// const birthYear = 1999;
// const year = 2022;
// const prashant =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(prashant);

// // now using template literals
// const prashantNew = `I'm ${firstName} , a ${
//   year - birthYear
// } year old ${job} !`;
// console.log(prashantNew);

// // we can use back tick (``) to write simple strings and multiline strings
// console.log(`just a regular string...`);

// // earlier we used to write \n\ for multi line comments
// console.log("strings with\n\
// multi\n\
// line");

// // using template literals
// console.log(`strings with
// multi
// line`);

/*////////////////////////*/
// IF/ ELSE STATEMENT
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah is ready to drive");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sarah is to young . wait for another ${yearsLeft} years to drive`
//   );
// }

// ANOTHER EXAMPLE
// const birthYear=1998;
// // this code will give an error because the century variable is not defined outside the code
// if(birthYear<=2000){
//   let century=20;
// }else{
//   let century=21;
// }

// const birthYear = 1998;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

/*////////////////////////*/
// TYPE CONVERSION AND TYPE COERCION

// TYPE CONVERSION
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number("prashant"));
// console.log(typeof NaN);
// console.log(String(23), 23);

// TYPE COERCION
// javascript converted that string to numbers.
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);

// console.log("23" * "2");
// console.log("23" / "2");

/*////////////////////////*/
// TRUTHY AND FALSY VALUE
// in javascript there are 5 falsy values : 0, '', undefined , null , NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("prashant"));
// console.log(Boolean({}));

/*////////////////////////*/
// EQUALITY OPERATORS : == VS ===
// const age = "18";
// if (age === 18) {
//   console.log("you just became an adult (strict)");
// }

// if (age == 18) {
//   console.log("you just became an adult (loose)");
// }

// const favourite = Number(prompt("what's your fav number;"));
// console.log(favourite);
// console.log(typeof favourite);

// // if (favourite == 23) {
// //   console.log("its an amazing number");
// // }
// if (favourite === 23) {
//   console.log("23 is an amazing number");
// } else if (favourite === 7) {
//   console.log("7 is an amazing number");
// } else if (favourite === 9) {
//   console.log("9 is also an amazing number");
// } else {
//   console.log("try another number");
// }

/*////////////////////////*/
// LOGICAL OPERATORS
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("yes! she can drive");
// // } else {
// //   console.log("she should not drive");
// // }

// const isTired = false;
// // console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("yes! sarah can drive");
// } else {
//   console.log("she should not drive");
// }

/*////////////////////////*/
// STATEMENTS AND EXPRESSIONS
// these are expressions , these produce some value
// 2 + 3;
// 1999;
// true && false && !false;

// // this is an statement because it declare value to variable str and perform some action but it does not PRODUCE a value
// if (23 > 10) {
//   const str = "23 is greater";
// }

// // we cannot use statements in the template literals
// // but we can use expressions
// const me = "prashant";
// console.log(`I am ${2037 - 1999} years old ${me}`);

/*////////////////////////*/
// THE CONDITIONAL (TERNARY) OPERATOR
const age = 23;
// age >= 18
//   ? console.log("i want to drink wine ")
//   : console.log("i want to drink water");
// as this is an expression and expressions produce values
const drink = age >= 18 ? "wine 🍷" : "water 🚰";
console.log(drink);
// now doing the same thing using if else statement
let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

// and we know that we cant use if else statement in template literals ...
// but we can use expressions in template literals like we did in last lecture
// and conditional opertor is an expressions
console.log(`I want to drink ${age >= 18 ? "wine 🍷" : "water 🚰"}`);
