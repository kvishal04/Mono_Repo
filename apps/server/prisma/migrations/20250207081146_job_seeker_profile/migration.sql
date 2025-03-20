/*
  Warnings:

  - You are about to drop the `userlogs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `userlogs` DROP FOREIGN KEY `userlogs_userId_fkey`;

-- DropTable
DROP TABLE `userlogs`;

-- CreateTable
CREATE TABLE `userLogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastLoginDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastJobApplyDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `educationDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `certificateDegreeName` VARCHAR(191) NOT NULL,
    `IntitutionName` VARCHAR(191) NOT NULL,
    `startingDate` DATETIME(3) NOT NULL,
    `completionDate` DATETIME(3) NOT NULL,
    `percentage` DOUBLE NOT NULL,
    `cgpa` DOUBLE NOT NULL,
    `userAccount` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seekerProfiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `currentSalary` DOUBLE NOT NULL,
    `isAnnullyMonthly` BOOLEAN NOT NULL DEFAULT false,
    `userAccount` INTEGER NOT NULL,
    `currency` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `seekerProfiles_userAccount_key`(`userAccount`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skillSets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `skillSetName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seekerSkillSets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `skillSetId` INTEGER NOT NULL,
    `userAccount` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `experienceDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userAccount` INTEGER NOT NULL,
    `isCurrentJob` BOOLEAN NOT NULL DEFAULT false,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `jobTitle` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userLogs` ADD CONSTRAINT `userLogs_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `educationDetails` ADD CONSTRAINT `educationDetails_userAccount_fkey` FOREIGN KEY (`userAccount`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `seekerProfiles` ADD CONSTRAINT `seekerProfiles_userAccount_fkey` FOREIGN KEY (`userAccount`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `seekerSkillSets` ADD CONSTRAINT `seekerSkillSets_skillSetId_fkey` FOREIGN KEY (`skillSetId`) REFERENCES `skillSets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `seekerSkillSets` ADD CONSTRAINT `seekerSkillSets_userAccount_fkey` FOREIGN KEY (`userAccount`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `experienceDetails` ADD CONSTRAINT `experienceDetails_userAccount_fkey` FOREIGN KEY (`userAccount`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
