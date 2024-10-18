/*
  Warnings:

  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `status` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_notes_id_fkey";

-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "description" TEXT,
ADD COLUMN     "status" TEXT NOT NULL;

-- DropTable
DROP TABLE "Note";
