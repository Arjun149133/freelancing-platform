/*
  Warnings:

  - You are about to drop the column `funds_account_id` on the `Account_Details` table. All the data in the column will be lost.
  - Added the required column `fund_account_id` to the `Account_Details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account_Details" DROP COLUMN "funds_account_id",
ADD COLUMN     "fund_account_id" TEXT NOT NULL;
