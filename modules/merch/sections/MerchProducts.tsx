"use client";

import { useMemo, useState } from "react";
import ProductCard, {
  type MerchProduct,
} from "@/modules/merch/component/ProductCard";

const categories = [
  "Semua Produk",
  "Pakaian",
  "Aksesori",
  "Peralatan Harian",
  "Koleksi Khusus",
];

const products: MerchProduct[] = [
  {
    id: "sticker-sheet",
    name: 'T-Shirt "Suara Setara"',
    category: "Pakaian",
    description: "Bahan katun organik premium dengan logo eksklusif ParaVoice.",
    price: "Rp 189.000",
    image: "/merch/sticker-sheet.png",
  },
  {
    id: "hoodie-inklusif",
    name: 'Hoodie "Inklusi" Edition',
    category: "Pakaian",
    description: "Hoodie nyaman dengan detail sulaman logo di dada.",
    price: "Rp 349.000",
    image: "/merch/hoodie-inklusif.png",
  },
  {
    id: "tote-bag",
    name: "Tote Bag ParaVoice",
    category: "Aksesori",
    description: "Tas jinjing kanvas kuat untuk menemani keseharian Anda.",
    price: "Rp 85.000",
    image: "/merch/tote-bag.png",
  },
  {
    id: "mug-jurnalis",
    name: "Mug Jurnalis Matte",
    category: "Peralatan Harian",
    description: "Temani waktu baca Anda dengan mug desain eksklusif.",
    price: "Rp 120.000",
    image: "/merch/mug-jurnalis.png",
  },
  {
    id: "tumbler-orange",
    name: "Tumblr ParaVoice Orange",
    category: "Peralatan Harian",
    description: "Tetap terhidrasi sambil menyebarkan semangat inklusivitas.",
    price: "Rp 215.000",
    image: "/merch/tumbler-orange.png",
  },
  {
    id: "topi-para",
    name: 'Topi "PARA" Signature',
    category: "Aksesori",
    description: "Aksesori esensial dengan detail sulaman 3D yang premium.",
    price: "Rp 145.000",
    image: "/merch/topi-para.png",
  },
];

export default function MerchProducts() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredProducts = useMemo(() => {
    if (activeCategory === "Semua Produk") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-white px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-4 border-b border-[#d8dbe2] pb-8">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`h-10 min-w-36 rounded-lg border px-6 text-sm font-extrabold transition-colors ${
                  isActive
                    ? "border-[#070a1d] bg-[#070a1d] text-white"
                    : "border-[#c9ced8] bg-white text-[#4c5360] hover:border-[#070a1d] hover:text-[#070a1d]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-18 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
