/*
  Warnings:

  - You are about to drop the column `creditorId` on the `loans` table. All the data in the column will be lost.
  - You are about to drop the column `creditorUniqueId` on the `loans` table. All the data in the column will be lost.
  - You are about to drop the column `debtorId` on the `loans` table. All the data in the column will be lost.
  - You are about to drop the column `debtorUniqueId` on the `loans` table. All the data in the column will be lost.
  - Added the required column `creditorsId` to the `loans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `debtorsId` to the `loans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "loans" DROP COLUMN "creditorId",
DROP COLUMN "creditorUniqueId",
DROP COLUMN "debtorId",
DROP COLUMN "debtorUniqueId",
ADD COLUMN     "creditorsId" UUID NOT NULL,
ADD COLUMN     "debtorsId" UUID NOT NULL;
