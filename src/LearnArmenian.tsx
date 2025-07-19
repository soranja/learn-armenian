import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import {
  CssBaseline,
  GlobalStyles,
  Toolbar,
  ThemeProvider,
  useTheme,
} from "@mui/material";

// Components
import About from "./pages/about/About";
import PictureDictionary from "./pages/picture-dictionary/PictureDictionary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { muiCustomTheme } from "./constants";

const globalStyles = (
  <GlobalStyles
    styles={{ body: { backgroundColor: "#222", color: "white" } }}
  />
);

export default function LearnArmenian() {
  const outerTheme = useTheme();
  const theme = muiCustomTheme(outerTheme);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          {globalStyles}
          <Header />
          <Toolbar />
          <Routes>
            <Route path="/" element={<PictureDictionary />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}
