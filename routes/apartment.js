const { add_apartment, get_apartment_details, get_apartments, rent_apartment, search_for_apartment, update_apartment_status } = require("../controllers/apartment");
const { add_apartment_schema, rent_apartment_schema, search_apartment_schema } = require("../schema/apartments");
const auth = require("../middlewares/auth");
const agents = require("../middlewares/agents");
const validator = require("../middlewares/validator");
const express = require("express");
const router = express.Router();

router.get("/", get_apartments);
router.get("/:id", get_apartment_details);
router.post("/" [validator(add_apartment_schema), agents], add_apartment);
router.post("/rents/:id", [validator(rent_apartment_schema), auth], rent_apartment);
router.get("/search", [validator(search_apartment_schema)], search_for_apartment);
router.put("/:id", [validator(add_apartment_schema), agents], update_apartment_status);

module.exports = router;