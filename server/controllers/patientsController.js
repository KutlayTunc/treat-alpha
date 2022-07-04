const asyncHandler = require("express-async-handler")

const Patient = require("../database/models/patientModel")

const getPatients = asyncHandler(async (req, res) => {
  const patients = await Patient.find()
  res.json(patients)
})

const setPatient = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400)
    throw new Error("Error handling denemesi!")
  }
  const patient = await Patient.create({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
  })
  res.json(patient)
})

const updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id)
  if (!patient) {
    res.status(400)
    throw new Error("Patient not found!")
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

  await patient.remove()

  res.json({ id: req.params.id })
})

module.exports = {
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
}
