//if:- if condition is true then it enters in if block.
let percentage = 89;
if(percentage < 60){    
    console.log("First Class Division");
}

//if-else loop:- checks 'if' block condition, if it's true enters in 'if' block otherwire 'else' block.
let age = 20;
if(age<18){
    console.log("Can not drive vehicle");
}
else{
    console.log("Can drive vehicle");
}

//nasted if-else loop:- checks the condition one-by-one and enters where condition is true
let marks = 90;
if(marks >90){
    console.log("Outstanding");
}
else if(marks>80 && marks<=90){
    console.log("Excellent");
}
else if(marks>70 && marks<=80){
    console.log("Greate");
}
else if(marks>60 && marks<=70){
    console.log("Good")
}
else if(marks>50 && marks<=60){
    console.log("Well done");
}
else{
    console.log("Give your best...");
}
