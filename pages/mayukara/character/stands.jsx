import Image from "next/image";
import mamoru1 from "../../static/stands/S1mmr1.png";
import mamoru2 from "../../static/stands/S1mmr2.png";
import mamoru3 from "../../static/stands/S1mmr3.png";
import chiyo1 from "../../static/stands/S2cy1.png";
import chiyo2 from "../../static/stands/S2cy2.png";
import chiyo3 from "../../static/stands/S2cy3.png";
import saika1 from "../../static/stands/S3sik1.png";
import saika2 from "../../static/stands/S3sik2.png";
import saika3 from "../../static/stands/S3sik3.png";
import juri1 from "../../static/stands/S4jr1.png";
import juri2 from "../../static/stands/S4jr2.png";
import tsuyuri1 from "../../static/stands/S5tyr1.png";
import tsuyuri2 from "../../static/stands/S5tyr2.png";
import tsuyuri3 from "../../static/stands/S5tyr3.png";
import nazuna1 from "../../static/stands/S6nzn1.png";
import nazuna2 from "../../static/stands/S6nzn2.png";
import nazuna3 from "../../static/stands/S6nzn3.png";
import sousei1 from "../../static/stands/S7susi1.png";
import sousei2 from "../../static/stands/S7susi2.png";
import sitoras1 from "../../static/stands/S8strs1.png";
import sitoras2 from "../../static/stands/S8strs2.png";
import ryuko1 from "../../static/stands/S9rk1.png";
import ryuko2 from "../../static/stands/S9rk2.png";
import ryo1 from "../../static/stands/S10ku1.png";
import ryo2 from "../../static/stands/S10ku2.png";
import kenji1 from "../../static/stands/S11knj1.png";
import kenji2 from "../../static/stands/S11knj2.png";
import komari1 from "../../static/stands/S12kmr1.png";
import komari2 from "../../static/stands/S12kmr2.png";
import ushio1 from "../../static/stands/S13uso1.png";
import ushio2 from "../../static/stands/S13uso2.png";
import umino1 from "../../static/stands/S14umn1.png";
import umino2 from "../../static/stands/S14umn2.png";
import higane1 from "../../static/stands/S15hgn1.png";
import higane2 from "../../static/stands/S15hgn2.png";

export default function CharaStands(selected, value) {
  const imgArea = (src) => {
    if (src) {
      return (
        <Image
          src={src}
          style={{ display: "inline-block", width: "540px", height: "864px" }}
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
