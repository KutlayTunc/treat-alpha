import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import patientsReducer from "../features/patients/patientsSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patients: patientsReducer,
  },
})
