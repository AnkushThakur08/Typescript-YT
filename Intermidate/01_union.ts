let myNum: number | string = 10;

myNum = 50;

myNum = 1000;

// myNum = "123";

function learningFunction(value: string | number) {
  if (typeof value === "string") {
    value.toUpperCase();
  }
}

learningFunction("typescript");
learningFunction(123);


/* For Array */
let stringNumbers: string[] = ["1", "2"];
let numbers: number [] = [1, 2,3];


// let mixNumbers: string[] | number[] = [1, "2", 3, "4"] 
/* You cannot have mixture here */
/* this is Wrong, either it could be a array of string or array of numbers */,




let mixer: (string|number)[] = [1, "2", 3, "4"]