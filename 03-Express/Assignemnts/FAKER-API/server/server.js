const express = require("express")
const app = express()
const { faker } = require('@faker-js/faker')
const PORT = 8000

class User {
  constructor() {
      this._id = faker.datatype.number()
      this.firstName = faker.name.firstName()
      this.lastName = faker.name.lastName()
      this.phoneNumber = faker.phone.number()
      this.email = faker.internet.email()
      this.password = faker.internet.password()
      // this.helper = faker.helpers.userCard()
  }
}
// const newUser = new User();
// console.log(newUser);

class Address{
  constructor(){
    this.street = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}
// const newAdd = new Address();

class Company {
  constructor() {
      this._id = faker.datatype.number();
      this.name= faker.company.name();
      this.address = new Address();
  }
}
// const newComp = new Company();
// console.log(newComp);

app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser")
})

app.get("/api/users/new", (req, res) => {
  res.send(new User())
})

app.get("/api/companies/new", (req, res) => {
  res.send(new Company())
})

app.get("/api/user/company", (req, res) => {
  res.send([new User(), new Company()])
})

const server = app.listen(PORT, () =>
  console.log(`Server is locked and loaded on port ${PORT}!`)
)
