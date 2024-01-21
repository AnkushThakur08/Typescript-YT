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

// production use Case

interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  empID: number;
}

function createEmployee<Employee>() {}

function identityFive<T>(val: T): T {
  return val;
}
