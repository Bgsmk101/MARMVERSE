import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ProductPack } from "@/components/product-pack";
import { products, weights } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grid">
          <div className="hero-copy-block">
            <p className="eyebrow">Новая мармеладная вселенная</p>
            <h1>Вкус, который хочется <span>рассмотреть.</span></h1>
            <p className="hero-lead">Пять самостоятельных миров — от суперкислых червячков до мягких букв. Каждый со своей формой, палитрой и настроением.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/products/">Выбрать вкус <ArrowIcon /></Link>
              <Link className="text-link" href="/about/">Познакомиться с брендом</Link>
            </div>
          </div>

          <div className="hero-showcase" aria-label="Упаковки MARMVERSE">
            <div className="hero-pack-primary"><ProductPack product={products[0]} weight={100} compact /></div>
            <div className="hero-pack-secondary"><ProductPack product={products[3]} weight={50} compact /></div>
            <div className="hero-flavor-card"><strong>05</strong><span>вкусовых миров</span></div>
          </div>
        </div>

        <div className="hero-stats">
          <span><b>05</b> вкусов</span>
          <span><b>03</b> формата</span>
          <span><b>15</b> позиций</span>
          <span className="hero-stats-note">Пектиновая основа · яркий фруктовый вкус</span>
        </div>
      </section>

      <section className="ticker-section" aria-label="Список вкусов">
        <div className="ticker-track">
          {[...products, ...products].map((product, index) => <span key={`${product.slug}-${index}`}>{product.displayName}<i>•</i></span>)}
        </div>
      </section>

      <section className="manifest-section">
        <div className="section-kicker"><span>01</span><p className="eyebrow">Манифест</p></div>
        <div className="manifest-layout">
          <h2>Сначала съедают <span>глазами.</span> Потом просят ещё.</h2>
          <div className="manifest-copy">
            <p>Форма, цвет, упаковка и вкус работают вместе. Поэтому каждый продукт получает собственный характер — без одинаковых пачек и случайной графики.</p>
            <dl>
              <div><dt>05</dt><dd>вкусовых миров</dd></div>
              <div><dt>03</dt><dd>формата упаковки</dd></div>
              <div><dt>15</dt><dd>позиций на полке</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="worlds-section">
        <header className="section-heading">
          <div><div className="section-kicker"><span>02</span><p className="eyebrow">Карта вкусов</p></div><h2>Найди свой мир.</h2></div>
          <p>У каждого — своя текстура, уровень кислоты и визуальный код. Никаких вкусов-близнецов.</p>
        </header>

        <div className="world-list">
          {products.map((product, index) => (
            <article className={`world-card world-card-${index + 1}`} key={product.slug} style={{ "--primary": product.primary, "--secondary": product.secondary, "--ink": product.ink } as React.CSSProperties}>
              <div className="world-card-copy">
                <div className="world-card-meta"><span>{product.number}</span><small>{product.category}</small></div>
                <h3>{product.name}</h3>
                <p>{product.tagline}</p>
                <Link href={`/products/${product.slug}/`}>Открыть вкус <ArrowIcon /></Link>
              </div>
              <div className="world-card-pack"><ProductPack product={product} weight={index % 3 === 0 ? 50 : index % 3 === 1 ? 100 : 150} compact /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="weight-strip">
        <header>
          <div className="section-kicker"><span>03</span><p className="eyebrow">Один вкус · три сценария</p></div>
          <h2>50 / 100 / 150 г</h2>
        </header>
        <div className="weight-rail">
          {weights.map((weight, index) => (
            <article key={weight} className={`weight-rail-item size-${index}`}>
              <div className="weight-pack"><ProductPack product={products[2]} weight={weight} compact /></div>
              <div><strong>{weight}<span> г</span></strong><p>{index === 0 ? "в карман" : index === 1 ? "на вечер" : "на компанию"}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <p className="eyebrow">Не можешь выбрать?</p>
        <h2>Начни с пачки, которая смотрит на тебя громче остальных.</h2>
        <Link className="button button-light" href="/products/">Смотреть все вкусы <ArrowIcon /></Link>
      </section>
    </>
  );
}
