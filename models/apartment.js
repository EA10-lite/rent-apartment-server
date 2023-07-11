const amenities = require("../utils/amenities");
const media = require("./media");
const mongoose = requie("mongoose");

const apartments = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    amentities: { type: [String], enum: [ ...amenities ]},
    bedrooms: { type: Number, min: 1, required: true },
    apartment_type: { type: String, enum: [ "shared", "private" ],  required: true },
    title: { type: String, minLength: 5, maxLength: 255, required: true},
    description: { type: String, minLength: 5, maxLength: 1024, required: true},
    leased_by: { type: mongoose.Types.ObjectId, ref: "Agent", required: true },
    location: { type: String, minLength: 5, maxLength: 255, required: true },
    media: { type: [media], required: true },
    price: { type: Number, min: 0, required: true },
    status: { type: String, enum: [ "rented", "available" ], default: "available" },
});

const Apartments = mongoose.model("Apartment", apartments);

module.exports = {
    Apartments
};