-- CreateTable
CREATE TABLE `buisnessStreams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `buisnessStreamName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companyProfiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyName` VARCHAR(191) NOT NULL,
    `profileDescription` VARCHAR(191) NOT NULL,
    `buisnessStreamID` INTEGER NOT NULL,
    `companyWebsitUrl` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `companyProfiles` ADD CONSTRAINT `companyProfiles_buisnessStreamID_fkey` FOREIGN KEY (`buisnessStreamID`) REFERENCES `buisnessStreams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
