const Joke = require("../models/jokes.model")


// READ ALL
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => res.json({jokes: allDaJokes}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

//FIND ONE
module.exports.findOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneJoke => res.json({ jokes: oneJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }))
}

// CREATE
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ jokes: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// UPDATE
module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ jokes: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// DELETE
module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }))
}