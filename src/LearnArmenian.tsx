import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";

// Components
import About from "./pages/about/About";
import PictureDictionary from "./pages/picture-dictionary/PictureDictionary";
import SideBar from "./components/SideBar";

const globalStyles = (
  <GlobalStyles
    styles={{
      html: { backgroundColor: "#222", color: "white" },
      body: { backgroundColor: "#222", color: "white" },
      ".App": {
        display: "flex",
        flexDirection: "column",
      },
    }}
  />
);

export default function LearnArmenian() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        {globalStyles}
        <SideBar />
        <Routes>
          <Route path="/" element={<PictureDictionary />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
