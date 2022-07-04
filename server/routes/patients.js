const express = require("express")
const router = express.Router()

const {
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientsController")

router.get("/", getPatients)

router.post("/", setPatient)

router.put("/:id", updatePatient)

router.delete("/:id", deletePatient)

module.exports = router
