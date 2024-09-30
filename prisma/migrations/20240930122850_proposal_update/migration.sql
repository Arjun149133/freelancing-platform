/*
  Warnings:

  - You are about to drop the column `userId` on the `Proposal` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_userId_fkey";

-- AlterTable
ALTER TABLE "Proposal" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_freelancerId_fkey" FOREIGN KEY ("freelancerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
