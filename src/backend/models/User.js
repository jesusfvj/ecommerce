const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

UserSchema.methods.matchPassword = function(password) {
  return bcrypt.compare(password, this.password);
}

module.exports = model("User", UserSchema);