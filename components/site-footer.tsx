import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-burst">ЖУЙ<br /><span>ЯРЧЕ</span></div>
      <div className="footer-links">
        <div><small>Карта</small><Link href="/products">Продукты</Link><Link href="/about">Бренд</Link><Link href="/production">Производство</Link></div>
        <div><small>Связь</small><a href="mailto:hello@marmverse.ru">hello@marmverse.ru</a><a href="tel:+78005553535">8 800 555-35-35</a><span>Пн–Пт / 09:00–18:00</span></div>
      </div>
      <div className="footer-line"><span>© 2026 MARMVERSE</span><span>Мармеладная фабрика / Россия</span><span>DEMO BRAND EXPERIENCE</span></div>
    </footer>
  );
}
