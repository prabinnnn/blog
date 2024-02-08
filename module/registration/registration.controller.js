const registration = require("./registration.model");
const bcrypt = require("bcryptjs");
const resigrater = (payload) => {
  hashpassword = bcrypt.hashSync("password", 8);
  payload.password = hashpassword;
  return registration.create(payload);
};
const create = (payload) => {
  return registration.create(payload);
};
module.exports = { resigrater, create };
