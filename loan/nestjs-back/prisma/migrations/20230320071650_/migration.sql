/*
  Warnings:

  - Added the required column `creditorsConfirmationId` to the `creditors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "creditors" ADD COLUMN     "creditorsConfirmationId" UUID NOT NULL;
