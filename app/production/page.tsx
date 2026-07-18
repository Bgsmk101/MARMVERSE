import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { asset } from "@/lib/assets";

export const metadata: Metadata = { title: "Производство" };

const steps = [
  ["01", "Собираем вкус", "Балансируем фруктовые ноты, сладость и кислотность. Для каждого мира — собственная амплитуда."],
  ["02", "Настраиваем текстуру", "Пектиновая основа даёт чистый укус, упругость и стабильную форму без тяжёлого послевкусия."],
  ["03", "Отливаем формы", "Червячки, шарики, зверьки, фрукты и буквы получают отдельные матрицы и свой ритм в пачке."],
  ["04", "Проверяем цвет", "Контролируем оттенок при дневном и магазинном освещении, чтобы продукт выглядел вкусно на реальной полке."],
  ["05", "Упаковываем мир", "Три веса фасуются в единую систему: 50, 100 и 150 грамм — с одинаковой силой бренда."],
];

export default function ProductionPage() {
  return (
    <>
      <section className="factory-hero">
        <div className="factory-hero-copy"><p className="eyebrow">Factory / taste engineering</p><h1>Как рождается <span>вау.</span></h1><p>Не магия, а точная работа с рецептурой, формой, цветом и упаковкой. Пять этапов, через которые проходит каждый вкус.</p></div>
        <div className="factory-facts"><div><strong>05</strong><span>этапов</span></div><div><strong>03</strong><span>формата</span></div><div><strong>01</strong><span>единый стандарт</span></div></div>
      </section>

      <section className="factory-steps">
        <header className="section-heading"><div><p className="eyebrow">Процесс</p><h2>От рецептуры до готовой пачки.</h2></div><p>Каждый шаг заканчивается понятной проверкой, поэтому вкус, форма и цвет остаются стабильными от партии к партии.</p></header>
        <div className="factory-step-grid">
          {steps.map(([number, title, copy]) => <article key={number} className="factory-step"><div className="step-number">{number}</div><div className="step-visual" aria-hidden="true"><i /><i /><i /></div><div className="step-copy"><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </section>

      <section className="factory-control">
        <div><p className="eyebrow">Контроль партии</p><h2>Проверяем не только безопасность. Проверяем желание открыть пачку.</h2></div>
        <div className="control-list"><span><b>01</b> вкус и кислотность</span><span><b>02</b> упругость и форма</span><span><b>03</b> цвет и прозрачность</span><span><b>04</b> герметичность упаковки</span><span><b>05</b> читаемость маркировки</span></div>
      </section>

      <section className="factory-material">
        <figure><Image src={asset("/images/products/fruit-glitch.webp")} alt="Фруктовый мармелад MARMVERSE" fill sizes="(max-width: 900px) 100vw, 50vw" /></figure>
        <div><p className="eyebrow">Основа</p><h2>Пектин вместо тяжёлой текстуры.</h2><p>Пектиновая рецептура помогает получить чистую фруктовую текстуру, аккуратную форму и приятный укус. Для детской линейки отдельно снижаем сахар и кислотность.</p><Link className="text-link" href="/products/abc-soft/">Посмотреть ABC SOFT <ArrowIcon /></Link></div>
      </section>
    </>
  );
}
