const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const blogSchema = new Schema({
  title: String,
  author: { type: ObjectId, required: true, ref: "User" },
  content: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});
module.exports = new model("Blog", blogSchema);
