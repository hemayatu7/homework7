const express = require("express");
const {
  createHotel,
  getAllHotel,
  getSingleHotel,
  deleteHotel,
  updateHotel,
} = require("../controllers/hotelController");
const protect = require("../middlewares/authMiddlewares");
const router = express.Router();

router.route("/").post(createHotel).get(getAllHotel);

router
  .route("/:_id")
  .get(protect, getSingleHotel)
  .delete(protect, deleteHotel)
  .put(protect, updateHotel);

module.exports = router;
