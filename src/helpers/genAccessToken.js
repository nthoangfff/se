const jwt = require("jsonwebtoken");

// generating access token
exports.generateAccessToken = (user = {}) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username,
    },
   "abc123",
    {
      expiresIn: "24h",
    }
  );
};
