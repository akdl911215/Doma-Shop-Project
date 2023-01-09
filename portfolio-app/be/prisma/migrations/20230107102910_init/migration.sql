-- CreateEnum
CREATE TYPE "SocialType" AS ENUM ('KAKAO', 'NAVER', 'BASIC');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "investorId" TEXT NOT NULL,
    "nickName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "isMarketing" BOOLEAN NOT NULL DEFAULT false,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "social" "SocialType" NOT NULL DEFAULT 'BASIC',
    "profileImage" TEXT,
    "backImage" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_investorId_key" ON "users"("investorId");

-- CreateIndex
CREATE UNIQUE INDEX "users_nickName_key" ON "users"("nickName");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
