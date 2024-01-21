abstract class Company {
  constructor(public companyName: string, public companyType: string) {}
}

class ParentCompany extends Company {}

const Ankush = new ParentCompany("IndianBlaster", "IT Company");
