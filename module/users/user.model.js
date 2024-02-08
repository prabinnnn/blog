const { Schema, model } = require("mongoose");
const blogSchema = new Schema({
  name: String,
  emailAddress: String,
  phoneno: String,
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});
module.exports = new model("User", blogSchema);
