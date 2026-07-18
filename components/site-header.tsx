"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowIcon, MenuIcon } from "./icons";

const navigation = [
  ["/products/", "Вкусы"],
  ["/about/", "О бренде"],
  ["/production/", "Производство"],
  ["/contacts/", "Для магазинов"],
] as const;

function normalizePath(pathname: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const clean = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  if (!clean || clean === "/") return "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = normalizePath(usePathname());
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${isHome ? "site-header-home" : ""}`}>
        <Link className="logo" href="/" aria-label="MARMVERSE — главная">
          <span>MARM</span><b><i>M</i></b><span>VERSE</span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map(([href, label], index) => (
            <Link className={pathname.startsWith(href) ? "active" : ""} href={href} key={href}>
              <small>0{index + 1}</small><span>{label}</span>
            </Link>
          ))}
        </nav>

        <Link className="header-business" href="/contacts/">
          <span>Оптовым клиентам</span><ArrowIcon />
        </Link>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="site-menu"
        >
          <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
          <MenuIcon open={open} />
        </button>
      </header>

      <div className={`menu-layer ${open ? "is-open" : ""}`} id="site-menu" aria-hidden={!open}>
        <div className="menu-orbits" aria-hidden="true"><i /><i /><i /></div>
        <nav aria-label="Меню разделов">
          {navigation.map(([href, label], index) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname.startsWith(href) ? "active" : ""}>
              <small>0{index + 1}</small>
              <span>{label}</span>
              <ArrowIcon />
            </Link>
          ))}
        </nav>
        <div className="menu-caption">
          <span>MARMVERSE / 01—05</span>
          <p>Пять вкусов, три формата и одна мармеладная вселенная.</p>
        </div>
      </div>
    </>
  );
}
