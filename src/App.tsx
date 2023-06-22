import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import Vocabulary from "./pages/vocabulary/Vocabulary";
import Phrasebook from "./pages/phrasebook/Phrasebook";
import PictureDictionary from "./pages/picture-dictionary/PictureDictionary";
import SideBar from "./components/sideBar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App body-bg text-white">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/phrasebook" element={<Phrasebook />} />
          <Route path="/picture-dict" element={<PictureDictionary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// too many import "bootstrap/dist/css/bootstrap.min.css"; OK
// bg color the whole page ? IS VH-100 OK? FOR NOW OK, percents may be better
// how to change CSS better: properties or Sass?
