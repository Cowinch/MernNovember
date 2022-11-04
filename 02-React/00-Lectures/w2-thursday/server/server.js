const express = require("express")
const app = express()
const PORT = 8000

//MIDDLEWARE
app.use( express.json() ), app.use( express.urlencoded({ extended: true }) )


const routesFile = require("./routes/routes")
routesFile(app)


app.listen(PORT, () => console.log("server up on PORT: ", PORT))