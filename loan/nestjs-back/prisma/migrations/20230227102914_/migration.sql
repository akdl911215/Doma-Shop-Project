/*
  Warnings:

  - You are about to drop the column `creditorPrimaryKEy` on the `creditors` table. All the data in the column will be lost.
  - You are about to drop the column `debtorPrimaryKey` on the `debtors` table. All the data in the column will be lost.
  - Added the required column `creditorUniqueId` to the `creditors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `debtorUniqueId` to the `debtors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "creditors" DROP CONSTRAINT "creditors_creditorPrimaryKEy_fkey";

-- DropForeignKey
ALTER TABLE "debtors" DROP CONSTRAINT "debtors_debtorPrimaryKey_fkey";

-- AlterTable
ALTER TABLE "creditors" DROP COLUMN "creditorPrimaryKEy",
ADD COLUMN     "creditorUniqueId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "debtors" DROP COLUMN "debtorPrimaryKey",
ADD COLUMN     "debtorUniqueId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "debtors" ADD CONSTRAINT "debtors_debtorUniqueId_fkey" FOREIGN KEY ("debtorUniqueId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "creditors" ADD CONSTRAINT "creditors_creditorUniqueId_fkey" FOREIGN KEY ("creditorUniqueId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
