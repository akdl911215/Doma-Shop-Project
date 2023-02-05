/*
  Warnings:

  - The primary key for the `main_board` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `main_board_comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `noteId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `main_board_re_comment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nickname]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `id` on the `main_board` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `main_board_comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `nickname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "main_board" DROP CONSTRAINT "main_board_userId_fkey";

-- DropForeignKey
ALTER TABLE "main_board_comment" DROP CONSTRAINT "main_board_comment_mainBoardId_fkey";

-- DropForeignKey
ALTER TABLE "main_board_re_comment" DROP CONSTRAINT "main_board_re_comment_mainBoardCommentId_fkey";

-- DropIndex
DROP INDEX "users_noteId_key";

-- AlterTable
ALTER TABLE "main_board" DROP CONSTRAINT "main_board_pkey",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "main_board_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "main_board_comment" DROP CONSTRAINT "main_board_comment_pkey",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "mainBoardId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "main_board_comment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "noteId",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "main_board_re_comment";

-- CreateTable
CREATE TABLE "loans" (
    "id" UUID NOT NULL,
    "debtor" TEXT NOT NULL,
    "creditor" TEXT NOT NULL,
    "totalAmountLoan" INTEGER NOT NULL,

    CONSTRAINT "loans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "debtors" (
    "id" UUID NOT NULL,

    CONSTRAINT "debtors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "creditor" (
    "id" UUID NOT NULL,

    CONSTRAINT "creditor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s" (
    "id" UUID NOT NULL,
    "mainBoardCommentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reComment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "s_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userId_key" ON "users"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- AddForeignKey
ALTER TABLE "main_board" ADD CONSTRAINT "main_board_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "main_board_comment" ADD CONSTRAINT "main_board_comment_mainBoardId_fkey" FOREIGN KEY ("mainBoardId") REFERENCES "main_board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s" ADD CONSTRAINT "s_mainBoardCommentId_fkey" FOREIGN KEY ("mainBoardCommentId") REFERENCES "main_board_comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
