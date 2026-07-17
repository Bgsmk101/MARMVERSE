"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  ["/products", "5 вкусов"],
  ["/about", "Кто мы"],
  ["/production", "Как делаем"],
  ["/contacts", "Для магазинов"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  return (
    <>
      <header className="site-header">
        <Link className="logo" href="/" aria-label="MARMVERSE — главная">
          <span>MAR</span><b>M</b><span>VERSE</span>
        </Link>
        <div className="header-orbit" aria-hidden="true"><i /><span>JUICY SYSTEM 05</span></div>
        <button className={`menu-button ${open ? "is-open" : ""}`} type="button" onClick={() => setOpen((value) => !value)} aria-label="Открыть меню" aria-expanded={open}>
          <span>Меню</span><i /><i />
        </button>
      </header>
      <div className={`menu-layer ${open ? "is-open" : ""}`}>
        <div className="menu-noise" />
        <div className="menu-brand">MARM<br />VERSE</div>
        <nav>
          {navigation.map(([href, label], index) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname.startsWith(href) ? "active" : ""}>
              <small>0{index + 1}</small><span>{label}</span><b>↗</b>
            </Link>
          ))}
        </nav>
        <div className="menu-caption">Вселенная, которую можно съесть.<br />Мармелад для тех, кто выбирает вкус глазами.</div>
      </div>
    </>
  );
}
