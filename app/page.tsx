import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { ProductPack } from "@/components/product-pack";
import { products, weights } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-space" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-grid">
          <div className="hero-showcase" aria-label="Линейка упаковок MARMVERSE">
            <div className="hero-pack-primary"><ProductPack product={products[0]} weight={100} compact /></div>
            <div className="hero-pack-secondary"><ProductPack product={products[1]} weight={50} compact /></div>
            <div className="hero-pack-tertiary"><ProductPack product={products[4]} weight={50} compact /></div>
            <div className="hero-showcase-caption"><span>01—05</span><p>Пять миров.<br />Выбирай свой.</p></div>
          </div>

          <div className="hero-copy-block">
            <p className="eyebrow">MARMVERSE / новая мармеладная вселенная</p>
            <h1>Мармелад.<span>С&nbsp;характером.</span></h1>
            <p className="hero-lead">Не один вкус «для всех», а пять разных настроений: кислые, мягкие, фруктовые, хрустящие и совсем нежные.</p>
            <div className="hero-actions">
              <Link className="hero-main-link" href="/products/"><span>Исследовать<br />все вкусы</span><b><ArrowIcon /></b></Link>
              <Link className="hero-story-link" href="/about/">Как устроена вселенная</Link>
            </div>
          </div>
        </div>

        <div className="hero-floor">
          <span>Пектиновая основа</span>
          <span>Пять разных текстур</span>
          <span>50 / 100 / 150 г</span>
          <small>Листай и выбирай настроение</small>
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
