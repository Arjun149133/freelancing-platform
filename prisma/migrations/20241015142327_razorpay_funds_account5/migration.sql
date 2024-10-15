/*
  Warnings:

  - Added the required column `funds_account_id` to the `Account_Details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account_Details" ADD COLUMN     "funds_account_id" TEXT NOT NULL;
