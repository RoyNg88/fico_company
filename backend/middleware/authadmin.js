const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const tokenad =
    req.body.tokenad || req.query.tokenad || req.headers["authentication"];

  if (!tokenad) {
    return res.status(403).send("A tokenad is required for authentication");
  }
  try {
    const decoded = jwt.verify(tokenad, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
