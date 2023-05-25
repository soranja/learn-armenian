// let obj = {};

// export default obj;

// let colors: "red" | "green" | "blue" = "red";

// colors = "green";

// ============================================

/*
Questions:

  - FILTER, TOLOWERCASE, EVENT, TARGET types?
  - How to add (+ manage) CSS to components?
  - className style: resetCount or ResetCount?
  - const Wordlist and wordlist?
  - this didn't work: https://scrimba.com/articles/react-list-array-with-map-function/
*/

// ============================================

// SEARCH DRAFTS:

// console.log(translations["bamboo"]);
// useEffect(() => {
//   const filteredWords = [];

//   for (const word in words) {
//     // console.log(word);
//     for (let i = 0; i < word.length; i++) {
//       // console.log(word[i]);
//       if (searchInput === word[i]) {
//         filteredWords.push(word);
//         break;
//         // ONLY 1 letter, 'nan' in 'banana'?
//         // ONLY a category, not ENG / ARM
//       }
//     }
//   }

//   setFilteredValues(filteredWords);
// }, [searchInput]);

// console.log((words[word].eng as string)[i]);
// const wordsValues = Object.values(words);
// for (const word of wordsValues) {
//   console.log(word);
// }

// const allWords = Object.keys(words);
// console.log(Object.keys(words));

// console.log(`English: ${words[word]}, ${words[word].eng}`);
// console.log(`Armenian: ${words[word]}, ${words[word].arm}`);

// ============================================

// const url = "https://translation.googleapis.com/language/translate/v2";
// const res = await axios
//   .post(
//     url,
//     {
//       q: "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.",
//       source: "en",
//       target: "es",
//       format: "text",
//     },
//     {
//       headers: {
//         key: "AIzaSyBmMfPU08P9e7Ct5Brr0WL-jNdPg8H5ZZk",
//       },
//     }
//   )
//   .then((response: any) => console.log(response.data));

// =========================================

/*
  type wordsTypes = {
    [key: string]: { eng: string; arm: string };
  };

  const translations: wordsTypes = {
    banana: {
      eng: "Banana",
      arm: "Բանան",
    },
    apple: {
      eng: "Apple",
      arm: "Խնձոր",
    },
    water: {
      eng: "Water",
      arm: "Ջուր",
    },
    juice: {
      eng: "Juice",
      arm: "Հյութ",
    },
    bamboo: {
      eng: "Bamboo",
      arm: "Բամբուկ",
    },
  };

  */

// ==========================

// type SearchBarProps = {
//   words: string[];
//   translations: {
//     [key: string]: { eng: string; arm: string };
//   };
// };

// ===========================

// <li key={i}>{`${word} - ${translations[word.toLowerCase()]?.arm} - ${
//   translations[word.toLowerCase()]?.eng
// }`}</li>

// ========================= OVERUSED LOL

// const translator = async () => {
//   const encodedParams = new URLSearchParams();
//   encodedParams.set("q", `${words}`);
//   encodedParams.set("target", "hy");
//   encodedParams.set("source", "en");

//   const options = {
//     method: "POST",
//     url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "X-RapidAPI-Key":
//         "6dcb8ad84emsh60574dff8415fd3p155e4djsnc568689778ac",
//       "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
//     },
//     data: encodedParams,
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     const translatedWords = () => {
//       for (
//         let i = 0;
//         i < response.data.translations.translatedText.length;
//         i++
//       ) {
//         const key = "translatedText";
//         const value = response.data.translations.translatedText[i];

//         translation[key] = value;
//       }
//       console.log(translatedWords());
//     };
//   } catch (error) {
//     console.error(`We are ... ${error}`);
//   }
// };
// translator();

/* <SearchBar words={words} translations={translation} /> */

// ! ============================== !

// const words = ["Banana", "Apple", "Water", "Juice", "Bamboo"];

// type wordsTypes = {
//   [key: string]: string;
// };

// const translation: wordsTypes = {};

// console.log(translation);

export default {};

// // OLD VOCAB =============================================

// import React, { useEffect, useState } from "react";
// import "./Vocabulary.css";
// import SearchBar from "../../components/searchBar/SearchBar";
// import axios from "axios";
// import Loader from "../../components/loader/Loader";

// function Vocabulary() {
//   // const words = ["Banana", "Apple", "Water", "Juice", "Bamboo"];

//   // type wordsTypes = {
//   //   [key: string]: string;
//   // };

//   // const translation: wordsTypes = {};

//   // console.log(translation);

//   const [vocabTranslate, setVocabTranslate] = useState("");
//   const [showTranslate, setShowTranslate] = useState<string[]>([""]);

//   const request = { q: `hello`, source: "en", target: "hy" };

//   useEffect(() => {
//     const translatedVocab = async () => {
//       await axios
//         .post(
//           "https://translation.googleapis.com/language/translate/v2",
//           JSON.stringify(request),
//           {
//             headers: {
//               Authorization:
//                 "Bearer ya29.a0AWY7Ckn1W2WLwCPMMv3mYv-YBfZSDV4jfoZpDXBQuyicaOxs-NY6cVs_MbOUPkTX24tQPf34V7_DaJOf5cerJUC6G36UTEEnGJeZGUjx_KZAGNMMvdwBwH9rn8YlqyQ1cQULFGfXyIHb78p5a2YAUO6YzTbqzNUuaCgYKAaYSARESFQG1tDrpiKM5TSZESKjdUuWx-CcNXA0167",
//               //gcloud auth application-default print-access-token
//               "x-goog-user-project": "argon-rider-385917",
//               "Content-Type": "application/json; charset=utf-8",
//             },
//           }
//         )
//         .then((response) => {
//           console.log(response.data.data.translations[0].translatedText);
//           setVocabTranslate(response.data.data.translations[0].translatedText);
//           // translation.translated =
//           //   response.data.data.translations[0].translatedText;
//         })
//         .catch((err) => console.error(`${err} 😯`))
//         .finally(() => {
//           <Loader />;
//         });
//     };
//     translatedVocab();
//   }, [vocabTranslate]);

//   return (
//     <div className="Vocabulary">
//       {/* <SearchBar words={words} translations={translation} /> */}
//       {/* <input
//         className="SearchTranslate"
//         placeholder="type the word..."
//         onChange={(e) => translate(e.target.value)}
//       ></input> */}
//     </div>
//   );
// }

// export default Vocabulary;
