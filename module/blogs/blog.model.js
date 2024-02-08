const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const blogSchema = new Schema({
  title: String,
  author: { type: ObjectId, ref: "User" },
  content: String,
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});
module.exports = new model("Blog", blogSchema);
