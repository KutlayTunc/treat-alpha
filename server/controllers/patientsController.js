const asyncHandler = require("express-async-handler")

const Patient = require("../models/patientModel")
const User = require("../models/userModel")

const getPatients = asyncHandler(async (req, res) => {
  const patients = await Patient.find({ user: req.user.id })
  res.json(patients)
})

const setPatient = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400)
    throw new Error("Error handling denemesi!")
  }
  const patient = await Patient.create({
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    user: req.user.id,
  })
  res.json(patient)
})

const updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  if (!patient) {
    res.status(400)
    throw new Error("Patient not found!")
  }

  const user = await User.findById(req.user.id)

  //Chech for user
  if (!user) {
    res.status(401)
    throw new Error("User not found")
  }

  //Checking login user matches the patient's user
  if (patient.user.toString() !== user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }

  const updatedPatient = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updatedPatient)
})

const deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  if (!patient) {
    res.status(400)
    throw new Error("Patient not found!")
  }

  const user = await User.findById(req.user.id)

  //Chech for user
  if (!user) {
    res.status(401)
    throw new Error("User not found")
  }

  //Checking login user matches the patient's user
  if (patient.user.toString() !== user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }

  await patient.remove()

  res.json({ id: req.params.id })
})

module.exports = {
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
}
