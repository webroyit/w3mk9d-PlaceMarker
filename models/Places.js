const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    placeId: {
        type: String,
        required: [true, "Place ID is required"],
        unique: true,
        trim: true,
        maxlength: [10, "Place ID must be less than 10 characters"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    location: {
        type: {
            type: String,
            enum: ["Point"]
        },
        coordinates: {
            type: [Number],
            index: "2dsphere"
        },
        formattedAddress: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Place", PlaceSchema);