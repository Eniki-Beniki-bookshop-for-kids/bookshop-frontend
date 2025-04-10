/*
  Warnings:

  - You are about to drop the `_UserFavoriteBooks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserFavoriteBooks" DROP CONSTRAINT "_UserFavoriteBooks_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFavoriteBooks" DROP CONSTRAINT "_UserFavoriteBooks_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "favoriteBooks" INTEGER[];

-- DropTable
DROP TABLE "_UserFavoriteBooks";
