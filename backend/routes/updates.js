const pool = require("../db/pg/db");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUpdates (data) {
  var result = await prisma.update.findMany();
  return result;
}

async function createUpdate (data) {
   //var result = await pool.query('INSERT INTO update (message) VALUES ($1);', [data.message]);
  var result = await prisma.update.create({
    data: {
      message : data.message
    }
  })

}

module.exports = {getUpdates,createUpdate}
