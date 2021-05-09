const jwt = require("jsonwebtoken")
function getToken(_id) {
  //assign a token
  const token_id = jwt.sign({ _id: user._id }, process.env.SECRET_CODE, {
    expiresIn: "30d",
  });
}

module.exports = getToken;
