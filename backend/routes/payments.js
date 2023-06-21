const pool = require("./db");

async function getPaymentsByApartmentNumber (data) {
  console.log(data)
  var result = await pool.query('SELECT * FROM apartments WHERE apartment_number = $1;', [data.apartmentNumber])
  console.log(data.apartmentNumber)
  var city = result.rows[0].address;
  var amount = result.rows[0].payment_amount;
  result = await pool.query('SELECT * FROM payments WHERE apartment_number = $1;', [data.apartmentNumber]);
  var historyPayment=[];
  for (let i = 0; i < result.rowCount; i++) {
    historyPayment.push(result.rows[i].payment_date);
  }
  return {name : data.name , apartmentNumber: data.apartmentNumber ,address : city , paymentAmount : amount ,historyPayment :historyPayment }
}

module.exports = {getPaymentsByApartmentNumber}
