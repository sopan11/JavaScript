/*
Variables are containers which are used to store values.

Variables can be defined by three types:- var, let and const.

There is no need to defined type of datatype of variable, JavaScript automatically considered data type based on it's value.

Rules for define variables in javascript:-
    1) Variables are case sensitive.
    2) Varible's name can't be start with numeric(0,1,2...) value, hiphen(-) and dot(.).
    3) Variables can begin with unserscore(_), dollar($), and letters(a, b, c...) 
    4) Variables can contains letters(a,b,c..), digits(1,2,3...), underscore(_),   
    5) Reserved words can't be used as variables name.
*/

var a = 5; //It has globally scope in code.

let b = 5; //It has local scope.

const c = 5; //It is constant, javascript not allowed to change it's value.

//Let consider with examples:-
//1) var-
var x = 10;
console.log(x); //10

{
    var x = 5;
    console.log(x); //5
}
console.log(x); //15

//2) let
let y = 10;
console.log(y); //10

{
    let y = 5;
    console.log(y); //5
}
console.log(y); //10

//3) cont
const z = 10
console.log(z); //10
z = 15; //It is not allowed to change value. It throws an error.
