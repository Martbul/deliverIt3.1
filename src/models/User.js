const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "usernmae is required"],
    minLength: [3, "username is too short"],
    maxLength: [70, "usernmae is too long"],
    validate: {
        validator: function (value) {
          return /^[A-Za-z0-9_.]+$/.test(value);
        },
        message: 'please enter a valid username address \n only letters, numbers, underscores, and periods are alowed'
      },
  },
  


  email: {
    type: String,
    required: [true, "usernmae is required"],
    unique: { value: true, message: "email already exists" },
    validate: {
        validator: function (value) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        },
        message: 'please enter a valid email address'
      },
  },

  
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [8, "password is too short"],
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9]+$/.test(value);
      },
      message: 'please enter a valid password(only letters and numbers are allowed)'
    },
  },
});

userSchema.pre("save", async function () {
  //                             word   salt rounds()
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
