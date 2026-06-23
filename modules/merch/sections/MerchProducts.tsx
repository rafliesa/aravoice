"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchMerchProducts, type MerchProduct } from "@/lib/merch";
import ProductCard from "@/modules/merch/component/ProductCard";

const categories = [
  "Semua Produk",
  "Pakaian",
  "Aksesori",
  "Peralatan Harian",
  "Koleksi Khusus",
];

const products: MerchProduct[] = [
  {
    id: 1,
    name: 'Sticker Sheet "Suara Setara"',
    category: "Aksesori",
    description: "Lembaran stiker eksklusif dengan desain kampanye jurnalisme inklusif dari ParaVoice.",
    price: "Rp 25.000",
    image: "/merch/sticker-sheet.png",
    sort_order: 10,
    is_active: true,
  },
  {
    id: 2,
    name: 'Hoodie "Inklusi" Edition',
    category: "Pakaian",
    description: "Hoodie nyaman dengan detail sulaman logo di dada.",
    price: "Rp 349.000",
    image: "/merch/hoodie-inklusif.png",
    sort_order: 20,
    is_active: true,
  },
  {
    id: 3,
    name: "Tote Bag ParaVoice",
    category: "Aksesori",
    description: "Tas jinjing kanvas kuat untuk menemani keseharian Anda.",
    price: "Rp 85.000",
    image: "/merch/tote-bag.png",
    sort_order: 30,
    is_active: true,
  },
  {
    id: 4,
    name: "Mug Jurnalis Matte",
    category: "Peralatan Harian",
    description: "Temani waktu baca Anda dengan mug desain eksklusif.",
    price: "Rp 120.000",
    image: "/merch/mug-jurnalis.png",
    sort_order: 40,
    is_active: true,
  },
  {
    id: 5,
    name: "Tumblr ParaVoice Orange",
    category: "Peralatan Harian",
    description: "Tetap terhidrasi sambil menyebarkan semangat inklusivitas.",
    price: "Rp 215.000",
    image: "/merch/tumbler-orange.png",
    sort_order: 50,
    is_active: true,
  },
  {
    id: 6,
    name: 'Topi "PARA" Signature',
    category: "Aksesori",
    description: "Aksesori esensial dengan detail sulaman 3D yang premium.",
    price: "Rp 145.000",
    image: "/merch/topi-para.png",
    sort_order: 60,
    is_active: true,
  },
];

export default function MerchProducts() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [merchProducts, setMerchProducts] = useState<MerchProduct[]>(products);
  const dynamicCategories = useMemo(
    () => [
      "Semua Produk",
      ...Array.from(
        new Set([
          ...categories.slice(1),
          ...merchProducts.map((product) => product.category),
        ]),
      ),
    ],
    [merchProducts],
  );

  useEffect(() => {
    const controller = new AbortController();

    fetchMerchProducts(controller.signal)
      .then((items) => {
        if (items.length > 0) setMerchProducts(items);
      })
      .catch(() => {
        setMerchProducts(products);
      });

    return () => controller.abort();
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Semua Produk") return merchProducts;
    return merchProducts.filter((product) => product.category === activeCategory);
  }, [activeCategory, merchProducts]);

  return (
    <section className="bg-white px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl">
        <div className="motion-fade-up flex flex-wrap justify-center gap-4 border-b border-[#d8dbe2] pb-8">
          {dynamicCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`h-10 min-w-36 rounded-lg border px-6 text-sm font-extrabold transition-all hover:-translate-y-0.5 ${
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
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="motion-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
