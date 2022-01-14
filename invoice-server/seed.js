const bcrypt = require("bcryptjs");
const db = require("./app/models");

const Role = db.role;
const User = db.user;

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });

  User.create({
    email: "amankumar1196@gmail.com",
    password: bcrypt.hashSync("123", 8),
    firstName: "Aman",
    lastName: "Kumar",
    phone: "123456789"
  })

}

module.exports = initial;