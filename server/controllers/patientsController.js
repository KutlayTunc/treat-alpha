const asyncHandler = require("express-async-handler")

const getPatients = asyncHandler(async (req, res) => {
  res.json("getting patients data")
})

const setPatient = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Error handling denemesi!")
  }
  res.json("posting patients data")
})

const updatePatient = asyncHandler(async (req, res) => {
  res.json(`updating patients id: ${req.params.id}`)
})

const deletePatient = asyncHandler(async (req, res) => {
  res.json(`deleting patients with id: ${req.params.id}`)
})

module.exports = {
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
}
