const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//table for user login
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    firebaseId: {
        type: String,
        required: true,
        trim: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;