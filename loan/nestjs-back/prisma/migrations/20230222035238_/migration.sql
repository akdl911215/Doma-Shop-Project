/*
  Warnings:

  - Added the required column `creditor` to the `loans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `debtor` to the `loans` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "loans" DROP CONSTRAINT "loans_creditorId_fkey";

-- DropForeignKey
ALTER TABLE "loans" DROP CONSTRAINT "loans_debtorId_fkey";

-- AlterTable
ALTER TABLE "loans" ADD COLUMN     "creditor" TEXT NOT NULL,
ADD COLUMN     "debtor" TEXT NOT NULL;
