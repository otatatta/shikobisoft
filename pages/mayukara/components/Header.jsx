import React, { useMemo } from "react";
import Image from "next/image";
import arasuji from "../../static/bar-arasuji.png";
import denpou from "../../static/bar-denpo.png";
import garou from "../../static/bar-garo.png";
import jinbutsu from "../../static/bar-jinbutsu.png";
import kobanashi from "../../static/bar-kobanashi.png";

function SectionHeader({ text }) {
  const txtImg = useMemo(() => {
    switch (text) {
      case "御噺":
        return arasuji;
      case "人物":
        return jinbutsu;
      case "画廊":
        return garou;
      case "小噺":
        return kobanashi;
      default:
        return undefined;
    }
  }, [text]);

  const outer = {
    width: "100%",
    height: "3rem",
    overflow: "hidden",
    textAlign: "center",
    outline: "thick double #A3383E",
    borderRadius: "1rem",
    marginTop: "1rem",
  };
  const inner = {
    width: "100%",
    height: "100%",
    backgroundColor: "#A3383E",
    color: "#fff",
  };

  return (
    <>
      <div style={outer}>
        <div style={inner}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {txtImg && (
              <Image
                alt="Shikoshiko"
                src={txtImg}
                style={{ objectFit: "cover", maxHeight: "46px" }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionHeader;
