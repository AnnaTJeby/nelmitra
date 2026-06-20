-- CreateTable
CREATE TABLE "Variety" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "fit" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "yieldAmount" TEXT NOT NULL,
    "pestRisk" TEXT NOT NULL,
    "availableAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Buyer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "location" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Officer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "hours" TEXT NOT NULL,
    "showWhatsapp" BOOLEAN NOT NULL DEFAULT false
);
