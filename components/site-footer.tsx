import Link from "next/link";
import { ArrowIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <p>Мармеладная фабрика / Россия</p>
        <h2>Жуй ярче.</h2>
        <Link href="/products/">Выбрать свой вкус <ArrowIcon /></Link>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <strong>MARMVERSE</strong>
          <p>Пять вкусов. Три формата. Одна заметная полка.</p>
        </div>
        <div className="footer-links"><small>Карта</small><Link href="/products/">Продукты</Link><Link href="/about/">Бренд</Link><Link href="/production/">Производство</Link></div>
        <div className="footer-links"><small>Связь</small><a href="mailto:hello@marmverse.ru">hello@marmverse.ru</a><a href="tel:+78005553535">8 800 555-35-35</a><span>Пн–Пт / 09:00–18:00</span></div>
      </div>

      <div className="footer-line"><span>© 2026 MARMVERSE</span><span>Демонстрационный бренд-проект</span></div>
    </footer>
  );
}
