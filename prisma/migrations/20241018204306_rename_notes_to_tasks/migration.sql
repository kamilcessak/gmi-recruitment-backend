/*
  Warnings:

  - You are about to drop the `Notes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Notes";

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
