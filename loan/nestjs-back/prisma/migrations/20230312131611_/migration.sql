/*
  Warnings:

  - You are about to drop the `creditors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `debtors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "creditors" DROP CONSTRAINT "creditors_creditorUniqueId_fkey";

-- DropForeignKey
ALTER TABLE "debtors" DROP CONSTRAINT "debtors_debtorUniqueId_fkey";

-- DropTable
DROP TABLE "creditors";

-- DropTable
DROP TABLE "debtors";
