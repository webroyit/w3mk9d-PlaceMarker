const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

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

// get the latitude and longitude
PlaceSchema.pre("save", async function(next){
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: "Point",
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }

    // prevent the address from being save to the database
    this.address = undefined;

    next();
})

module.exports = mongoose.model("Place", PlaceSchema);