const express = require("express");
const app = express();
const DB = "jokes_api"

app.use(express.json(), express.urlencoded({extended:true}))

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config")(DB)

// This is where we import the joke routes function from our jokes.routes.js file
const AllMyJokeRoutes = require("./server/routes/jokes.routes")
AllMyJokeRoutes(app)

//modularize routes
require("./server/routes/jokes.routes")(app)

app.listen(8000, () => console.log("The server is all fired up on port 8000"))
