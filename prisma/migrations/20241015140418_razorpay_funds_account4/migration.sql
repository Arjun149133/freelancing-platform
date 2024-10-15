/*
  Warnings:

  - A unique constraint covering the columns `[accountDetailsId]` on the table `Bank_Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountDetailsId` to the `Bank_Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bank_Account" DROP CONSTRAINT "Bank_Account_account_number_fkey";

-- DropIndex
DROP INDEX "Bank_Account_account_number_key";

-- AlterTable
ALTER TABLE "Bank_Account" ADD COLUMN     "accountDetailsId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Bank_Account_accountDetailsId_key" ON "Bank_Account"("accountDetailsId");

-- AddForeignKey
ALTER TABLE "Bank_Account" ADD CONSTRAINT "Bank_Account_accountDetailsId_fkey" FOREIGN KEY ("accountDetailsId") REFERENCES "Account_Details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
