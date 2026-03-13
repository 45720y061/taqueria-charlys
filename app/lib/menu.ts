export type MenuCategory = {
  en: string;
  es: string;
};

export type FeaturedMenuItem = {
  name: string;
  price: string;
  badgeEn?: string;
  badgeEs?: string;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { en: 'Tacos', es: 'Tacos' },
  { en: 'Burritos', es: 'Burritos' },
  { en: 'Tortas / Sandwiches', es: 'Tortas / Sándwiches' },
  { en: 'Combos', es: 'Combinaciones / Combos' },
  { en: 'Sopes, Huaraches & Quesadillas', es: 'Sopes, Huaraches y Quesadillas' },
  { en: 'Seafood', es: 'Pescado y Mariscos' },
  { en: 'Broths & Consommés', es: 'Caldos y Consomés' },
  { en: 'Other Favorites', es: 'Otros Favoritos' },
  { en: 'Drinks', es: 'Bebidas' },
];

export const FEATURED_MENU_ITEMS: FeaturedMenuItem[] = [
  {
    name: 'Tacos Choice of Meat / Tacos Carne al Gusto',
    price: '$3.75',
    badgeEn: 'Most liked',
    badgeEs: 'Más pedido',
  },
  {
    name: 'Burrito',
    price: '$10.99',
  },
  {
    name: 'Papas con carne',
    price: '$13.23',
  },
  {
    name: 'Torta Carne al Gusto',
    price: '$10.99',
  },
  {
    name: 'Quesabirria Tacos / Tacos de Quesabirria',
    price: '$3.75',
  },
  {
    name: 'Burrito Mojado / Wet Burrito',
    price: '$12.99',
  },
];