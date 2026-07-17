import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Оптовые поставки" };

export default function ContactsPage() {
  return (
    <>
      <section className="contacts-hero"><p className="eyebrow">B2B / DISTRIBUTION / COLLABS</p><h1>ПОСТАВИМ<br /><span>ВАУ</span><br />НА ПОЛКУ</h1><div className="contact-bubble">15 SKU<br />READY</div><p>Соберём стартовую матрицу, отправим образцы и поможем оформить заметную выкладку из пяти вкусов и трёх весов.</p></section>
      <section className="contact-layout"><div className="contact-side"><div><small>Оптовый отдел</small><a href="mailto:sales@marmverse.ru">sales@marmverse.ru</a><a href="tel:+78005553535">8 800 555-35-35</a></div><div><small>Форматы работы</small><span>Розничные магазины</span><span>Федеральные сети</span><span>Дистрибьюторы</span><span>Бренд-коллаборации</span></div><div className="contact-stamp">SWEET<br />BUSINESS</div></div><ContactForm /></section>
      <section className="contact-map"><div className="map-orbit"><i /><i /><i /><b>M</b></div><div><p className="eyebrow">ГЕОГРАФИЯ</p><h2>От одной яркой полки<br />до федеральной сети.</h2><p>Демо-контакты и адрес в проекте заменяются на данные производителя перед публикацией.</p></div></section>
    </>
  );
}
