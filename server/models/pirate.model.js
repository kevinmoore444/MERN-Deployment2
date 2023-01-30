const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    image: {
        type: String,
        required: [true, "Image required"],
    },
    treasureChests: {
        type: Number,
        required: [true, "Treasure Chests required"],
        min: [0, "Canont have negative chests"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Catch Phrase required"],
    },
    crewPosition: {
        type: String,
        minLength: [1, "Crew Position required"],
        required: [true, "Crew Position required"],
    },
    pegLeg: {
        type: Boolean,
    },
    eyePatch: {
        type: Boolean,
    },
    hookHand: {
        type: Boolean,
    }
}, {timestamps: true})

PirateSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Pirate', PirateSchema)