/*
  Warnings:

  - You are about to drop the column `authId` on the `debtors` table. All the data in the column will be lost.
  - You are about to drop the column `creditor` on the `loans` table. All the data in the column will be lost.
  - You are about to drop the column `debtor` on the `loans` table. All the data in the column will be lost.
  - You are about to drop the `creditor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `debtorPrimaryKey` to the `debtors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creditorUniqueId` to the `loans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `debtorUniqueId` to the `loans` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "creditor" DROP CONSTRAINT "creditor_authId_fkey";

-- DropForeignKey
ALTER TABLE "debtors" DROP CONSTRAINT "debtors_authId_fkey";

-- AlterTable
ALTER TABLE "debtors" DROP COLUMN "authId",
ADD COLUMN     "debtorPrimaryKey" UUID NOT NULL;

-- AlterTable
ALTER TABLE "loans" DROP COLUMN "creditor",
DROP COLUMN "debtor",
ADD COLUMN     "creditorUniqueId" UUID NOT NULL,
ADD COLUMN     "debtorUniqueId" UUID NOT NULL,
ALTER COLUMN "debtorId" SET DATA TYPE TEXT,
ALTER COLUMN "creditorId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "creditor";

-- CreateTable
CREATE TABLE "creditors" (
    "id" UUID NOT NULL,
    "creditorPrimaryKEy" UUID NOT NULL,

    CONSTRAINT "creditors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "debtors" ADD CONSTRAINT "debtors_debtorPrimaryKey_fkey" FOREIGN KEY ("debtorPrimaryKey") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "creditors" ADD CONSTRAINT "creditors_creditorPrimaryKEy_fkey" FOREIGN KEY ("creditorPrimaryKEy") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
