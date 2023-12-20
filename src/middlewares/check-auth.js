const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];

    // Verify the token using the secret key ("abc123" in this case)
    const decoded = jwt.verify(token, "abc123");

    // Attach the decoded user data to the request object
    req.userData = decoded;

    // Attach the user ID to the request object
    req.userId = decoded.userId;

    // Call the next middleware in the chain
    next();
  } catch (err) {
    // If the token is invalid or not provided, return a 401 Unauthorized response
    return res.status(401).json({
      message: "Auth Failed",
    });
  }
};
