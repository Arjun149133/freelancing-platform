-- CreateTable
CREATE TABLE "Razorpay_Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Razorpay_Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact_Details" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "referenceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contactId" TEXT NOT NULL,

    CONSTRAINT "Contact_Details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account_Details" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,

    CONSTRAINT "Account_Details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank_Account" (
    "id" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "ifsc_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Bank_Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Razorpay_Account_userId_key" ON "Razorpay_Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_Details_contactId_key" ON "Contact_Details"("contactId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_Details_accountId_key" ON "Account_Details"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Bank_Account_account_number_key" ON "Bank_Account"("account_number");

-- AddForeignKey
ALTER TABLE "Razorpay_Account" ADD CONSTRAINT "Razorpay_Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact_Details" ADD CONSTRAINT "Contact_Details_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Razorpay_Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account_Details" ADD CONSTRAINT "Account_Details_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Razorpay_Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank_Account" ADD CONSTRAINT "Bank_Account_account_number_fkey" FOREIGN KEY ("account_number") REFERENCES "Account_Details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
