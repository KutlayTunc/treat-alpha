const asyncHandler = require("express-async-handler")

const getUser = asyncHandler(async (req, res) => {
  res.json("getting user data")
})

const setUser = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Error handling denemesi!")
  }
  res.json("posting user data")
})

const updateUser = asyncHandler(async (req, res) => {
  res.json(`updating user id: ${req.params.id}`)
})

const deleteUser = asyncHandler(async (req, res) => {
  res.json(`deleting user with id: ${req.params.id}`)
})

module.exports = {
  getUser,
  setUser,
  updateUser,
  deleteUser,
}
