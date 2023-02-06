/*
  Warnings:

  - You are about to drop the `main_board` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "main_board" DROP CONSTRAINT "main_board_userId_fkey";

-- DropTable
DROP TABLE "main_board";

-- CreateTable
CREATE TABLE "main_boards" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "main_boards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "main_boards" ADD CONSTRAINT "main_boards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
