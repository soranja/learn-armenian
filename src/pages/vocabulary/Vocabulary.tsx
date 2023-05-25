import React, { ChangeEvent, useEffect, useState } from "react";
import "./Vocabulary.css";
import axios from "axios";
import Loader from "../../components/loader/Loader";

function Vocabulary() {
  const [vocabTranslate, setVocabTranslate] = useState("");
  const [vocabInput, setVocabInput] = useState("");
  const [isLoader, setLoader] = useState(false);
  const [isError, setError] = useState(false);
  const [wordlist, setWordlist] = useState<
    { word: string; translation: string }[]
  >([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 10) {
      setError(true);
      return;
    }
    setError(false);
    setVocabInput(e.target.value);
  };

  const handleClick = () => {
    // console.log("enter");
    const translatedVocab = async () => {
      setLoader(true);
      await axios
        .post(
          "https://translation.googleapis.com/language/translate/v2",
          JSON.stringify({ q: `${vocabInput}`, source: "en", target: "hy" }),
          {
            headers: {
              // Authorization: "Bearer Here is the TOKEN",
              // gcloud auth application-default print-access-token
              "x-goog-user-project": "",
              "Content-Type": "application/json; charset=utf-8",
            },
          }
        )
        .then((response) => {
          const translation = response.data.data.translations[0].translatedText;
          setVocabTranslate(translation);
          localStorage.setItem("vocabTranslate", JSON.stringify(translation));
          setWordlist([{ word: vocabInput, translation }, ...wordlist]);

          const isWordAlreadyExists = () => {
            // wordlist.some(
            //   (item) => item.word.toLowerCase() === vocabInput.toLowerCase()
            // );
            // console.log(1);
          };
          // console.log(isWordAlreadyExists());
          // RETURNS UNDEFINED ?
        })
        .catch((err) => console.error(`${err} 😯`))
        .finally(() => {
          setLoader(false);
        });
    };
    translatedVocab();
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleClick();
        localStorage.setItem("vocabInput", JSON.stringify(vocabInput));
        setVocabInput("");

        // localStorage.getItem("vocabInput");
        // localStorage.getItem("vocabTranslate");
        // JSON.parse doesn't work with TS!!! ? :(((
      }
    };

    // How to optimize it in one useEffect with acync / await?

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [vocabInput]);

  const removeWord = (word: string) => {
    setWordlist((prevWordlist) =>
      prevWordlist.filter((curWord) => curWord.word !== word)
    );

    // initial thought: setWordlist(() => {}) doesn't work (wrong syntax) and it's not really clear for me

    // ChatGPT has helped me, it made some mistakes but I fixed it
  };

  const removeWordlist = () => {
    setWordlist([]);
    console.log(`the list is emplty`);
  };

  return (
    <div className="Vocabulary">
      <div className="vocabInput">
        <input
          className="vocabSearch"
          type="text"
          placeholder="Translate a word / phrase"
          value={vocabInput}
          onChange={handleChange}
        />

        <button className="btn-translate" onClick={handleClick}>
          Translate!
        </button>
        <p className="msg-validation" style={{ opacity: isError ? 1 : 0 }}>
          {isError && `10 SYMBOLS MAX`}
        </p>
      </div>
      <p className="hy-translation">Translation: {vocabTranslate}</p>
      {isLoader && <Loader />}

      <div>
        <h3 className="wordlist-title">Your wordlist:</h3>
        <ul className="wordlist">
          {wordlist.map((translationData) => {
            return (
              <li key={translationData.word}>
                {`${translationData.word} - ${translationData.translation}`}
                <button onClick={() => removeWord(translationData.word)}>
                  x
                </button>
              </li>
            );
          })}
        </ul>
        <button
          className="removeWordlist"
          onClick={removeWordlist}
          style={{ opacity: wordlist.length >= 1 ? 1 : 0 }}
        >
          {wordlist.length >= 1 ? `CLEAR THE LIST` : ``}
        </button>
      </div>
    </div>
  );
}

export default Vocabulary;

// delete input after enter - got it (myself)
// removee an item form the list - got it (with ChatGPT's assistance)
// remove the whole list - got it (myself)
// add validation ('You already have this word') - working on it
// learn more about localStorage

//localStorage
// const [items, setItems] = useState([""]);
