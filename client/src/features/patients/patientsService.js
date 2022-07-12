import axios from "axios"

const API_URL = "/api/goals/"

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

const patientsService = { addPatient }

export default patientsService
