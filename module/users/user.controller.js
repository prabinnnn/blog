const userModel = require("./user.model");
const create = (payload) => {
  return userModel.create(payload);
};
const get = () => {
  return userModel.create();
};
const getById = ({ _id }) => {
  return userModel.findOne({ _id });
};
const updateById = ({ _id }, payload) => {
  return userModel.updateOne({ _id }, payload);
};
const removeById = ({ _id }) => {
  return userModel.deleteOne({ _id });
};
module.exports = { create, get, getById, updateById, removeById };
