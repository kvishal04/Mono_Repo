-- AlterTable
ALTER TABLE `products` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `deletedAt` DATETIME(3) NULL;
