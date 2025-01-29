/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `deletedAt`;
