import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "black",
        color: "white",
      }}
    >
      <div style={{ display: "inline", margin: "0 auto" }}>Loading...</div>
    </div>
  );
};

export default Loader;
