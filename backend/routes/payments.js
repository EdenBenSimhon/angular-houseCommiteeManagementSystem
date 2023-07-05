const pool = require("../db/pg/db");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getPaymentsByApartmentNumber (apartmentNumber) {
  console.log("apartment Number of payments:  " +apartmentNumber);
  var result = await prisma.apartments.findMany({
    where: {
      apartment_number: Number.parseInt(apartmentNumber),
    },
  })
  console.log(result)
  var tenant = await prisma.tenants.findMany({
    where: {
      apartment_number: Number.parseInt(apartmentNumber),
    },
  })
  console.log(tenant);
  console.log(tenant[0].name);

  var city = result[0].address;
  var amount = result[0].payment_amount;
  result = await prisma.payments.findMany({
    where: {
      apartment_number: Number.parseInt(apartmentNumber),
    },
  })
  var historyPayment=[];
  for (let i = 0; i < result.length; i++) {
    historyPayment.push(result[i].payment_date);
  }
  return {name : tenant[0].name , apartmentNumber: apartmentNumber ,address : city , paymentAmount : amount ,historyPayment :historyPayment }
}

module.exports = {getPaymentsByApartmentNumber}
