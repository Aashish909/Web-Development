const jwt = require("jsonwebtoken");
// require(dotenv).config()
const dotenv = require("dotenv")
dotenv.config()

// const SECRET = "secretKey"; 

function generateJWT(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
}

// function verifyJWT(token) {
//   return jwt.verify(token, SECRET);
// }
function verifyJWT(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("DECODED TOKEN:", decoded);
    return decoded;
  } catch (err) {
    // console.log("VERIFY ERROR:", err.message);
    return null;
  }
}

function decodeJWT(token) {
  return jwt.decode(token);
}

module.exports = { generateJWT, verifyJWT, decodeJWT };
