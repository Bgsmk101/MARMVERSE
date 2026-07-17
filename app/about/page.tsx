import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "О бренде" };

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-label">BRAND FILE / 2026</div>
        <h1>НЕ<br />КОНФЕТА.<br /><span>КУЛЬТ.</span></h1>
        <div className="about-sticker a">MADE TO<br />BE SEEN</div>
        <div className="about-sticker b">05 WORLDS</div>
        <p>MARMVERSE — фабрика мармелада, которая мыслит как музыкальный лейбл, модный бренд и продуктовая лаборатория одновременно.</p>
      </section>

      <section className="about-zine">
        <article className="zine-card zine-yellow"><span>01</span><h2>Вкус — это только начало.</h2><p>На полке покупатель сначала видит цвет и форму, затем читает название и только потом пробует. Поэтому мы проектируем продукт целиком, а не начинаем и не заканчиваем рецептурой.</p></article>
        <article className="zine-card zine-black"><span>02</span><h2>Каждому продукту — собственная сцена.</h2><p>Пять вкусов не маскируются под одну линейку. У каждого своя палитра, пластика мармелада, характер надписей и уровень интенсивности.</p></article>
        <article className="zine-card zine-pink"><span>03</span><h2>Молодёжный — не значит детский.</h2><p>Яркость работает вместе с графической культурой, иронией и чёткой продуктовой логикой. Никаких случайных мультяшек и лишнего визуального шума.</p></article>
      </section>

      <section className="about-values">
        <div className="values-wheel"><span>ВКУС</span><span>ФОРМА</span><span>ЦВЕТ</span><span>ТЕКСТУРА</span><i>M</i></div>
        <div className="values-copy"><p className="eyebrow">НАША ФОРМУЛА</p><h2>Продукт должен быть заметным на расстоянии, понятным в руке и незабываемым после первого укуса.</h2><p>Мы строим ассортимент так, чтобы магазин мог собрать яркую полку из пятнадцати позиций без визуальной каши: вкусы различаются, но бренд узнаётся моментально.</p></div>
      </section>

      <section className="about-quote"><p>«Мы не спрашиваем, можно ли сделать упаковку ярче. Мы спрашиваем, достаточно ли она вкусная ещё до открытия».</p><span>Команда MARMVERSE</span></section>

      <section className="about-cta"><h2>Познакомиться<br />с пятью мирами</h2><Link href="/products">Перейти к продуктам <span>↗</span></Link></section>
    </>
  );
}
