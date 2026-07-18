import Image from "next/image";
import type { CSSProperties } from "react";
import { asset } from "@/lib/assets";
import type { Product } from "@/lib/products";

type StyleVars = CSSProperties & {
  "--product-primary"?: string;
  "--product-secondary"?: string;
  "--product-ink"?: string;
  "--pack-scale"?: number;
};

export function ProductPack({
  product,
  weight = 100,
  compact = false,
}: {
  product: Product;
  weight?: number;
  compact?: boolean;
}) {
  const scale = weight === 50 ? 0.9 : weight === 150 ? 1.08 : 1;
  const style: StyleVars = {
    "--product-primary": product.primary,
    "--product-secondary": product.secondary,
    "--product-ink": product.ink,
    "--pack-scale": scale,
  };

  return (
    <div
      className={`pack-stage ${compact ? "pack-stage-compact" : ""}`}
      style={style}
      aria-label={`${product.displayName}, упаковка ${weight} грамм`}
    >
      <div className="pack-shadow" aria-hidden="true" />
      <div className="gummy-pack">
        <div className="pack-seal" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="pack-topline">
          <span className="pack-brand">MARMVERSE</span>
          <span className="pack-index">WORLD {product.number}</span>
        </div>
        <div className="pack-copy">
          <strong>{product.name}</strong>
          <span>{product.displayName}</span>
        </div>
        <div className="pack-window">
          <Image
            src={asset(product.image)}
            alt={`Мармелад ${product.displayName.toLowerCase()}`}
            fill
            sizes={compact ? "(max-width: 720px) 66vw, 22rem" : "(max-width: 720px) 86vw, 30rem"}
          />
        </div>
        <div className="pack-bottom">
          <span>{product.category}</span>
          <b>{weight} г</b>
        </div>
      </div>
    </div>
  );
}
