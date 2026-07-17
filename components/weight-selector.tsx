"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { weights } from "@/lib/products";
import { ProductPack } from "./product-pack";

export function WeightSelector({ product }: { product: Product }) {
  const [weight, setWeight] = useState<number>(100);

  return (
    <div className="weight-experience">
      <div className="weight-pack-wrap"><ProductPack product={product} weight={weight} /></div>
      <div className="weight-control">
        <div><small>Выбери формат</small><strong>{weight} <i>г</i></strong></div>
        <div className="weight-buttons" role="group" aria-label="Выбор веса упаковки">
          {weights.map((item) => (
            <button key={item} className={item === weight ? "active" : ""} onClick={() => setWeight(item)} type="button">
              <span>{item}</span><small>грамм</small>
            </button>
          ))}
        </div>
        <p>{weight === 50 ? "Карманный формат: в рюкзак, на прогулку или в кино." : weight === 100 ? "Главная пачка: оптимально для одного длинного вечера." : "Большой формат: делиться можно, но необязательно."}</p>
      </div>
    </div>
  );
}
