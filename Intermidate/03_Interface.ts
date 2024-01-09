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
