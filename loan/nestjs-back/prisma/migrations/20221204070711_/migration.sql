-- CreateEnum
CREATE TYPE "SocialType" AS ENUM ('KAKAO', 'NAVER', 'BASIC');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "noteId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "isMarketing" BOOLEAN NOT NULL DEFAULT false,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "social" "SocialType" NOT NULL DEFAULT 'BASIC',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_noteId_key" ON "users"("noteId");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
