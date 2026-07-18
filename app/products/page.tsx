import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ProductPack } from "@/components/product-pack";
import { products, weights } from "@/lib/products";

export const metadata: Metadata = { title: "Все вкусы" };

export default function ProductsPage() {
  return (
    <>
      <section className="catalog-hero">
        <div>
          <p className="eyebrow">Flavor index / 01–05</p>
          <h1>Пять миров.<br /><span>Пятнадцать пачек.</span></h1>
        </div>
        <div className="catalog-hero-note">
          <strong>15 SKU</strong>
          <p>Каждый вкус выпускается в трёх форматах: 50, 100 и 150 грамм. Соберите полку целиком или начните с одного мира.</p>
        </div>
      </section>

      <section className="catalog-list">
        {products.map((product, index) => (
          <article className={`catalog-product catalog-product-${index + 1}`} key={product.slug} style={{ "--primary": product.primary, "--secondary": product.secondary, "--ink": product.ink } as React.CSSProperties}>
            <div className="catalog-product-head">
              <span>{product.number}</span>
              <small>{product.category}</small>
            </div>
            <div className="catalog-pack"><ProductPack product={product} weight={100} compact /></div>
            <div className="catalog-info">
              <h2>{product.name}</h2>
              <strong>{product.displayName}</strong>
              <p>{product.description}</p>
              <div className="catalog-weights" aria-label="Доступные веса">{weights.map((weight) => <span key={weight}>{weight}<small> г</small></span>)}</div>
              <Link href={`/products/${product.slug}/`}>Исследовать вкус <ArrowIcon /></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="catalog-bottom">
        <div><p className="eyebrow">Для магазинов</p><h2>Пять вкусов × три веса в одном готовом запуске.</h2></div>
        <Link className="button button-light" href="/contacts/">Получить оптовую матрицу <ArrowIcon /></Link>
      </section>
    </>
  );
}
