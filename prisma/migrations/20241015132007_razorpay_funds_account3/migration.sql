-- DropForeignKey
ALTER TABLE "Bank_Account" DROP CONSTRAINT "Bank_Account_account_number_fkey";

-- AddForeignKey
ALTER TABLE "Bank_Account" ADD CONSTRAINT "Bank_Account_account_number_fkey" FOREIGN KEY ("account_number") REFERENCES "Account_Details"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;
