import { categoriesType } from "../types/categoriesType";

// categories
import { greetings } from "../data/categories/greetings";
import { numbersZeroToNine } from "../data/categories/numbersZeroToNine";
import { numbersLarge } from "../data/categories/numbersLarge";
import { usefulPhrases } from "../data/categories/usefulPhrases";
import { food } from "../data/categories/food";
import { places } from "../data/categories/places";

export const categories: categoriesType[] = [
  {
    name: "01 - MEETING & GREETING",
    category: greetings,
    label: "01 - MEETING & GREETING",
    id: 1,
  },
  {
    name: "02 - NUMBERS 0-9",
    category: numbersZeroToNine,
    label: "02 - NUMBERS 0-9",
    id: 2,
  },
  {
    name: "03 - LARGE NUMBERS",
    category: numbersLarge,
    label: "03 - LARGE NUMBERS",
    id: 3,
  },
  {
    name: "04 - USEFUL PHRASES",
    category: usefulPhrases,
    label: "04 - USEFUL PHRASES",
    id: 4,
  },
  { name: "05 - FOOD", category: food, label: "05 - FOOD", id: 5 },
  { name: "06 - PLACES", category: places, label: "06 - PLACES", id: 6 },
];
