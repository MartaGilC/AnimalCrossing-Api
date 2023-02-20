const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username:{type: String, unique: true, trim: true},
        email: {type: String, require: true, unique: true, trim: true},
        password: {type: String, require: true, trim: true}
    },
    {
        timestamps: true, collection: "usuarios"

    }
);

userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

const User = mongoose.model("usuarios", userSchema);
module.exports = User