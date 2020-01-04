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
        // 500 is server error
        res.status(500).json({ error: "Something went wrong in the server"});
    }
}

// POST /api/v1/places
// Public
exports.addPlace = async (req, res, next) => {
    try{
       const place = await Place.create(req.body);

       return res.status(200).json({
            success: true,
            data: place
       })
    }catch(err){
        console.log(err);
        if(err.code === 11000){
            // 400 is user error
            return res.status(400).json({ error: "This place already exists"});
        }
        res.status(500).json({ error: "Something went wrong in the server"});
    }
}