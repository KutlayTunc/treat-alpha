const mongoose = require("mongoose")

const patientSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: String, required: true },
    // gender: { type: String, required: true },
    // phone_number: { type: String, required: true },
    //   email: { type: String, required: true },
    //   password: { type: String, required: true },
    //   logon: { type: Boolean, required: true },
    //   subscription_plan: { type: String, required: true },
    //   last_login: { type: Number, required: true },
    //   account_created: { type: Number, required: true },
    //   patient_count: { type: Number, required: true },
    //   upcoming_appointments: "",
  }
  // { timeStamps: true }
)
module.exports = mongoose.model("Patient", patientSchema)
