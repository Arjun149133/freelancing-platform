/*
  Warnings:

  - You are about to drop the column `clientId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `freelancerId` on the `Review` table. All the data in the column will be lost.
  - Added the required column `reviewGiverId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviewReceiverId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_freelancerId_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "clientId",
DROP COLUMN "freelancerId",
ADD COLUMN     "reviewGiverId" TEXT NOT NULL,
ADD COLUMN     "reviewReceiverId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewGiverId_fkey" FOREIGN KEY ("reviewGiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_reviewReceiverId_fkey" FOREIGN KEY ("reviewReceiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
