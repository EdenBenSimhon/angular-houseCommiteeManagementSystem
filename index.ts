
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
async function main() {
  await prisma.tenants.create({
    data: {
      email: 'alice@prisma.io',
      password : '123456' ,
      name : 'alice' ,
      apartment_number : 6 ,
      admin : false
    },
  })
  const allUsers = await prisma.tenants.findMany();
  console.log(allUsers)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

