import { createContext, useState } from "react"
const UserContext = createContext()

const userInfo = {
  id: 1,
  first_name: "Verondike",
  last_name: "Benyon",
  email: "vbenyonaa0@npr.org",
  password: "",
  gender: "Non-binary",
  phone_number: "",
  logon: true,
  subscription_plan: "",
  last_login: "",
  account_created: "",
  patient_count: "",
  upcoming_appointments: "",
}

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  )
}
export default UserContext
