/*
  Warnings:

  - You are about to drop the column `jobId` on the `Proposal` table. All the data in the column will be lost.
  - Added the required column `projectId` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Proposal" DROP COLUMN "jobId",
ADD COLUMN     "projectId" TEXT NOT NULL,
ALTER COLUMN "freelancerId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
