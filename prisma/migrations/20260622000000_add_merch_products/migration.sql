CREATE TABLE "merch_products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "merch_products_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "idx_merch_products_active_sort"
    ON "merch_products"("is_active", "sort_order");

INSERT INTO "merch_products"
    ("name", "category", "description", "price", "image", "sort_order", "is_active")
VALUES
    ('T-Shirt "Suara Setara"', 'Pakaian', 'Bahan katun organik premium dengan logo eksklusif ParaVoice.', 'Rp 189.000', '/merch/sticker-sheet.png', 10, true),
    ('Hoodie "Inklusi" Edition', 'Pakaian', 'Hoodie nyaman dengan detail sulaman logo di dada.', 'Rp 349.000', '/merch/hoodie-inklusif.png', 20, true),
    ('Tote Bag ParaVoice', 'Aksesori', 'Tas jinjing kanvas kuat untuk menemani keseharian Anda.', 'Rp 85.000', '/merch/tote-bag.png', 30, true),
    ('Mug Jurnalis Matte', 'Peralatan Harian', 'Temani waktu baca Anda dengan mug desain eksklusif.', 'Rp 120.000', '/merch/mug-jurnalis.png', 40, true),
    ('Tumblr ParaVoice Orange', 'Peralatan Harian', 'Tetap terhidrasi sambil menyebarkan semangat inklusivitas.', 'Rp 215.000', '/merch/tumbler-orange.png', 50, true),
    ('Topi "PARA" Signature', 'Aksesori', 'Aksesori esensial dengan detail sulaman 3D yang premium.', 'Rp 145.000', '/merch/topi-para.png', 60, true);
