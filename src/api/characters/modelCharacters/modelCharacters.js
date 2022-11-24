const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema(
    {
        name: {type: String, required: true},
        genre: {type: String},
        birthday: {type: String, required: true},
        img: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

const Character = mongoose.model("characters", charactersSchema);
module.exports = Character