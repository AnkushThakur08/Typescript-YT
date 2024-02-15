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

# Abstract Class

- You cannot create **Object** from the Abstract Class
- 1st You need to extends and then you can create
- It is just a blue Print
- you can give a byDefault Feature in the Abstract Class

```typescript
class Company {
  constructor(public companyName: string, public companyType: string) {}
}

const Ankush = new Company("IndianBlaster", "IT Company");
// We can easliy extends the class here

//  NOW WHEN WE USE abstract keyword

abstract class Company {
  constructor(public companyName: string, public companyType: string) {}
}

const Ankush = new Company("IndianBlaster", "IT Company");
//  We get an error
```

> cannot create an instance of an abstract

```typescript
// TO solve this, We first need to extends, then we can create an object
abstract class Company {
  constructor(public companyName: string, public companyType: string) {}
}

class ParentCompany extends Company {}

const Ankush = new ParentCompany("IndianBlaster", "IT Company");
```

# Generics

```typescript
function indentityOne(value: number | boolean): number | boolean {
  return value;
}
/* The value could be number or Boolean, and return type is also the same */
/* What if the value is String- not work  */

function indentityTwo(value: any): any {
  return value;
}
/* Any is not a good Approach */

function indentityThree<Type>(value: Type): Type {
  return value;
}
/* It is like ANY, but better than any, because we don't know the type
but once we get the type we are sure that, return type will also be the same
*/

indentityThree("Ankush");
indentityThree(true);
indentityThree(10);

// Here Ankus is Act as type
```

> function indentityThree<"Ankush">(value: "Ankush"): "Ankush"
> function indentityThree<true>(value: true): true
> function indentityThree<10>(value: 10): 10

```typescript
// production use Case

interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  empID: number;
}

function createEmployee<Employee>() {}

// Another way to use Generics
function identityFive<T>(val: T): T {
  return T;

  // This <T> is Generics
}
```
