const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
  {
    // id: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
    // age: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // gender: { type: String, required: true },
    // phone_number: { type: String, required: true },
    //   logon: { type: Boolean, required: true },
    //   subscription_plan: { type: String, required: true },
    //   last_login: { type: Number, required: true },
    //   account_created: { type: Number, required: true },
    //   patient_count: { type: Number, required: true },
    //   upcoming_appointments: "",
  },
  { timestamps: true }
)
module.exports = mongoose.model("User", userSchema)
