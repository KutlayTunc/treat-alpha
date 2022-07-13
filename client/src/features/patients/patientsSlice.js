import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import patientService from "./patientsService"

const initialState = {
  patients: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

//Add new patient
export const addPatient = createAsyncThunk(
  "patients/create",
  async (patientData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await patientService.addPatient(patientData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//Get user's patients
export const getPatients = createAsyncThunk(
  "patients/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await patientService.getPatients(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//Delete patient
export const deletePatient = createAsyncThunk(
  "patients/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await patientService.deletePatient(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPatient.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.patients.push(action.payload)
      })
      .addCase(addPatient.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPatients.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.patients = action.payload
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletePatient.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.patients = state.patients.filter(
          (patient) => patient._id !== action.payload.id
        )
      })
      .addCase(deletePatient.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = patientsSlice.actions
export default patientsSlice.reducer
