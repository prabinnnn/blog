const blogModel = require("./blog.model");
const create = (payload) => {
  return blogModel.create(payload);
};
const get = () => {
  return blogModel.create();
};
const getById = ({ _id }) => {
  return blogModel.findOne({ _id });
};
const updateById = ({ _id }, payload) => {
  return blogModel.updateOne({ _id }, payload);
};
const removeById = ({ _id }) => {
  return blogModel.deleteOne({ _id });
};
module.exports = { create, get, getById, updateById, removeById };
