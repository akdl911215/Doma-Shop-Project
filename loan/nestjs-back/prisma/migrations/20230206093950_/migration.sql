/*
  Warnings:

  - You are about to drop the column `ownerId` on the `main_board` table. All the data in the column will be lost.
  - Added the required column `userId` to the `main_board` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "main_board" DROP CONSTRAINT "main_board_ownerId_fkey";

-- AlterTable
ALTER TABLE "main_board" DROP COLUMN "ownerId",
ADD COLUMN     "userId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "main_board" ADD CONSTRAINT "main_board_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
