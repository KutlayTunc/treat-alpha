import PatientsContext from "../../contexts/PatientsContext"
import { useContext } from "react"
import "./Patients.css"

const Patients = () => {
  const patients = useContext(PatientsContext)
  console.log(patients)

  return (
    <div className="patients-container">
      <div className="patients-item">
        Here are my patients:
        {patients.map((patient, index) => {
          return (
            <div>
              {patient.first_name}, is {patient.age} years old
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Patients
