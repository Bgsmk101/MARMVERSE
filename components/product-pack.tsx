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
      className={`pack-stage pack-${product.slug} ${compact ? "pack-stage-compact" : ""}`}
      style={style}
      aria-label={`${product.displayName}, упаковка ${weight} грамм`}
    >
      <div className="pack-shadow" aria-hidden="true" />
      <div className="pack-photo">
        <Image
          src={asset(product.packImage)}
          alt={`Розничная упаковка ${product.displayName.toLowerCase()}`}
          fill
          sizes={compact ? "(max-width: 720px) 72vw, 24rem" : "(max-width: 720px) 90vw, 32rem"}
        />

        <div className="pack-print">
          <div className="pack-print-top">
            <span>MARMVERSE</span>
            <span>{product.number} / 05</span>
          </div>
          <strong>{product.name}</strong>
          <span className="pack-print-flavor">{product.displayName}</span>
        </div>

        <span className="pack-weight">{weight} г</span>
      </div>
    </div>
  );
}
