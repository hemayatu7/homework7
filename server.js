const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const hotelRoute = require("./routes/hotelRoute");
const usersRoute = require("./routes/usersRoute");

dotenv.config();

const app = express();

connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/v2/hotel", hotelRoute);
app.use("/api/v1/users", usersRoute);

//home
app.get("/", (req, res) => {
  res.send("<h1>welcome</h1>");
});

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`server is running ${port}`));
