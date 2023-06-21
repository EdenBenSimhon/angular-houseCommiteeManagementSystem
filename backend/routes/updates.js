const pool = require("./db");

async function getUpdates (data) {
  var result = await pool.query('SELECT * FROM update;')
  return result.rows;
}

async function createUpdate (data) {
  console.log(data)
  var result = await pool.query('INSERT INTO update (message) VALUES ($1);', [data.message]);

}

module.exports = {getUpdates,createUpdate}
