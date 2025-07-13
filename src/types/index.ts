export type picturesType = {
  hy: string;
  transliteration: string;
  en: string;
  ru: string;
  url: string;
  category: string;
};

export type categoriesType = {
  name: string;
  category: picturesType[];
  label: string;
  id: number;
};

export type SelectInitialState = { label: string };
