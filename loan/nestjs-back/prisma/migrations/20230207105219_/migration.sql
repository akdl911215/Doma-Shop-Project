-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "userId" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "isMarketing" BOOLEAN NOT NULL DEFAULT false,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "creditRating" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loans" (
    "id" UUID NOT NULL,
    "debtorId" UUID NOT NULL,
    "creditorId" UUID NOT NULL,
    "totalAmountLoan" INTEGER NOT NULL,
    "loanRepaymentDate" TIMESTAMP(3) NOT NULL,
    "interest" INTEGER NOT NULL,

    CONSTRAINT "loans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "debtors" (
    "id" UUID NOT NULL,
    "authId" UUID NOT NULL,
    "creditRating" INTEGER NOT NULL,

    CONSTRAINT "debtors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "creditor" (
    "id" UUID NOT NULL,
    "authId" UUID NOT NULL,

    CONSTRAINT "creditor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userId_key" ON "users"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- AddForeignKey
ALTER TABLE "loans" ADD CONSTRAINT "loans_debtorId_fkey" FOREIGN KEY ("debtorId") REFERENCES "debtors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loans" ADD CONSTRAINT "loans_creditorId_fkey" FOREIGN KEY ("creditorId") REFERENCES "creditor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "debtors" ADD CONSTRAINT "debtors_authId_fkey" FOREIGN KEY ("authId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "creditor" ADD CONSTRAINT "creditor_authId_fkey" FOREIGN KEY ("authId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
