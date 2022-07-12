import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPatient } from "../features/patients/patientsSlice"
import "./PatientForm.css"

const PatientForm = () => {
  const [name, setName] = useState("")

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addPatient({ name }))
    setName("")
  }
  return (
    <div className="patientform-container">
      <form onSubmit={onSubmit}>
        <div className="patientform-item">Add new patients</div>
        <div>
          <input
            type="text"
            name="text"
            id="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="submit-patient-button" type="submit">
          add
        </button>
      </form>
    </div>
  )
}

export default PatientForm
