type User = {
  readonly _id: string /* So that it should not be changed futher */;
  name: string;
  email: string;
  isActive: boolean;
};

let user: User = {
  _id: "123",
  name: "Ankush",
  email: "ankush@gmail.com",
  isActive: false,
};

user.email = "a@a.com";
// user._id ="6767"; /* You cannot assign a NEW ID */

console.log(user);

export {};
