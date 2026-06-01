import React, { useMemo } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
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

  return (
    <>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.flexCenter}>
            {txtImg && (
              <Image
                alt="Shikoshiko"
                src={txtImg}
                className={styles.headerImage}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionHeader;
