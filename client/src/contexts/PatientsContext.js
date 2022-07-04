import { createContext, useState } from "react"
const PatientsContext = createContext()

const patientsInfo = [
  {
    id: 1,
    first_name: "Wineadasdasi",
    last_name: "Hilary",
    age: 30,
    email: "whilary1@studiopress.com",
    gender: "Female",
  },
  {
    id: 2,
    first_name: "Quintana",
    last_name: "Rippingale",
    age: 26,
    email: "qrippingale2@yolasite.com",
    gender: "Female",
  },
]

export function PatientsProvider({ children }) {
  return (
    <PatientsContext.Provider value={patientsInfo}>
      {children}
    </PatientsContext.Provider>
  )
}
export default PatientsContext
