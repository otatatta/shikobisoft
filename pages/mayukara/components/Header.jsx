import React from "react";

function SectionHeader({ text }) {
  return (
    <div style={{ width: "100%", backgroundColor: "#A3383E", height: "3rem", textAlign: "center", fontSize: "2rem" }}>
      <p style={{ color: "rgb(255, 255, 255)" }}>ー{text}ー</p>
    </div>
  );
}

export default SectionHeader;