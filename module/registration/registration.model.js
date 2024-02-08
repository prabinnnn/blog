const { Schema, model } = require("mongoose");
const bookSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: String, default: Date.now },
  updateAt: { type: String, default: Date.now },
});
module.exports = new model("Resgistration", bookSchema);
