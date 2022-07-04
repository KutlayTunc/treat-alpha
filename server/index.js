const Express = require("express")
const cors = require("cors")
// const bodyParser = require("body-parser")
require("dotenv").config()

const app = Express()

app.use(
  cors({
    origin: "*",
  })
)
// app.use(bodyParser)
const PORT = process.env.PORT

app.get("/", async (req, res) => {
  res.json("hello world")
})

app.listen(PORT, () => {
  console.log("Server started at port:", PORT)
})
