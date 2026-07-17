import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Производство" };

const steps = [
  ["01", "Собираем вкус", "Балансируем фруктовые ноты, сладость и кислотность. Для каждого мира — своя амплитуда."],
  ["02", "Настраиваем текстуру", "Пектиновая основа даёт чистый укус, упругость и стабильную форму без тяжёлого послевкусия."],
  ["03", "Отливаем персонажей", "Червячки, шарики, зверьки, фрукты и буквы получают отдельные формы и свой ритм в пачке."],
  ["04", "Проверяем цвет", "Контролируем оттенок при дневном и магазинном освещении, чтобы продукт выглядел вкусно в реальной продаже."],
  ["05", "Упаковываем мир", "Три веса фасуются в единую систему: 50 г, 100 г и 150 г — с одинаковой силой бренда."],
];

export default function ProductionPage() {
  return (
    <>
      <section className="factory-hero"><div className="factory-grid" /><p className="eyebrow">FACTORY / TASTE ENGINEERING</p><h1>КАК<br /><span>РОЖДАЕТСЯ</span><br />ВАУ</h1><div className="factory-badge">PECTIN<br />BASED</div><p>Не магия. Точная работа с рецептурой, формой, цветом и упаковкой — пять этапов, через которые проходит каждый вкус.</p></section>

      <section className="factory-steps">
        {steps.map(([number, title, copy], index) => <article key={number} className={`factory-step step-${index + 1}`}><div className="step-number">{number}</div><div className="step-visual"><i /><i /><i /></div><div className="step-copy"><h2>{title}</h2><p>{copy}</p></div></article>)}
      </section>

      <section className="factory-control"><div><p className="eyebrow">КОНТРОЛЬ ПАРТИИ</p><h2>Проверяем не только безопасность. Проверяем желание открыть пачку.</h2></div><div className="control-list"><span><b>01</b> вкус и кислотность</span><span><b>02</b> упругость и форма</span><span><b>03</b> цвет и прозрачность</span><span><b>04</b> герметичность упаковки</span><span><b>05</b> читаемость маркировки</span></div></section>

      <section className="factory-material"><div className="material-blob"><i /><i /><i /></div><div><p className="eyebrow">ОСНОВА</p><h2>Пектин вместо тяжёлой текстуры</h2><p>Пектиновая рецептура помогает получить чистую фруктовую текстуру, аккуратную форму и приятный укус. Для детской линейки отдельно снижаем сахар и кислотность.</p><Link href="/products/abc-soft">Посмотреть ABC SOFT ↗</Link></div></section>
    </>
  );
}
