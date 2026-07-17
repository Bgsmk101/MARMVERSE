import Link from "next/link";
import { ProductPack } from "@/components/product-pack";
import { products, weights } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-signal"><span>NEW GUMMY DIMENSION</span><i /></div>
        <div className="hero-title-wrap">
          <p>Вселенная, которую</p>
          <h1><span>МОЖНО</span><b>СЪЕСТЬ</b></h1>
        </div>
        <div className="hero-copy-block">
          <p>Пять вкусовых миров. Три размера пачки. Ноль скучных решений на полке.</p>
          <Link href="/products">Войти в каталог <span>↗</span></Link>
        </div>
        <div className="hero-planet hero-planet-one"><i /></div>
        <div className="hero-planet hero-planet-two"><i /></div>
        <div className="hero-candy-scene">
          <div className="hero-pack-a"><ProductPack product={products[0]} weight={100} compact /></div>
          <div className="hero-pack-b"><ProductPack product={products[3]} weight={50} compact /></div>
          <div className="hero-pack-c"><ProductPack product={products[1]} weight={150} compact /></div>
        </div>
        <div className="scroll-tag">SCROLL TO TASTE <span>↓</span></div>
      </section>

      <section className="ticker-section" aria-label="Список вкусов">
        <div className="ticker-track">
          {[...products, ...products].map((product, index) => <span key={`${product.slug}-${index}`}>{product.displayName}<i>✦</i></span>)}
        </div>
      </section>

      <section className="manifest-section">
        <div className="manifest-sticker">NO BORING<br />GUMMIES</div>
        <p className="eyebrow">MARMVERSE / МАНИФЕСТ</p>
        <h2>Мы производим мармелад,<br />который сначала <em>съедают глазами</em>.</h2>
        <div className="manifest-grid">
          <p>Форма, цвет, упаковка и вкус работают вместе. Никаких одинаковых пакетов с разными наклейками: каждый продукт получает собственный характер, палитру и сценарий.</p>
          <div className="manifest-numbers"><span><b>05</b> вкусовых миров</span><span><b>03</b> формата упаковки</span><span><b>15</b> позиций на полке</span></div>
        </div>
      </section>

      <section className="worlds-section">
        <div className="worlds-intro"><p className="eyebrow">КАРТА ВКУСОВ</p><h2>Выбери<br />свой мир</h2><span>Листай вниз. Каждый блок — отдельная вселенная со своей формой, текстурой и уровнем кислоты.</span></div>
        <div className="world-list">
          {products.map((product, index) => (
            <article className={`world-card world-card-${index + 1}`} key={product.slug} style={{ "--primary": product.primary, "--secondary": product.secondary, "--ink": product.ink } as React.CSSProperties}>
              <div className="world-card-number">{product.number}</div>
              <div className="world-card-copy"><small>{product.category}</small><h3>{product.name}</h3><p>{product.tagline}</p><Link href={`/products/${product.slug}`}>Открыть мир <span>↗</span></Link></div>
              <div className="world-card-pack"><ProductPack product={product} weight={index % 3 === 0 ? 50 : index % 3 === 1 ? 100 : 150} compact /></div>
              <div className="world-card-orbit"><i /><i /><i /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="weight-strip">
        <div><p className="eyebrow">ОДИН ВКУС / ТРИ СЦЕНАРИЯ</p><h2>50 / 100 / 150</h2></div>
        <div className="weight-rail">
          {weights.map((weight, index) => <div key={weight} className={`weight-rail-item size-${index}`}><ProductPack product={products[2]} weight={weight} compact /><strong>{weight}<span>г</span></strong><p>{index === 0 ? "в карман" : index === 1 ? "на вечер" : "на компанию"}</p></div>)}
        </div>
      </section>

      <section className="home-cta">
        <div className="cta-splash"><span>?</span></div>
        <p className="eyebrow">НЕ МОЖЕШЬ ВЫБРАТЬ</p>
        <h2>Начни с пачки,<br />которая громче всех<br /><em>смотрит на тебя.</em></h2>
        <Link href="/products">Смотреть все 15 позиций</Link>
      </section>
    </>
  );
}
