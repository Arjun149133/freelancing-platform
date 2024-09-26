/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `JobCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `jobCategory` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('WEB_DEVELOPMENT', 'MOBILE_DEVELOPMENT', 'GRAPHIC_DESIGN', 'DIGITAL_MARKETING', 'WRITING', 'VIDEO_EDITING', 'OTHER');

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "categoryId",
ADD COLUMN     "jobCategory" "Category" NOT NULL;

-- DropTable
DROP TABLE "JobCategory";
