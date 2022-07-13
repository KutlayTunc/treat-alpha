import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import {
  getPatients,
  deletePatient,
  reset,
} from "../features/patients/patientsSlice"

import Spinner from "../components/Spinner"
import PatientForm from "../components/PatientForm"
import "./Patients.css"

const Patients = () => {
  const [addPatient, setAddPatient] = useState(null)

  const dispatch = useDispatch()

  const { patients, isLoading, isError, message } = useSelector(
    (state) => state.patients
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getPatients())

    return () => {
      dispatch(reset)
    }
  }, [isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="patients-container">
      <button
        className="addButton"
        onClick={() =>
          addPatient ? setAddPatient(false) : setAddPatient(true)
        }
      >
        +
      </button>
      {addPatient ? (
        <PatientForm />
      ) : (
        <div>
          {patients.length > 0 ? (
            <div>
              <div className="patients-item">Here are my patients:</div>
              {patients.map((patient, index) => {
                return (
                  <div key={index} className="each-patient">
                    <div>{patient.name}</div>
                    <button
                      onClick={() => {
                        dispatch(deletePatient(patient._id))
                      }}
                    >
                      X
                    </button>
                  </div>
                )
              })}
            </div>
          ) : (
            <div>I have no patients</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Patients
