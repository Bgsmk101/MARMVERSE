import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><span>404</span><h1>Этот мир ещё не создан.</h1><Link href="/products/">Вернуться к вкусам</Link></section>;
}
