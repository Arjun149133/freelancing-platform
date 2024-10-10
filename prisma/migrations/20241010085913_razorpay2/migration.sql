-- AlterEnum
ALTER TYPE "PaymentMethod" ADD VALUE 'RAZORPAY';

-- DropForeignKey
ALTER TABLE "Razorpay" DROP CONSTRAINT "Razorpay_paymentId_fkey";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "razorpayId" TEXT;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_razorpayId_fkey" FOREIGN KEY ("razorpayId") REFERENCES "Razorpay"("id") ON DELETE SET NULL ON UPDATE CASCADE;
