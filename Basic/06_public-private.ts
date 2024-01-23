class User {
    name: string;
    readonly email: string; /* If it is Read only, then We cannot update it */
    private city : string; /* If it is Private, then We cannot access it outside the class */
    /* By Default every property is Public */
    constructor(email: string, name: string) {
        this.name = name
        this.email = email;
    }
}


const JavaScript = new User ("ankush@gmail.com", "Ankush");

JavaScript.name = "Typescript"
