/*
  Warnings:

  - You are about to drop the column `jobId` on the `Review` table. All the data in the column will be lost.
  - Added the required column `projectId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_jobId_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "jobId",
ADD COLUMN     "projectId" TEXT NOT NULL;
