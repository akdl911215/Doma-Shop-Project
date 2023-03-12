/*
  Warnings:

  - The `creditorId` column on the `loans` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `creditorUniqueId` column on the `loans` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "loans" DROP COLUMN "creditorId",
ADD COLUMN     "creditorId" TEXT[],
DROP COLUMN "creditorUniqueId",
ADD COLUMN     "creditorUniqueId" UUID[];
