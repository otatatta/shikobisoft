import React, { useState, useMemo } from "react";
import Image from "next/image";
import { pcList1 } from "../../../consts/characters";
import { BREAKPOINT_MOBILE } from "../../../consts/layout";
import CharaTxtImg from "./txtsImg";
import CharaStands from "./stands";
import CharaGrid from "./CharaGrid";
import CharaDetailModal from "./CharaDetailModal";
import styles from "./index.module.css";

export default function MayuChara({ width }) {
  const [mamoruOpen, setMamoruOpen] = useState(false);
  const [charaValue, setCharaValue] = useState();
  const [value, setValue] = useState("1");
  const isMobile = width <= BREAKPOINT_MOBILE;

  const onClickButton = (val, index) => {
    setCharaValue({ ...val, index });
    setMamoruOpen(true);
    setValue("1");
  };

  const charaStand = useMemo(() => {
    return CharaStands(charaValue?.selected_name, value, isMobile);
  }, [charaValue?.selected_name, value, isMobile]);

  const charatxt = useMemo(
    () => (
      <Image
        src={CharaTxtImg(charaValue?.selected_name)}
        className={styles.charaImage}
        alt="charatxt"
      />
    ),
    [charaValue?.selected_name]
  );

  const onCancel = () => {
    setMamoruOpen(false);
    setCharaValue(undefined);
    setValue("1");
  };

  const onchangeChara = (newIndex) => {
    if (newIndex !== undefined && pcList1[newIndex]?.selected_name) {
      setCharaValue({ ...pcList1[newIndex], index: newIndex });
      setValue("1");
    } else {
      setCharaValue({ ...pcList1[0], index: 0 });
      setValue("1");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerPadding}>
          <CharaGrid isMobile={isMobile} onClickButton={onClickButton} />
          <CharaDetailModal
            isMobile={isMobile}
            charaStand={charaStand}
            charatxt={charatxt}
            charaValue={charaValue}
            value={value}
            setValue={setValue}
            open={mamoruOpen}
            onCancel={onCancel}
            onchangeChara={onchangeChara}
          />
        </div>
      </div>
    </>
  );
}
