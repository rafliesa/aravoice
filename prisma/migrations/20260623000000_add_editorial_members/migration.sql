-- CreateTable
CREATE TABLE "editorial_members" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "editorial_members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_editorial_members_sort" ON "editorial_members"("sort_order");
