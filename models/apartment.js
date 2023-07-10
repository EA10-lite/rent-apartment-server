const media = require("./media");
const mongoose = requie("mongoose");

const apartments = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    amentities: { type: [String], enum: [ "pool", "gym", "elevator", "parking", "security", "garden", "kitchen", "furnished", "ac", "heating", "washer", "dryer", "dishwasher", "balcony", "terrace", "view", "fireplace", "storage", "wheelchair", "utilities", "wifi", "tv", "cable", "pets", "smoking", "party", "events"]},
    apartment_type: { type: String, enum: [ "shared", "private" ],  required: true },
    title: { type: String, minLength: 5, maxLength: 255, required: true},
    description: { type: String, minLength: 5, maxLength: 1024, required: true},
    leased_by: { type: mongoose.Types.ObjectId, ref: "Agent", required: true },
    location: { type: String, minLength: 5, maxLength: 255, required: true },
    price: { type: Number, min: 0, required: true },
    bedrooms: { type: Number, min: 0, required: true },
    images: { type: [media], required: true },
});

const Apartments = mongoose.model("Apartment", apartments);

module.exports = {
    Apartments
};