type creditCard = {
  last4: number;
  expiryDate: string;
  cvv: string;
  isPremiumMember: boolean;
};

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDeatils?: creditCard;
  entireCardDetails?: entireCardDetails;
};

let NewUser: User = {
  _id: "123",
  name: "ankush",
  email: "ankush@ankush.com",
  isActive: true,
  //   creditCardDeatils: {
  //     last4: 1234,
  //     expiryDate: "24/12",
  //     cvv: "123",
  //     isPremiumMember: true,
  //   },
};

NewUser.email = "ankush@gmail.com";
// NewUser._id = "56565";

console.log(NewUser);

type CardNumber = {
  cardNumber: string;
};

type CardDate = {
  expiryDate: string;
};

type entireCardDetails = CardNumber &
  CardDate & {
    cvv: string;
  };

let anotherUser: User = {
  _id: "5656",
  name: "anshika",
  isActive: true,
  email: "anshika@gmail.com",
  entireCardDetails: {
    cardNumber: "1234567890",
    expiryDate: "24/12",
    cvv: "123",
  },
};

export {};
