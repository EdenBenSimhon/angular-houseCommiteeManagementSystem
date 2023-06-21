const pool = require('./db');
const jwt = require("jsonwebtoken");


async function login (data) {
  var result = await pool.query('SELECT * FROM Tenants WHERE email = $1 AND password = $2;', [data.email.toLowerCase(), data.password])
  var rows = result.rowCount;
  console.log(result.rowCount)
  if (rows=== 0) {
    return {message: 'Invalid username or password'};
  }
  else {
    const user = result.rows[0];
    console.log(user)
    if (user.admin === true) {
      return {type: "IsAdmin" ,email : user.email, name: user.name , apartmentNumber: user.apartment_number};
    } else
      return {type: "IsTenant" ,email : user.email,name: user.name , apartmentNumber: user.apartment_number};
  }

}

async function register(data){
  await pool.query('INSERT INTO tenants (email, password,name,Apartment_number,admin) VALUES ($1, $2, $3 , $4, $5);',
    [data.email.toLowerCase(), data.password,data.name,data.apartmentNumber,false]);
  return {result: "good"}
}

async function getTenants(data){
    var result = await pool.query('SELECT * FROM tenants;')
    return result.rows;
}
module.exports = {login,register,getTenants}
