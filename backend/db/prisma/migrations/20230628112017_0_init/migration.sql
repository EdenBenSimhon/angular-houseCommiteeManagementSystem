-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id"),
);

-- CreateTable
CREATE TABLE "apartments" (
    "address" VARCHAR(255) NOT NULL,
    "apartment_number" INTEGER NOT NULL,
    "number_of_rooms" INTEGER NOT NULL,
    "payment_amount" INTEGER NOT NULL,

);

-- CreateTable
CREATE TABLE "payments" (
    "payment_id" SERIAL  NOT NULL,
    "apartment_number" INTEGER NOT NULL,
    "number_of_rooms" INTEGER NOT NULL,
    "payment_date" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("payment_id"),

);

-- CreateTable
CREATE TABLE "tenants" (
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "apartment_number" INTEGER NOT NULL,
    "admin" BOOLEAN NOT NULL,
    CONSTRAINT "tenants_pkey" PRIMARY KEY ("email"),

);

-- CreateTable
CREATE TABLE "update" (
    "message_id" SERIAL NOT NULL,
    "message" VARCHAR(1024),

);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");


--CreateIndex
CREATE UNIQUE INDEX "payments_key" ON "payments"("payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_email_key" ON "tenants"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_apartment_number_key" ON "tenants"("apartment_number");

-- CreateIndex
CREATE UNIQUE INDEX "update_message_id_key" ON "update"("message_id");
