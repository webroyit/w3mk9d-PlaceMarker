const Place = require("../models/Places");

// GET /api/v1/places
// Public
exports.getPlaces = async (req, res, next) => {
    try{
        const places = await Place.find();

        return res.status(200).json({
            success: true,
            // it get the data in an array
            count: places.length,
            data: places
        })
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Something went wrong in the server"})
    }
}