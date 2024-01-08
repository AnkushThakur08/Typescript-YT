function addTwo(num: number) {
  //   return num + 2;
  return "Ankush";
}

function toUpper(val: string) {
  return val.toLocaleUpperCase();
}

function signup(name: string, email: string, isGoogleLoggedIn: boolean = false) {}

// let res = addTwo("Ankush");
let res = addTwo(1);
console.log(res);

let result = toUpper("ankush");
console.log(result);

// signup(1,2,3);
signup("Ankush", "a@a.com");

export {};
