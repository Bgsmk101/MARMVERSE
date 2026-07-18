export type ProductShape = "worm" | "ball" | "animal" | "fruit" | "letter";

export type Product = {
  slug: string;
  number: string;
  name: string;
  displayName: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  primary: string;
  secondary: string;
  ink: string;
  glow: string;
  image: string;
  shape: ProductShape;
  taste: {
    sour: number;
    sweet: number;
    soft: number;
  };
  notes: string[];
  badges: string[];
  ingredients: string;
  character: string;
};

export const weights = [50, 100, 150] as const;

export const products: Product[] = [
  {
    slug: "wormhole",
    number: "01",
    name: "WORMHOLE",
    displayName: "Суперкислые червячки",
    category: "ультра-кислые",
    tagline: "Сначала сводит скулы. Потом просишь ещё.",
    description: "Неоновая смесь длинных фруктовых червячков с мощной кислой обсыпкой и мягкой серединой.",
    longDescription: "WORMHOLE — главный аттракцион MARMVERSE. Каждый червячок проходит через две вкусовые фазы: яркий кислый удар снаружи и сочный фруктовый слой внутри. Цвета смешаны так, чтобы пачка выглядела как портал, который невозможно не открыть.",
    primary: "#d7ff3f",
    secondary: "#ff3fa4",
    ink: "#17130f",
    glow: "rgba(215,255,63,.6)",
    image: "/images/products/wormhole.webp",
    shape: "worm",
    taste: { sour: 100, sweet: 62, soft: 72 },
    notes: ["лайм", "арбуз", "малина", "яблоко"],
    badges: ["максимальная кислота", "двухцветные", "веган-пектин"],
    ingredients: "Сахар, сироп глюкозы, пектин, регуляторы кислотности, натуральные ароматизаторы, концентраты фруктов и растений.",
    character: "Кислый портал",
  },
  {
    slug: "sour-orbit",
    number: "02",
    name: "SOUR ORBIT",
    displayName: "Кислые шарики",
    category: "кислые драже",
    tagline: "Маленькая планета. Большой вкусовой взрыв.",
    description: "Упругие мармеладные шарики с хрустящей кислой оболочкой и фруктовым ядром.",
    longDescription: "SOUR ORBIT работает как мини-игра: сначала трескается тонкий кислый слой, затем появляется плотная, яркая фруктовая сердцевина. Шарики удобно делить с друзьями, смешивать по цветам и собирать собственные вкусовые комбинации.",
    primary: "#7a5cff",
    secondary: "#52f6ff",
    ink: "#0d0a22",
    glow: "rgba(82,246,255,.55)",
    image: "/images/products/sour-orbit.webp",
    shape: "ball",
    taste: { sour: 82, sweet: 70, soft: 58 },
    notes: ["черника", "лимон", "вишня", "манго"],
    badges: ["хрустящая оболочка", "микс вкусов", "яркое ядро"],
    ingredients: "Сахар, сироп глюкозы, пектин, яблочный сок, лимонная кислота, натуральные красители и ароматизаторы.",
    character: "Вкусовая орбита",
  },
  {
    slug: "zoo-pop",
    number: "03",
    name: "ZOO POP",
    displayName: "Сладкие зверьки",
    category: "мягкие сладкие",
    tagline: "Стая, которая исчезает быстрее всех.",
    description: "Мягкие зверьки с гладкой поверхностью, сочными ягодными вкусами и приятной упругостью.",
    longDescription: "ZOO POP — самый дружелюбный мир MARMVERSE. В каждой пачке встречаются медведи, коты, динозавры и лисы. Формы крупные, детали читаются, а текстура остаётся мягкой без липкости — удобно брать с собой и делиться.",
    primary: "#ff7a22",
    secondary: "#ffd93d",
    ink: "#2a1305",
    glow: "rgba(255,122,34,.5)",
    image: "/images/products/zoo-pop.webp",
    shape: "animal",
    taste: { sour: 12, sweet: 91, soft: 94 },
    notes: ["персик", "клубника", "апельсин", "виноград"],
    badges: ["очень мягкие", "4 фигурки", "без кислой обсыпки"],
    ingredients: "Сахар, сироп глюкозы, пектин, фруктовые соки, натуральные ароматизаторы, карнаубский воск.",
    character: "Сладкая стая",
  },
  {
    slug: "fruit-glitch",
    number: "04",
    name: "FRUIT GLITCH",
    displayName: "Фруктовые фрукты",
    category: "сочный фруктовый микс",
    tagline: "Фрукты, которые прокачали вкус до максимума.",
    description: "Мармелад в форме мини-фруктов с двойным вкусом, сочной серединой и натуральными оттенками.",
    longDescription: "FRUIT GLITCH превращает знакомые фрукты в яркие конфеты: клубника становится клубника-лайм, апельсин — апельсин-манго, а яблоко получает ягодный центр. Каждая форма подсказывает вкус, но внутри всегда есть неожиданный второй слой.",
    primary: "#ff3864",
    secondary: "#4bff8a",
    ink: "#24050e",
    glow: "rgba(75,255,138,.5)",
    image: "/images/products/fruit-glitch.webp",
    shape: "fruit",
    taste: { sour: 38, sweet: 84, soft: 78 },
    notes: ["клубника-лайм", "яблоко-малина", "апельсин-манго", "виноград-смородина"],
    badges: ["двойной вкус", "фруктовые формы", "с соком"],
    ingredients: "Сахар, сироп глюкозы, пектин, концентрированные соки, лимонная кислота, экстракты фруктов и растений.",
    character: "Фруктовый глитч",
  },
  {
    slug: "abc-soft",
    number: "05",
    name: "ABC SOFT",
    displayName: "Детские буквы",
    category: "мягкие детские",
    tagline: "Собирай слова. Не собирай кислую мину.",
    description: "Нежные мармеладные буквы с пониженным содержанием сахара и мягкой кислотностью для детей.",
    longDescription: "ABC SOFT создан для спокойного детского вкуса: меньше сахара, почти незаметная кислотность и мягкая текстура. Буквы крупные и понятные — из них можно складывать имена, простые слова и маленькие сладкие послания.",
    primary: "#77d8ff",
    secondary: "#ff9fd2",
    ink: "#10202d",
    glow: "rgba(119,216,255,.6)",
    image: "/images/products/abc-soft.webp",
    shape: "letter",
    taste: { sour: 8, sweet: 54, soft: 98 },
    notes: ["яблоко", "груша", "клубника", "банан"],
    badges: ["−30% сахара", "мягкая кислотность", "буквы А–Я"],
    ingredients: "Сироп глюкозы, сахар в уменьшенном количестве, пектин, фруктовые пюре, натуральные ароматизаторы и красители.",
    character: "Азбука вкуса",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
