const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [
			true,
			"Author is required"
		],
		min: [3, 'must be longer than 3 characters']
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;