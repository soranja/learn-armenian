import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import About from "./pages/about/About";
import PictureDictionary from "./pages/picture-dictionary/PictureDictionary";
import SideBar from "./components/sideBar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path="/" element={<PictureDictionary />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
