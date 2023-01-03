import React from "react";

function SectionHeader({ text }) {

  const outer = {
    width: "100%",
    height: "3rem",
    overflow: "hidden",
    textAlign: "center",
    fontSize: "2rem",
    outline: "thick double #A3383E",
    borderRadius: "1rem",
  }
  const inner = {
    width: "95 %",
    height: "95 %",
    // padding:"1rem",
    // backgroundColor: "blue",
    backgroundColor: "#A3383E",
    color:"#fff"
  }

  return (
    <>
    {/* <div style={{ width: "100%", backgroundColor: "#A3383E", height: "3rem", textAlign: "center", fontSize: "2rem" }}>
      <p style={{ color: "rgb(255, 255, 255)" }}>ー{text}ー</p>
    </div> */}
      <div style={outer}>
        <div style={inner}>
          <p >ー{text}ー</p>
        </div>
      </div>
    </>
  );
}

export default SectionHeader;