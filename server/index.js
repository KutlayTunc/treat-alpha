const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/user", require("./routes/user"))
app.use("/patients", require("./routes/patients"))

app.use(
  cors({
    origin: "*",
  })
)
app.use(errorHandler)
app.listen(PORT, () => {
  console.log("Server started at port:", PORT)
})
