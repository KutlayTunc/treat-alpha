import { useState } from "react"

import PatientForm from "../components/PatientForm"
import "./Patients.css"

const Patients = () => {
  const [addPatient, setAddPatient] = useState(null)

  return (
    <div className="patients-container">
      <button
        className="addButton"
        onClick={() =>
          addPatient ? setAddPatient(false) : setAddPatient(true)
        }
      />
      {addPatient ? (
        <PatientForm />
      ) : (
        <div className="patients-item">Here are my patients:</div>
      )}
    </div>
  )
}

export default Patients
