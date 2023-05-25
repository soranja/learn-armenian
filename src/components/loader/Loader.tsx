import React from "react";
import { PulseBubbleLoader } from "react-loaders-kit";
// import Typed from "react-typed";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 100,
    duration: 2,
    colors: ["#5c5cff", "#5c5cff", "#5c5cff"],
  };

  return (
    <div className="loader" style={{ margin: 10 }}>
      <PulseBubbleLoader {...loaderProps} />
      {/* <Typed
        className="loader-text"
        strings={["Loading..."]}
        typeSpeed={100}
        backSpeed={0}
      /> */}
    </div>
  );
}
export default Loader;
