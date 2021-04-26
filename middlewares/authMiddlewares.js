const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) return res.status(403).send("unauthorized access");

  const verified_token = jwt.verify(token, process.env.SECRET_CODE);
  req.user = verified_token;
  next();
};

module.exports = protect;
