export type PicturesType = {
  hy: string;
  transliteration: string;
  en: string;
  ru: string;
  url: string;
  category?: string;
};

export type CategoriesType = {
  category: PicturesType[];
  label: string;
};

export type SelectInitialState = { label: string };
