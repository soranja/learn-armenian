export type PicturesType = {
  hy: string;
  transliteration: string;
  en: string;
  ru: string;
  url: string;
  category?: string;
};

export type CategoriesType = {
  name: string;
  category: PicturesType[];
  label: string;
  id: number;
};

export type SelectInitialState = { label: string };
