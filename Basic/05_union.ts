let stringNumbers: string[] = ["1", "2"];
let numbers: number [] = [1, 2,3];

// let mixNumbers: string[] | number[] = [1, "2", 3, "4"] /* You cannot have mixture here */, 
/* this is Wrong, either it could be a array of string or array of numbers */


let mixer: (string|number)[] = [1, "2", 3, "4"]


export {}


