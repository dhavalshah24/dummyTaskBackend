const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dummyTaskDB", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to database");
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
