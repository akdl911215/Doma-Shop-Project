/*
  Warnings:

  - Changed the type of `creditorUniqueId` on the `loans` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "loans" ALTER COLUMN "creditorId" SET NOT NULL,
ALTER COLUMN "creditorId" SET DATA TYPE TEXT,
DROP COLUMN "creditorUniqueId",
ADD COLUMN     "creditorUniqueId" UUID NOT NULL;
