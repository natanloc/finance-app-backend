-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('Income', 'Outcome');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('Paid', 'Pending');

-- CreateEnum
CREATE TYPE "TransactionFrequency" AS ENUM ('Fixed', 'Variable');

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "type" "TransactionType" NOT NULL,
    "status" "TransactionStatus" NOT NULL,
    "frequency" "TransactionFrequency" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "validity" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);
