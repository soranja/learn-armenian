import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { CssBaseline, GlobalStyles } from "@mui/material";

// Components
import About from "./pages/about/About";
import PictureDictionary from "./pages/picture-dictionary/PictureDictionary";
import Header from "./components/Header";

const globalStyles = (
  <GlobalStyles
    styles={{ body: { backgroundColor: "#222", color: "white" } }}
  />
);

export default function LearnArmenian() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        {globalStyles}
        <Header />
        <Routes>
          <Route path="/" element={<PictureDictionary />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
