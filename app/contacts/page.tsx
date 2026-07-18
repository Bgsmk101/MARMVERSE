import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Оптовые поставки" };

export default function ContactsPage() {
  return (
    <>
      <section className="contacts-hero">
        <div><p className="eyebrow">B2B / distribution / collabs</p><h1>Поставим <span>вау</span> на полку.</h1></div>
        <div className="contacts-hero-note"><strong>15 SKU ready</strong><p>Соберём стартовую матрицу, отправим образцы и поможем оформить заметную выкладку из пяти вкусов и трёх весов.</p></div>
      </section>

      <section className="contact-layout">
        <aside className="contact-side">
          <div><small>Оптовый отдел</small><a href="mailto:sales@marmverse.ru">sales@marmverse.ru</a><a href="tel:+78005553535">8 800 555-35-35</a></div>
          <div><small>Форматы работы</small><span>Розничные магазины</span><span>Федеральные сети</span><span>Дистрибьюторы</span><span>Бренд-коллаборации</span></div>
          <div className="contact-stamp"><strong>05 × 03</strong><span>готовая матрица</span></div>
        </aside>
        <ContactForm />
      </section>

      <section className="contact-map">
        <div className="map-orbit"><b>M</b><span>Россия</span></div>
        <div><p className="eyebrow">География</p><h2>От одной яркой полки до федеральной сети.</h2><p>Демо-контакты и адрес в проекте заменяются на данные производителя перед публикацией.</p></div>
      </section>
    </>
  );
}
