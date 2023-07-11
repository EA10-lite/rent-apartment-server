const Joi = require("joi");
const amentities = require("../utils/amenities");

const media = Joi.object({
    type: Joi.string()
      .valid('image', 'video')
      .required()
      .messages({
        'any.only': 'Invalid image type. Must be "image" or "video".',
        'string.empty': 'Image type is required.'
      }),
    url: Joi.string()
      .uri({ scheme: ['http', 'https'] })
      .required()
      .messages({
        'string.base': 'Image URL must be a string.',
        'string.empty': 'Image URL is required.',
        'string.uri': 'Invalid URL format. Must be a valid HTTP or HTTPS URL.'
      })
});

const add_apartment_schema = {
    amentities: Joi.array().items(Joi.string().valid(...amentities).trim().required()).min(1).required().messages({
        'array.base': 'Amenities must be an array.',
        'array.min': 'At least one amenity is required.',
        'any.only': 'Invalid amenity option.',
        'string.empty': 'Amenity value cannot be empty.'
    }),
    apartment_type: Joi.string().valid("shared", "private").required().messages({
        'any.only': 'Invalid image type. Must be "image" or "video".',
        'string.empty': 'Image type is required.'
    }),
    bedrooms: Joi.number().min(1).required(),
    title: Joi.string().min(5).max(255).required(),
    description: Joi.string().min(5).max(1024).required(),
    media: Joi.array().items(media).min(1).required().messages({
      'array.base': 'Images must be an array.',
      'array.min': 'At least one image is required.'
    }),
    leased_by: Joi.objectId().required(),
    location: Joi.string().min(5).max(255).required(),
    price: Joi.number().min(1).required(),
}

const rent_apartment_schema = {
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    // payment_method: Joi.string().valid("cash", "card").required(),
    // payment_status: Joi.string().valid("paid", "unpaid").required(),
    // amount: Joi.number().min(1).required(),
    apartment_id: Joi.objectId().required(),
    user_id: Joi.objectId().required(),
};

const search_apartment_schema = {
    location: Joi.string().min(5).max(255).required(),
    apartment_type: Joi.string().valid("shared", "private").required(),
    bedrooms: Joi.number().min(1).required(),
    price: Joi.number().min(1).required(),
    amentities: Joi.array().items(Joi.string().valid(...amentities).trim().required()).min(1).required().messages({}),

}


module.exports = { 
    add_apartment_schema,
    rent_apartment_schema,
    search_apartment_schema
}