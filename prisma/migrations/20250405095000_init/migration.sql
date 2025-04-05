-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('Classics', 'Fantasy', 'ScienceFiction', 'Mystery', 'Romance', 'NonFiction', 'Coloring', 'fairyTales', 'Biography', 'History', 'Poetry', 'SelfHelp', 'Business', 'Travel', 'Cooking', 'Other');

-- CreateEnum
CREATE TYPE "BookTypes" AS ENUM ('Paperback', 'Ebook', 'Audiobook');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('Ukrainian', 'English', 'Russian', 'German', 'French', 'Spanish', 'Italian', 'Polish', 'Chinese', 'Japanese', 'Arabic', 'Turkish', 'Portuguese', 'Dutch', 'Swedish', 'Latin', 'Greek', 'Hebrew', 'Other');

-- CreateEnum
CREATE TYPE "CoverType" AS ENUM ('Hardcover', 'Softcover', 'Spiral');

-- CreateEnum
CREATE TYPE "PaperType" AS ENUM ('Offset', 'Newsprint', 'Writing', 'Coated', 'Vellum', 'Cardboard');

-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('ChildrensLiterature', 'AdultLiterature', 'YoungAdult', 'Parents', 'Other');

-- CreateEnum
CREATE TYPE "TargetAges" AS ENUM ('Age1_3', 'Age3_5', 'Age5_8', 'Age8_12', 'Teenager', 'AdultLiterature', 'Other');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('Pending', 'Paid', 'Shipped', 'Delivered', 'Cancelled');

-- CreateEnum
CREATE TYPE "ShippingMethod" AS ENUM ('Courier', 'Post', 'Pickup', 'Express');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CreditCard', 'CashOnDelivery', 'OnlineBanking', 'GooglePay', 'ApplePay');

-- CreateEnum
CREATE TYPE "Carrier" AS ENUM ('novaPost', 'ukrPost');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SuperAdmin', 'Admin', 'User');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "phoneNumber" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dateOfBirth" TIMESTAMP(3),
    "gender" "Gender",
    "address" TEXT,
    "city" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'User',
    "googleId" TEXT,
    "avatar" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Book" (
    "bookId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "originalTitle" TEXT NOT NULL,
    "genre" "Genre" NOT NULL DEFAULT 'Other',
    "categories" "Categories"[],
    "targetAges" "TargetAges"[],
    "series" TEXT,
    "publisher" TEXT NOT NULL,
    "publicationYear" INTEGER NOT NULL,
    "bookType" "BookTypes"[],
    "pageCount" INTEGER NOT NULL,
    "paperType" "PaperType",
    "language" "Language" NOT NULL,
    "originalLanguage" "Language" NOT NULL,
    "translator" TEXT,
    "coverType" "CoverType" NOT NULL,
    "weight" INTEGER,
    "dimensions" TEXT,
    "isbn" TEXT NOT NULL,
    "articleNumber" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "stockQuantity" INTEGER NOT NULL,
    "description" TEXT,
    "images" TEXT[],
    "isBestseller" BOOLEAN NOT NULL DEFAULT false,
    "isPublish" BOOLEAN NOT NULL DEFAULT true,
    "isGifted" BOOLEAN NOT NULL DEFAULT false,
    "totalSales" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "Review" (
    "reviewId" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "reviewName" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "reviewText" TEXT NOT NULL,
    "reviewDate" TIMESTAMP(3) NOT NULL,
    "source" TEXT,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("reviewId")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shippingAddress" TEXT NOT NULL,
    "shippingMethod" "ShippingMethod" NOT NULL DEFAULT 'Pickup',
    "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'CashOnDelivery',
    "status" "OrderStatus" NOT NULL DEFAULT 'Pending',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "OrderBook" (
    "orderId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderBook_pkey" PRIMARY KEY ("orderId","bookId")
);

-- CreateTable
CREATE TABLE "Shipping" (
    "shippingId" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "trackingNumber" TEXT,
    "estimatedDeliveryDate" TIMESTAMP(3) NOT NULL,
    "actualDeliveryDate" TIMESTAMP(3),
    "carrier" "Carrier" NOT NULL DEFAULT 'novaPost',
    "shippingCost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Shipping_pkey" PRIMARY KEY ("shippingId")
);

-- CreateTable
CREATE TABLE "_UserFavoriteBooks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserFavoriteBooks_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Shipping_orderId_key" ON "Shipping"("orderId");

-- CreateIndex
CREATE INDEX "_UserFavoriteBooks_B_index" ON "_UserFavoriteBooks"("B");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderBook" ADD CONSTRAINT "OrderBook_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderBook" ADD CONSTRAINT "OrderBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipping" ADD CONSTRAINT "Shipping_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteBooks" ADD CONSTRAINT "_UserFavoriteBooks_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("bookId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteBooks" ADD CONSTRAINT "_UserFavoriteBooks_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
