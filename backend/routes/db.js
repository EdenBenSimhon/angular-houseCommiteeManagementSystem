const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '12345678',
  host: 'localhost',
  port: 5433,
  database: 'housecommiteemanagmentsystem'
});

module.exports = pool;
