const pool = require("../db/pg/db");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function getPaymentAmount(data){

  const result = await prisma.apartments.findMany({
      where: {
        apartment_number: Number.parseInt(data), // Example WHERE condition: age equals 25
      },
      select: {
        payment_amount: true // Selecting only the 'name' column
      }
  })

  // var result = await pool.query('SELECT payment_amount FROM apartments WHERE apartment_number = $1;', [data])
  // return result.rows[0].payment_amount;
  // console.log("payment amount " + result1[0])
  return result[0].payment_amount;
}


module.exports = {getPaymentAmount}
