// let user: [string] = ["Ankush", "Thakur"]; /* Only 1 element  */

/* It is more concerned ke konsi place pe konsa element aaega  */

let user: [string, string, number] = ["Ankush", "Thakur", 123]; /* Tuples  */

let rgb: [number, number, number] = [123, 222, 333];

type User = [string, number];

const variable: User = ["Javascript", 123];

variable[0] = "Typescript"; /* I can change the value */

/* THE CONSERING PART */
variable.pop();

// variable.push(true)
