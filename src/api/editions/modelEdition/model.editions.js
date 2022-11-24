const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const editionSchema = new Schema(
    {
        name: {type: String},
        date: {type: Number},
        nintendo: {type: String, enum: ["DS", "WII", "3DS", "WIIU", "SWITCH"]},
        img:{type: String}
    },
    {
        timestamps: true,
    }
);

const Edition = mongoose.model('editions', editionSchema);

module.exports = Edition