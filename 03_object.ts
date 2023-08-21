type User = {
  name: string;
  email: string;
  company: string;
  phoneNumber: number;
};

function createUser(user: User) {}

createUser({
  name: "ankush",
  email: "ankush@gmail.com",
  company: "google",
  phoneNumber: 1234567890,
});

export {};
