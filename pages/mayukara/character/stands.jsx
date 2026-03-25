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

import mMamoru1 from "../../static/mobile/m1mmr1.png";
import mMamoru2 from "../../static/mobile/m1mmr2.png";
import mMamoru3 from "../../static/mobile/m1mmr3.png";
import mChiyo1 from "../../static/mobile/m2cy1.png";
import mChiyo2 from "../../static/mobile/m2cy2.png";
import mChiyo3 from "../../static/mobile/m2cy3.png";
import mSaika1 from "../../static/mobile/m3sik1.png";
import mSaika2 from "../../static/mobile/m3sik2.png";
import mSaika3 from "../../static/mobile/m3sik3.png";
import mJuri1 from "../../static/mobile/m4jr1.png";
import mJuri2 from "../../static/mobile/m4jr2.png";
import mTsuyuri1 from "../../static/mobile/m5tyr1.png";
import mTsuyuri2 from "../../static/mobile/m5tyr2.png";
import mTsuyuri3 from "../../static/mobile/m5tyr3.png";
import mNazuna1 from "../../static/mobile/m6nzn1.png";
import mNazuna2 from "../../static/mobile/m6nzn2.png";
import mNazuna3 from "../../static/mobile/m6nzn3.png";
import mSousei1 from "../../static/mobile/m7susi1.png";
import mSousei2 from "../../static/mobile/m7susi2.png";
import mSitoras1 from "../../static/mobile/m8strs1.png";
import mSitoras2 from "../../static/mobile/m8strs2.png";
import mRyuko1 from "../../static/mobile/m9rk1.png";
import mRyuko2 from "../../static/mobile/m9rk2.png";
import mRyo1 from "../../static/mobile/m10ku1.png";
import mRyo2 from "../../static/mobile/m10ku2.png";
import mKenji1 from "../../static/mobile/m11knj1.png";
import mKenji2 from "../../static/mobile/m11knj2.png";
import mKomari1 from "../../static/mobile/m12kmr1.png";
import mKomari2 from "../../static/mobile/m12kmr2.png";
import mUshio1 from "../../static/mobile/m13uso1.png";
import mUshio2 from "../../static/mobile/m13uso2.png";
import mUmino1 from "../../static/mobile/m14umn1.png";
import mUmino2 from "../../static/mobile/m14umn2.png";
import mHigane1 from "../../static/mobile/m15hgn1.png";
import mHigane2 from "../../static/mobile/m15hgn2.png";

const standsLookup = {
  Mamoru: { pc: [mamoru1, mamoru2, mamoru3], mobile: [mMamoru1, mMamoru2, mMamoru3] },
  Chiyo: { pc: [chiyo1, chiyo2, chiyo3], mobile: [mChiyo1, mChiyo2, mChiyo3] },
  Saika: { pc: [saika1, saika2, saika3], mobile: [mSaika1, mSaika2, mSaika3] },
  Juri: { pc: [juri1, juri2], mobile: [mJuri1, mJuri2] },
  Tsuyuri: { pc: [tsuyuri1, tsuyuri2, tsuyuri3], mobile: [mTsuyuri1, mTsuyuri2, mTsuyuri3] },
  Nazuna: { pc: [nazuna1, nazuna2, nazuna3], mobile: [mNazuna1, mNazuna2, mNazuna3] },
  Sousei: { pc: [sousei1, sousei2], mobile: [mSousei1, mSousei2] },
  Shitorasu: { pc: [sitoras1, sitoras2], mobile: [mSitoras1, mSitoras2] },
  Ryuko: { pc: [ryuko1, ryuko2], mobile: [mRyuko1, mRyuko2] },
  Ryou: { pc: [ryo1, ryo2], mobile: [mRyo1, mRyo2] },
  Kenji: { pc: [kenji1, kenji2], mobile: [mKenji1, mKenji2] },
  Komari: { pc: [komari1, komari2], mobile: [mKomari1, mKomari2] },
  Ushio: { pc: [ushio1, ushio2], mobile: [mUshio1, mUshio2] },
  Umino: { pc: [umino1, umino2], mobile: [mUmino1, mUmino2] },
  Higane: { pc: [higane1, higane2], mobile: [mHigane1, mHigane2] },
};

export default function CharaStands(selected, value, isMobile) {
  const entry = standsLookup[selected];
  if (!entry) return <></>;

  const images = isMobile ? entry.mobile : entry.pc;
  const idx = parseInt(value, 10) - 1;
  const src = images[idx];

  const style = isMobile
    ? { display: "inline-block", width: "480px", height: "768px" }
    : { display: "inline-block", width: "540px", height: "864px" };

  if (src) {
    return <Image src={src} style={style} alt="Image" />;
  }
  return <></>;
}
