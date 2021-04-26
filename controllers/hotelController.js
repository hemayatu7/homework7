const Hotel = require("../models/hotelSchema");

//create a hotel
const createHotel = async (req, res) => {
  const newHotel = new Hotel({
    location: req.body.location,
    type: req.body.type,
    name: req.body.name,
    contact: req.body.contact,
  });
  await newHotel.save();
  res.status(201).json(newHotel);
};

//get all hotels
const getAllHotel = async (req, res) => {
  const hotel = await Hotel.find();
  res.json(hotel);
};

//get single hotel
const getSingleHotel = async (req, res) => {
  const hotel = await Hotel.findById(req.params._id);
  res.json(hotel);
};

//delete hotel
const deleteHotel = async (req, res) => {
  const foundHotel = await Hotel.findById(req.params._id);
  if (foundHotel) {
    foundHotel.remove();
    res.json({ msg: `${foundHotel.name} removed` });
  } else {
    res.status(404).json({ error: "Hotel not found" });
  }
};

//update a hotel
const updateHotel = async (req, res) => {
  const foundHotel = await Hotel.findById(req.params._id);
  if (foundHotel) {
    (foundHotel.day = req.body.day),
      (foundHotel.type = req.body.type),
      (foundHotel.name = req.body.name),
      (foundHotel.quantity = req.body.quantity);

    const updatedHotel = await foundHotel.save();
    res.json({ updatedHotel });
  }
};

module.exports = {
  createHotel,
  getAllHotel,
  getSingleHotel,
  deleteHotel,
  updateHotel,
};
