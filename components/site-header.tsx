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
      <header className="site-header">
        <Link className="logo" href="/" aria-label="MARMVERSE — главная">
          <span>MARM</span><b>M</b><span>VERSE</span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map(([href, label]) => (
            <Link className={pathname.startsWith(href) ? "active" : ""} href={href} key={href}>{label}</Link>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="site-menu"
        >
          <span>{open ? "Закрыть" : "Меню"}</span>
          <MenuIcon open={open} />
        </button>
      </header>

      <div className={`menu-layer ${open ? "is-open" : ""}`} id="site-menu" aria-hidden={!open}>
        <div className="menu-brand" aria-hidden="true"><span>MARM</span><span>VERSE</span></div>
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
          <span>Пять вкусовых миров</span>
          <p>Яркий мармелад с понятным характером, честным составом и собственной визуальной системой.</p>
        </div>
      </div>
    </>
  );
}
