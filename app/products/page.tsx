import type { Metadata } from "next";
import Link from "next/link";
import { ProductPack } from "@/components/product-pack";
import { products, weights } from "@/lib/products";

export const metadata: Metadata = { title: "Все вкусы" };

export default function ProductsPage() {
  return (
    <>
      <section className="catalog-hero">
        <p className="eyebrow">MARMVERSE / FLAVOR INDEX</p>
        <h1>ПЯТЬ<br /><span>МИРОВ</span></h1>
        <div className="catalog-hero-note">Каждый вкус выпускается в трёх форматах: 50, 100 и 150 грамм. Всего 15 ярких SKU для одной заметной полки.</div>
        <div className="catalog-sun"><span>15</span><small>SKU</small></div>
      </section>

      <section className="catalog-list">
        {products.map((product, index) => (
          <article className={`catalog-product catalog-product-${index + 1}`} key={product.slug} style={{ "--primary": product.primary, "--secondary": product.secondary, "--ink": product.ink } as React.CSSProperties}>
            <div className="catalog-index"><span>{product.number}</span><small>{product.category}</small></div>
            <div className="catalog-title"><h2>{product.name}</h2><p>{product.displayName}</p></div>
            <div className="catalog-pack"><ProductPack product={product} weight={100} compact /></div>
            <div className="catalog-info"><p>{product.description}</p><div className="catalog-weights">{weights.map((weight) => <span key={weight}>{weight}<small>г</small></span>)}</div><Link href={`/products/${product.slug}`}>Исследовать вкус <b>↗</b></Link></div>
          </article>
        ))}
      </section>

      <section className="catalog-bottom">
        <p>Нужна матрица для магазина?</p>
        <h2>Пять вкусов × три веса<br />в одном готовом запуске.</h2>
        <Link href="/contacts">Получить оптовое предложение</Link>
      </section>
    </>
  );
}
