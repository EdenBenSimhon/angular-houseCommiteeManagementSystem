const pool = require('../db/pg/db');
const jwt = require("jsonwebtoken");
const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const auth = require('./auth');


async function register(data){
  var checkIfCreated = await prisma.tenants.findMany({
    where: {
      email: data.email.toLowerCase(),
    },
  })
  console.log(checkIfCreated[0])
  const hashedPassword = await auth.hashPassword(data.password);
  if( checkIfCreated[0] === undefined) {
    await prisma.tenants.create({
      data: {
        email: data.email.toLowerCase(),
        password: hashedPassword,
        name: data.name,
        apartment_number: Number.parseInt(data.apartmentNumber),
        admin: false
      }
    })
    return true;

  }
  else {
    return false;
  }
  /* await pool.query('INSERT INTO tenants (email, password,name,Apartment_number,admin) VALUES ($1, $2, $3 , $4, $5);',
     [data.email.toLowerCase(), data.password,data.name,data.apartmentNumber,false]); */
}

async function login (data) {
/* console.log("user test:" + userTest[0].password);
// else {
// // const userLogin = await prisma.tenants.findMany({
// //   where: {
// //     AND: [
// //       {
// //         email: data.email.toLowerCase(),
// //       },
// //       {
// //         password: data.password
// //       }]
// //   }
// // });
// if( typeof userLogin[0] === "undefined"){
//   console.log('Invalid username or password');
//   return result;
// }
// console.log(" the alice :" + typeof userLogin[0]);
// var result = await pool.query('SELECT * FROM Tenants WHERE email = $1 AND password = $2;', [data.email.toLowerCase(), data.password])
// var rows = result.rowCount ? true : false ;
// if (rows == false) {
//   console.log('Invalid username or password');
//   return rows;
// }
//need return the token to client*/
  var result = false;
  const userTest = await prisma.tenants.findMany({
    where: {
      email : data.email.toLowerCase(),
    }
  });
  if (userTest[0].admin === true) {
    return {role: 'admin' ,email : userTest[0].email, name: userTest[0].name , apartmentNumber: userTest[0].apartment_number};
  }
  if (!bcrypt.compareSync(data.password , userTest[0].password)) {
    console.log('Invalid username or password');
    return result;
  }
else {
    // if (userTest[0].admin === true) {
    //   return {type: "IsAdmin" ,email : userTest[0].email, name: userTest[0].name , apartmentNumber: userTest[0].apartment_number};
    // } else
    return {role: 'tenant',email : userTest[0].email,name: userTest[0].name , apartmentNumber: userTest[0].apartment_number};
  }
}

async function getTenants(){
  const alltenants = await prisma.tenants.findMany();
    // var result = await pool.query('SELECT * FROM tenants;');
    // console.log("all tenants from get Tenants"+ alltenants);
  return alltenants;
}

async function deleteTenant(data){
  const deletedTenant = await prisma.tenants.delete({
    where: {
      apartment_number: Number.parseInt(data.apartment_number),
    },
  });
  // console.log(data.apartment_number);
  // var result = await pool.query('DELETE FROM tenants WHERE apartment_number = $1;',[data.apartment_number]);
  return deletedTenant;
}
module.exports = {login,register,getTenants,deleteTenant}
