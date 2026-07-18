import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = { title: "О бренде" };

const principles = [
  ["01", "Вкус — это только начало.", "На полке покупатель сначала видит цвет и форму, затем читает название и только потом пробует. Поэтому мы проектируем продукт целиком."],
  ["02", "Каждому вкусу — собственная сцена.", "Пять продуктов не маскируются под одну линейку. У каждого своя палитра, пластика мармелада и интенсивность."],
  ["03", "Яркий — не значит детский.", "Цвет работает вместе с графической культурой, иронией и чёткой продуктовой логикой — без случайных персонажей и визуального шума."],
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-label">Brand file / 2026</div>
        <div className="about-hero-copy">
          <p className="eyebrow">Кто мы</p>
          <h1>Не просто конфета. <span>Целая культура вкуса.</span></h1>
        </div>
        <div className="about-hero-note">
          <strong>05 миров</strong>
          <p>MARMVERSE — фабрика мармелада, которая мыслит как музыкальный лейбл, продуктовая лаборатория и современный бренд одновременно.</p>
        </div>
      </section>

      <section className="about-zine">
        {principles.map(([number, title, copy], index) => (
          <article className={`zine-card zine-card-${index + 1}`} key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>
        ))}
      </section>

      <section className="about-values">
        <div className="values-title"><p className="eyebrow">Наша формула</p><h2>Заметно издалека. Понятно в руке. Незабываемо после первого укуса.</h2></div>
        <div className="values-wheel">
          <span>Вкус</span><span>Форма</span><span>Цвет</span><span>Текстура</span><i>M</i>
        </div>
        <div className="values-copy"><p>Мы строим ассортимент так, чтобы магазин мог собрать яркую полку из пятнадцати позиций без визуальной каши: вкусы различаются, но бренд узнаётся моментально.</p></div>
      </section>

      <section className="about-quote"><p>«Упаковка должна быть вкусной ещё до открытия».</p><span>Команда MARMVERSE</span></section>

      <section className="about-cta"><h2>Познакомься с пятью мирами.</h2><Link className="button button-dark" href="/products/">Перейти к продуктам <ArrowIcon /></Link></section>
    </>
  );
}
