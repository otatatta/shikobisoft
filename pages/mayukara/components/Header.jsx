import React, { useMemo } from "react";
import Image from "next/image";
import arasuji from "../../static/arasuji.png"
import denpou from "../../static/denpou.png"
import garou from "../../static/garou.png"
import jinbutsu from "../../static/jinbutsu.png"
import kobanashi from "../../static/kobanashi.png"

function SectionHeader({ text }) {
  const txtImg = useMemo(() => {
    switch (text) {
      case "御噺":
        return arasuji
      case "人物":
        return jinbutsu
      case "画廊":
        return garou
      case "小噺":
        return kobanashi
      case "電報":
        return denpou
      default: return undefined
    }
  }, [text])

  const outer = {
    width: "100%",
    height: "3rem",
    overflow: "hidden",
    textAlign: "center",
    outline: "thick double #A3383E",
    borderRadius: "1rem",
    marginTop:"1rem"
  }
  const inner = {
    // width: "95 %",
    // height: "95 %",
    backgroundColor: "#A3383E",
    color: "#fff",
  }

  return (
    <>
      {/* <div style={{ width: "100%", backgroundColor: "#A3383E", height: "3rem", textAlign: "center", fontSize: "2rem" }}>
      <p style={{ color: "rgb(255, 255, 255)" }}>ー{text}ー</p>
    </div> */}
      <div style={outer}>
        <div style={inner}>
          {txtImg && (
            <Image
              alt="Shikoshiko"
              src={txtImg}
              style={{ objectFit: "contain", width: "100%", height: "100%", maxWidth: "150px", maxHeight: "50px" }}
              layout={"intrinsic"} />
          )}
        </div>
      </div>
    </>
  );
}

export default SectionHeader;