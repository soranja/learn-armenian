import { categoriesType } from "../types/categoriesType";

// categories
import { greetings } from "../data/categories/greetings";
import { numbersZeroToNine } from "../data/categories/numbersZeroToNine";
import { numbersLarge } from "../data/categories/numbersLarge";
import { usefulPhrases } from "../data/categories/usefulPhrases";
import { food } from "../data/categories/food";
import { places } from "../data/categories/places";

export const categories: categoriesType[] = [
  { name: "01 - MEETING & GREETING", category: greetings },
  { name: "02 - NUMBERS 0-9", category: numbersZeroToNine },
  { name: "03 - LARGE NUMBERS", category: numbersLarge },
  { name: "04 - USEFUL PHRASES", category: usefulPhrases },
  { name: "05 - FOOD", category: food },
  { name: "06 - PLACES", category: places },
];
