CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "reading_time" INTEGER NOT NULL,
    "cover_image" TEXT NOT NULL,
    "caption" TEXT NOT NULL,
    "formats" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    "published_at" TIMESTAMPTZ(6) NOT NULL,
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "news_reading_time_check" CHECK ("reading_time" >= 0)
);

CREATE UNIQUE INDEX "news_slug_key" ON "news"("slug");
CREATE INDEX "idx_news_category" ON "news"("category");
CREATE INDEX "idx_news_published"
    ON "news"("published_at" DESC)
    WHERE "is_published" = true;
