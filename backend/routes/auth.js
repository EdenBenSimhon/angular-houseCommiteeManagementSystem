const secretKey = 'mySecretKey';
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");


async function createToken(user) {
  const header = { alg: "HS256", typ: "JWT" };
  console.log(user.apartment_number);
  const token = jwt.sign({id: user.apartmentNumber , role: user.role}, secretKey, {expiresIn: '1h'});
  console.log(token);
  return token;
}

async function hashPassword(password){
  const hashedPassword = bcrypt.hashSync(password, 10);
  return hashedPassword;
}

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Authentication token missing' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid authentication token' });
    }
    req.user = decoded; // User information from the token
    next();
  });
 }

module.exports = {createToken,hashPassword,authenticate};
