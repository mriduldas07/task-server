const jwt = require("jsonwebtoken");

module.exports.createToken = (user) => {
  const token = jwt.sign(
    {
      user,
    },
    "mridul",
    {
      expiresIn: "7d",
    }
  );
  return token;
};

module.exports.auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.send("You are not authorized");
    }

    let verifiedUser = null;
    verifiedUser = jwt.verify(token, "mridul");
    req.user = verifiedUser;

    next();
  } catch (error) {}
};
