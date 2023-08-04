const jwt = require("jsonwebtoken");
const User = require('../model/user');
const Refesh = require('../model/refresh');

const verifyuser = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  const decoded = jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (decoded) {
        req.user = decoded;
        next();
      } else if (err.message === "TokenExpiredError") {
        return res.status(403).send({
          code: "120",
          msg: "Access token expired",
        });
      } else {
        return res
          .status(403)
          .send({ msg: "User not authenticated", code: 888 });
      }
    }
  );
};

module.exports = { verifyuser };