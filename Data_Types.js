/* 
There are two types Data Type in JavaScript:-
    i) Primitive Data Types.
        1) number
        2) float
        3) String
        4) undefined
        5) null.  (typeof null is object in JavaScript)

    ii) Objects.
        Objects are key-values pairs.
*/

//Primitive Data types:-
let a = 5;
console.log(typeof(a)); //number

let b = 5.0;
console.log(typeof(b)); //number

let c = "str";
console.log(typeof(c)); //string

let d = undefined
console.log(typeof(d)); //undefined

let e;
console.log(typeof(e)); //undefined

let f;
console.log(typeof(f)); //object

//2) Objects:-
let x = {
            "HTML" : "Hypertext Markup Language",
            "CSS" : "Cascading Style Sheets",
            "js" : "JavaScript",
        }
console.log(x); /*{
                    HTML: 'Hypertext Markup Language',
                    CSS: 'Cascading Style Sheets',    
                    js: 'JavaScript'
                }*/

let y = {
            "number" : 10,
            "str" : "string"
        }
console.log(y); //{ number: 10, str: 'string' }


  
