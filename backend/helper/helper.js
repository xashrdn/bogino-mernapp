const jwt = require("jsonwebtoken");

exports.TokenGenerator = async ({ uid, expiresIn }) => {
  const payload = { uid: uid };
  const token = await jwt.sign(payload, process.env.JTW || "rvvl123", {
    expiresIn: expiresIn,
  });
  return token;
};

exports.TokenChecker = async ({ token, secret }) => {
  const result = await jwt.verify(token, secret, (err, decoded) => {
    if (err && err.message === "jwt expired") {
      return "Expired Token";
    } else if (err) {
      return "Invalid Token";
    }
    return decoded;
  });
  return result;
};
