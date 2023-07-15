import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import About from "./pages/about/About";
import PictureDictionary from "./pages/picture-dictionary/PictureDictionary";
import SideBar from "./components/sideBar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App body-bg text-white">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<PictureDictionary />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// too many import "bootstrap/dist/css/bootstrap.min.css"; OK
// bg color the whole page ? IS VH-100 OK? FOR NOW OK, percents may be better
// how to change CSS better: properties or Sass?
