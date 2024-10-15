/*
  Warnings:

  - A unique constraint covering the columns `[razorpayId]` on the table `Contact_Details` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `razorpayId` to the `Contact_Details` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contact_Details" DROP CONSTRAINT "Contact_Details_contactId_fkey";

-- DropIndex
DROP INDEX "Contact_Details_contactId_key";

-- AlterTable
ALTER TABLE "Contact_Details" ADD COLUMN     "razorpayId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Contact_Details_razorpayId_key" ON "Contact_Details"("razorpayId");

-- AddForeignKey
ALTER TABLE "Contact_Details" ADD CONSTRAINT "Contact_Details_razorpayId_fkey" FOREIGN KEY ("razorpayId") REFERENCES "Razorpay_Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
