import type { CSSProperties } from "react";
import type { Product } from "@/lib/products";

type StyleVars = CSSProperties & {
  "--product-primary"?: string;
  "--product-secondary"?: string;
  "--product-ink"?: string;
  "--pack-scale"?: number;
};

function Candy({ shape, index }: { shape: Product["shape"]; index: number }) {
  if (shape === "worm") {
    return <span className={`candy candy-worm candy-${index}`}><i /><b /><i /></span>;
  }

  if (shape === "ball") {
    return <span className={`candy candy-ball candy-${index}`} />;
  }

  if (shape === "animal") {
    return <span className={`candy candy-animal candy-${index}`}><i /><i /><b /></span>;
  }

  if (shape === "fruit") {
    return <span className={`candy candy-fruit candy-${index}`}><i /></span>;
  }

  const letters = ["A", "Б", "В", "М", "Я"];
  return <span className={`candy candy-letter candy-${index}`}>{letters[index % letters.length]}</span>;
}

export function ProductPack({
  product,
  weight = 100,
  compact = false,
}: {
  product: Product;
  weight?: number;
  compact?: boolean;
}) {
  const scale = weight === 50 ? 0.84 : weight === 150 ? 1.12 : 1;
  const style: StyleVars = {
    "--product-primary": product.primary,
    "--product-secondary": product.secondary,
    "--product-ink": product.ink,
    "--pack-scale": scale,
  };

  return (
    <div className={`pack-stage ${compact ? "pack-stage-compact" : ""}`} style={style} aria-label={`${product.displayName}, упаковка ${weight} грамм`}>
      <div className="pack-shadow" />
      <div className="gummy-pack">
        <div className="pack-seal"><span /><span /><span /><span /><span /><span /></div>
        <div className="pack-highlight" />
        <div className="pack-brand">MARM<br /><b>VERSE</b></div>
        <div className="pack-index">FLAVOR WORLD / {product.number}</div>
        <div className="pack-copy">
          <strong>{product.name}</strong>
          <span>{product.displayName}</span>
        </div>
        <div className="pack-window">
          {[0, 1, 2, 3, 4].map((index) => <Candy key={index} shape={product.shape} index={index} />)}
        </div>
        <div className="pack-bottom">
          <span>{product.category}</span>
          <b>{weight} g</b>
        </div>
      </div>
    </div>
  );
}
