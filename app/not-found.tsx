import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><span>404</span><h1>ЭТОТ МИР<br />ЕЩЁ НЕ СОЗДАН</h1><Link href="/products">Вернуться к вкусам</Link></section>;
}
