import axios from "axios"

const API_URL = "/api/patients/"

//Add new patient
const addPatient = async (patientData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, patientData, config)

  return response.data
}

//Get user's patients
const getPatients = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

//Add new patient
const deletePatient = async (patientID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + patientID, config)

  return response.data
}

const patientsService = { addPatient, getPatients, deletePatient }

export default patientsService
