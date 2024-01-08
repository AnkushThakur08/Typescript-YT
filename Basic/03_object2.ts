// let user = {
//   name: "Ankush",
//   email: "ankush@gmail.com",
//   isActive: false,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "Ankush", isPaid: false, email: "Ankush" };

// createUser(newUser);

type User = {
  name: string;
  email: string;
  role: string;
};

function generateUser(user: User): User {
  return user;
}

let result = generateUser({ name: "TypeScript", email: "typescript@gmail.com", role: "admin" });
console.log(result);

export {};
