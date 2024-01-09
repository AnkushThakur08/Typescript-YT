### Types in TypeScript

- Read This: [Type Compatibility in TypeScript](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability)
- String - “Hello World”
- Number - 42, 42.5
- Boolean - true/false
- Array - `string[]`, `number[]`, or `Array<number>`, `Array<string>`
- Any
- Function with Types in Parameters:

```typescript
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
// Would be a runtime error if executed!
greet(42); // Error: 'number' is not assignable to parameter of type 'string'.
```

### Function with Types in Parameters and Return Type:

```typescript
function getFavoriteNumber(): number {
  return 26;
}
```

### Function returning Promise:

```typescript
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

# Tuples

- It is kind of Specialised Array given by TS
- Most Important : **In a Very Precise Order**

Eg: Number 1

```typescript
let user: [string] = ["Ankush"];

// There will Only 1 element type of string
```

Eg: Number 2

```typescript
let user: [string, string, number] = ["Ankush", "Thakur", 123]; /* Tuples*/
let rgb: [number, number, number] = [123, 222, 333];
```

### MAIN ISSUE WITH THE TUPLES

```typescript
type User = [string, number];

const variable: User = ["Javascript", 123];

variable[0] = "Typescript"; /* I can change the value */

// It says 1st element will be a String, and it could be anything

/* THE CONSERING PART */
variable.pop();

variable.push(true);

//  here i can do Mutiple Opertions
```

---

# Interface

```Typescript

interface IUser {
  readonly dbID: string;
  email: string;
  name: string;
  googleID?: string;
  //   TrailUser: () => string
  TrailUser(): string;
  getCoupon(couponName: string): number;
}

let myUser: IUser = {
  dbID: "123321",
  email: "a@a.com",
  name: "Ankush Thakur",
  TrailUser: () => {
    return "Trail Started";
  },
  getCoupon: (name: "Ankush") => {
    return 50;
  },
};

myUser.email = "a@ank.com"; /* easily update this */
// myUser.dbID = "123321111"; /* CANNOT UPDATE AS READ ONLY */


```
