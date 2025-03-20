/*
  Warnings:

  - You are about to drop the column `deafultBillingAddres` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `defaultShippingAddress` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `addresses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contactNumber` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userImage` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `deafultBillingAddres`,
    DROP COLUMN `defaultShippingAddress`,
    ADD COLUMN `contactNumber` BIGINT NOT NULL,
    ADD COLUMN `emailNotificationActive` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `gender` ENUM('MALE', 'FEMALE', 'OTHERS') NOT NULL DEFAULT 'MALE',
    ADD COLUMN `smsNotificationActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `userImage` VARCHAR(191) NOT NULL,
    MODIFY `role` ENUM('ADMIN', 'USER', 'COMPANY') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `userlogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastLoginDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastJobApplyDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `addresses_userId_key` ON `addresses`(`userId`);

-- AddForeignKey
ALTER TABLE `userlogs` ADD CONSTRAINT `userlogs_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
