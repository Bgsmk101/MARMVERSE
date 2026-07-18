import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/icons";
import { WeightSelector } from "@/components/weight-selector";
import { asset } from "@/lib/assets";
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
        <div className="product-heading">
          <div className="product-code"><span>Flavor world</span><b>{product.number}</b></div>
          <small>{product.category}</small>
          <h1>{product.name}</h1>
          <p>{product.displayName}</p>
          <div className="product-tagline">{product.tagline}</div>
        </div>
        <figure className="product-hero-photo">
          <Image src={asset(product.image)} alt={product.displayName} fill priority sizes="(max-width: 900px) 100vw, 52vw" />
        </figure>
      </section>

      <section className="product-weight-section">
        <div className="section-kicker"><span>01</span><p className="eyebrow">Выбери формат</p></div>
        <WeightSelector product={product} />
      </section>

      <section className="product-story">
        <div className="story-copy">
          <div className="story-label"><span>{product.character}</span><b>Почему работает</b></div>
          <h2>Вкус с двумя актами.</h2>
          <p>{product.longDescription}</p>
        </div>
        <div className="taste-panel" aria-label="Профиль вкуса">
          <div className="taste-row"><span>Кислота</span><i><b style={{ width: `${product.taste.sour}%` }} /></i><strong>{product.taste.sour}</strong></div>
          <div className="taste-row"><span>Сладость</span><i><b style={{ width: `${product.taste.sweet}%` }} /></i><strong>{product.taste.sweet}</strong></div>
          <div className="taste-row"><span>Мягкость</span><i><b style={{ width: `${product.taste.soft}%` }} /></i><strong>{product.taste.soft}</strong></div>
        </div>
      </section>

      <section className="product-notes">
        <div><p className="eyebrow">Вкусовой микс</p><h2>Что внутри этого мира.</h2></div>
        <div className="note-wheel">{product.notes.map((note, index) => <span key={note} className={`note-${index + 1}`}>{note}</span>)}</div>
        <div className="badge-stack">{product.badges.map((badge) => <span key={badge}>{badge}</span>)}</div>
      </section>

      <section className="ingredients-section">
        <p className="eyebrow">Состав / коротко и честно</p>
        <p>{product.ingredients}</p>
        <span>Точный состав, пищевая ценность и предупреждения указываются на каждой упаковке.</span>
      </section>

      <Link className="next-world" href={`/products/${nextProduct.slug}/`} style={{ "--next": nextProduct.primary } as CSSProperties}>
        <small>Следующий мир</small><strong>{nextProduct.name}</strong><ArrowIcon />
      </Link>
    </div>
  );
}
