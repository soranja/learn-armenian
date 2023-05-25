import React from "react";
import "./PictureDictionary.css";
// import { picture } from "./pictures/akhper.jpg";

function PictureDictionary() {
  return (
    <div className="PictureDictionary">
      <div className="card">
        <img
          className="card-img-top"
          src="https://avatars.mds.yandex.net/get-altay/2930751/2a00000172741c545842c7fbd2b29fa3e3c4/XXXL"
          alt="picture"
        />
        <div className="card-body">
          <h5 className="card-title">PHARMACY - ԴԵՂԱՏՈՒՆ</h5>
          <p className="card-text">[DEGHATUN]</p>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://risovach.ru/upload/2013/12/mem/ya-tvoi-dom-truba-shatal_38562252_orig_.jpg"
          // src="./pictures/akhper.jpg" -- HOW TO RUN ON LOCAL???
          alt="picture"
        />
        <div className="card-body">
          <h5 className="card-title">BRO - ԱԽՊԵՐ</h5>
          <p className="card-text">[AKHPER]</p>
        </div>
      </div>
    </div>
  );
}

export default PictureDictionary;
