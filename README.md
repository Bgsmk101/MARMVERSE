# MARMVERSE

Многостраничный молодёжный сайт производителя мармелада. Проект построен на Next.js App Router, React и TypeScript и экспортируется в статические файлы для GitHub Pages.

## Ассортимент

- WORMHOLE — суперкислые червячки
- SOUR ORBIT — кислые шарики
- ZOO POP — сладкие зверьки
- FRUIT GLITCH — фруктовые фрукты
- ABC SOFT — детские буквы с пониженным содержанием сахара и мягкой кислотностью

Каждый вкус представлен в форматах 50 г, 100 г и 150 г.

## Запуск

```bash
npm install
npm run dev
```

## Проверка

```bash
npm run lint
npm run typecheck
npm run build
```

## GitHub Pages

Workflow находится в `.github/workflows/pages.yml`. При публикации он автоматически использует имя репозитория как `basePath` и разворачивает папку `out`.
