import Image from "next/image";
import mamoru1 from "../../static/mobile/m1mmr1.png";
import mamoru2 from "../../static/mobile/m1mmr2.png";
import mamoru3 from "../../static/mobile/m1mmr3.png";
import chiyo1 from "../../static/mobile/m2cy1.png";
import chiyo2 from "../../static/mobile/m2cy2.png";
import chiyo3 from "../../static/mobile/m2cy3.png";
import saika1 from "../../static/mobile/m3sik1.png";
import saika2 from "../../static/mobile/m3sik2.png";
import saika3 from "../../static/mobile/m3sik3.png";
import juri1 from "../../static/mobile/m4jr1.png";
import juri2 from "../../static/mobile/m4jr2.png";
import tsuyuri1 from "../../static/mobile/m5tyr1.png";
import tsuyuri2 from "../../static/mobile/m5tyr2.png";
import tsuyuri3 from "../../static/mobile/m5tyr3.png";
import nazuna1 from "../../static/mobile/m6nzn1.png";
import nazuna2 from "../../static/mobile/m6nzn2.png";
import nazuna3 from "../../static/mobile/m6nzn3.png";
import sousei1 from "../../static/mobile/m7susi1.png";
import sousei2 from "../../static/mobile/m7susi2.png";
import sitoras1 from "../../static/mobile/m8strs1.png";
import sitoras2 from "../../static/mobile/m8strs2.png";
import ryuko1 from "../../static/mobile/m9rk1.png";
import ryuko2 from "../../static/mobile/m9rk2.png";
import ryo1 from "../../static/mobile/m10ku1.png";
import ryo2 from "../../static/mobile/m10ku2.png";
import kenji1 from "../../static/mobile/m11knj1.png";
import kenji2 from "../../static/mobile/m11knj2.png";
import komari1 from "../../static/mobile/m12kmr1.png";
import komari2 from "../../static/mobile/m12kmr2.png";
import ushio1 from "../../static/mobile/m13uso1.png";
import ushio2 from "../../static/mobile/m13uso2.png";
import umino1 from "../../static/mobile/m14umn1.png";
import umino2 from "../../static/mobile/m14umn2.png";
import higane1 from "../../static/mobile/m15hgn1.png";
import higane2 from "../../static/mobile/m15hgn2.png";

export default function CharaStandsMobile(selected, value) {
  const imgArea = (src) => {
    if (src) {
      return (
        <Image
          src={src}
          style={{ display: "inline-block", width: "480px", height: "768px" }}
          alt="Image"
        />
      );
    }
    return <></>;
  };
  switch (selected) {
    case "Mamoru":
      return (
        <>
          {value === "1" && imgArea(mamoru1)}
          {value === "2" && imgArea(mamoru2)}
          {value === "3" && imgArea(mamoru3)}
        </>
      );
    case "Chiyo":
      return (
        <>
          {value === "1" && imgArea(chiyo1)}
          {value === "2" && imgArea(chiyo2)}
          {value === "3" && imgArea(chiyo3)}
        </>
      );
    case "Saika":
      return (
        <>
          {value === "1" && imgArea(saika1)}
          {value === "2" && imgArea(saika2)}
          {value === "3" && imgArea(saika3)}
        </>
      );
    case "Juri":
      return (
        <>
          {value === "1" && imgArea(juri1)}
          {value === "2" && imgArea(juri2)}
        </>
      );
    case "Tsuyuri":
      return (
        <>
          {value === "1" && imgArea(tsuyuri1)}
          {value === "2" && imgArea(tsuyuri2)}
          {value === "3" && imgArea(tsuyuri3)}
        </>
      );
    case "Nazuna":
      return (
        <>
          {value === "1" && imgArea(nazuna1)}
          {value === "2" && imgArea(nazuna2)}
          {value === "3" && imgArea(nazuna3)}
        </>
      );
    case "Sousei":
      return (
        <>
          {value === "1" && imgArea(sousei1)}
          {value === "2" && imgArea(sousei2)}
        </>
      );
    case "Shitorasu":
      return (
        <>
          {value === "1" && imgArea(sitoras1)}
          {value === "2" && imgArea(sitoras2)}
        </>
      );
    case "Ryuko":
      return (
        <>
          {value === "1" && imgArea(ryuko1)}
          {value === "2" && imgArea(ryuko2)}
        </>
      );
    case "Ryou":
      return (
        <>
          {value === "1" && imgArea(ryo1)}
          {value === "2" && imgArea(ryo2)}
        </>
      );
    case "Kenji":
      return (
        <>
          {value === "1" && imgArea(kenji1)}
          {value === "2" && imgArea(kenji2)}
        </>
      );
    case "Komari":
      return (
        <>
          {value === "1" && imgArea(komari1)}
          {value === "2" && imgArea(komari2)}
        </>
      );
    case "Ushio":
      return (
        <>
          {value === "1" && imgArea(ushio1)}
          {value === "2" && imgArea(ushio2)}
        </>
      );
    case "Umino":
      return (
        <>
          {value === "1" && imgArea(umino1)}
          {value === "2" && imgArea(umino2)}
        </>
      );
    case "Higane":
      return (
        <>
          {value === "1" && imgArea(higane1)}
          {value === "2" && imgArea(higane2)}
        </>
      );
  }
}
