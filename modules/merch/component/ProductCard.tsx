"use client";

import Image from "next/image";
import { useState } from "react";
import { HeartIcon } from "@/modules/merch/component/icons";

export type MerchProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
};

type ProductCardProps = {
  product: MerchProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group motion-card">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-sm">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="motion-image object-cover"
        />
        <button
          type="button"
          aria-pressed={liked}
          aria-label={
            liked
              ? `Hapus ${product.name} dari favorit`
              : `Simpan ${product.name} ke favorit`
          }
          onClick={() => setLiked((current) => !current)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#070a1d] shadow-sm transition-colors hover:bg-secondary-50"
        >
          <HeartIcon
            className={`h-5 w-5 ${liked ? "fill-[#f29100] text-[#f29100]" : ""}`}
          />
        </button>
      </div>

      <div className="mt-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#9a5a00]">
          {product.category}
        </p>
        <h3 className="mt-2 text-xl font-extrabold leading-7 text-[#101522]">
          {product.name}
        </h3>
        <p className="mt-2 min-h-12 text-sm italic leading-6 text-[#5d6574]">
          {product.description}
        </p>
        <p className="mt-4 text-lg font-extrabold text-[#070a1d]">
          {product.price}
        </p>
      </div>
    </article>
  );
}
