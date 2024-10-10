/*
  Warnings:

  - You are about to drop the column `jobId` on the `Escrow` table. All the data in the column will be lost.
  - Added the required column `contractId` to the `Escrow` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MilestoneStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'RELEASED', 'DISPUTED');

-- DropIndex
DROP INDEX "Escrow_jobId_key";

-- AlterTable
ALTER TABLE "Escrow" DROP COLUMN "jobId",
ADD COLUMN     "contractId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Escrow" ADD CONSTRAINT "Escrow_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
