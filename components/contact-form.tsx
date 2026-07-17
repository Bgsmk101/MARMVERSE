"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <div className="form-success"><strong>Заявка улетела в MARMVERSE</strong><p>Мы свяжемся с вами и пришлём оптовую матрицу по пяти вкусам и трём форматам упаковки.</p><button onClick={() => setSent(false)} type="button">Отправить ещё одну</button></div>;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label><span>Имя / компания</span><input name="name" required placeholder="Например, Candy Point" /></label>
      <label><span>Телефон или e-mail</span><input name="contact" required placeholder="Как с вами связаться" /></label>
      <label className="form-wide"><span>Что нужно</span><select name="request" defaultValue="retail"><option value="retail">Поставка в магазин</option><option value="network">Федеральная сеть</option><option value="distributor">Дистрибуция</option><option value="collab">Коллаборация</option></select></label>
      <label className="form-wide"><span>Комментарий</span><textarea name="message" rows={4} placeholder="Город, количество точек, желаемый объём" /></label>
      <button className="submit-button" type="submit"><span>Отправить заявку</span><b>↗</b></button>
    </form>
  );
}
