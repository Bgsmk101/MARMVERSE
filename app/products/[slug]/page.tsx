import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WeightSelector } from "@/components/weight-selector";
import { getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

type StyleVars = CSSProperties & {
  "--primary": string;
  "--secondary": string;
  "--ink": string;
  "--glow": string;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.displayName ?? "Продукт" };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productIndex = products.findIndex((item) => item.slug === slug);
  const nextProduct = products[(productIndex + 1) % products.length];
  const style: StyleVars = { "--primary": product.primary, "--secondary": product.secondary, "--ink": product.ink, "--glow": product.glow };

  return (
    <div className="product-page" style={style}>
      <section className="product-hero">
        <div className="product-code"><span>FLAVOR WORLD</span><b>{product.number}</b></div>
        <div className="product-heading"><small>{product.category}</small><h1>{product.name}</h1><p>{product.displayName}</p></div>
        <div className="product-tagline">{product.tagline}</div>
        <div className="product-candy-rain" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      </section>

      <section className="product-weight-section">
        <WeightSelector product={product} />
      </section>

      <section className="product-story">
        <div className="story-label"><span>{product.character}</span><b>WHY IT HITS</b></div>
        <h2>{product.longDescription}</h2>
        <div className="taste-panel">
          <div className="taste-row"><span>Кислота</span><i><b style={{ width: `${product.taste.sour}%` }} /></i><strong>{product.taste.sour}</strong></div>
          <div className="taste-row"><span>Сладость</span><i><b style={{ width: `${product.taste.sweet}%` }} /></i><strong>{product.taste.sweet}</strong></div>
          <div className="taste-row"><span>Мягкость</span><i><b style={{ width: `${product.taste.soft}%` }} /></i><strong>{product.taste.soft}</strong></div>
        </div>
      </section>

      <section className="product-notes">
        <div><p className="eyebrow">ВКУСОВОЙ МИКС</p><h2>Что внутри<br />этого мира</h2></div>
        <div className="note-wheel">{product.notes.map((note, index) => <span key={note} className={`note-${index + 1}`}>{note}</span>)}</div>
        <div className="badge-stack">{product.badges.map((badge) => <span key={badge}>{badge}</span>)}</div>
      </section>

      <section className="ingredients-section">
        <p className="eyebrow">СОСТАВ / КОРОТКО И ЧЕСТНО</p>
        <p>{product.ingredients}</p>
        <span>Точный состав, пищевая ценность и предупреждения указываются на каждой упаковке.</span>
      </section>

      <Link className="next-world" href={`/products/${nextProduct.slug}`} style={{ "--next": nextProduct.primary } as CSSProperties}>
        <small>Следующий мир</small><strong>{nextProduct.name}</strong><span>↗</span>
      </Link>
    </div>
  );
}
