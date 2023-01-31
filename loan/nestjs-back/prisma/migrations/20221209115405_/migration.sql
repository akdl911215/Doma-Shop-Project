-- CreateTable
CREATE TABLE "main_board" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "main_board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "main_board_comment" (
    "id" SERIAL NOT NULL,
    "mainBoardId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "main_board_comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "main_board_re_comment" (
    "id" SERIAL NOT NULL,
    "mainBoardCommentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "reComment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "main_board_re_comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "main_board" ADD CONSTRAINT "main_board_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "main_board_comment" ADD CONSTRAINT "main_board_comment_mainBoardId_fkey" FOREIGN KEY ("mainBoardId") REFERENCES "main_board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "main_board_re_comment" ADD CONSTRAINT "main_board_re_comment_mainBoardCommentId_fkey" FOREIGN KEY ("mainBoardCommentId") REFERENCES "main_board_comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
