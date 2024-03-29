const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    // cartItems: [
    //   {
    //     qty: { type: Number, required: true },
    //     size: {type: Number, required: true}, 
    //     product: {type: String,required: true,},
    //   },
    // ],
    cartItems: [
      {
        countInStock: { type: Number, required: true },
        image: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        product: { type: String, required: true },
        quantity: { type: Number, required: true },
        size: { type: String, required: true },
      }
    ]
  },
  {
    timestamps: true,
  }
  
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
