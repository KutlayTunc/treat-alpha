const asyncHandler = require("express-async-handler")

const User = require("../database/models/userModel")

const getUser = asyncHandler(async (req, res) => {
  const user = await User.find()
  res.json(user)
})

const setUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400)
    throw new Error("Error handling denemesi!")
  }

  const user = await User.create({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
  })
  res.json(user)
})

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) {
    res.status(400)
    throw new Error("User not found")
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.json(updatedUser)
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) {
    res.status(400)
    throw new Error("User not found!")
  }
  await user.remove
})

module.exports = {
  getUser,
  setUser,
  updateUser,
  deleteUser,
}
