const express = require("express")
const router = express.Router()

const {
  getPatients,
  setPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientsController")

const { protect } = require("../middleware/authMiddleware")
router.get("/", protect, getPatients)

router.post("/", protect, setPatient)

router.put("/:id", protect, updatePatient)

router.delete("/:id", protect, deletePatient)

module.exports = router
