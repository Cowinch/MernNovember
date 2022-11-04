const express = require("express")
const app = express()
const mongoose = require('mongoose')
const PORT = 8000


app.use(express.json(), express.urlencoded({ extended: true }))

//mongoose has a default port. as long as we dont change that its implicit
mongoose.connect('mongodb://localhost/friday')
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
})

const server = app.listen(PORT, () =>
    console.log(`Server is locked and loaded on port ${PORT}!`)
)
