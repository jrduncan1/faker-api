const {faker} = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

// **** CLASS CONSTRUCTORS ****
class User{
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor() {
        this._id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

// **** ROUTINGS ****

// new user
app.get("/api/users/new", (req, res) => {
    let newUser = new User();
    res.json(newUser)
})

// new company
app.get("/api/companies/new", (req, res) => {
    let newCompany = new Company();
    res.json(newCompany)
})

// new company and user
app.get("/api/user/company", (req, res) => {
    res.json({
        user: new User,
        company: new Company
    })
})

// log that the server started successfully
app.listen( port, () => console.log(`=== SERVER STARTED ON PORT:${port} ===`) )