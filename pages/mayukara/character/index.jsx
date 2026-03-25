import React, { useState, useMemo } from "react";
import Image from "next/image";
import { pcList1 } from "../../../consts/characters";
import CharaTxtImg from "./txtsImg";
import CharaStands from "./stands";
import CharaGrid from "./CharaGrid";
import CharaDetailModal from "./CharaDetailModal";

export default function MayuChara({ width }) {
  const [mamoruOpen, setMamoruOpen] = useState(false);
  const [charaValue, setCharaValue] = useState();
  const [value, setValue] = useState("1");
  const isMobile = width <= 768;

  const onClickButton = (val, index) => {
    setCharaValue({
      names: val.names,
      name_sub: val.name_sub,
      name_img: val.name_img,
      selected_name: val.selected_name,
      icon: val.icon,
      options: val.options,
      index: index,
    });
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
        style={{ display: "inline-block" }}
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
      if (pcList1[newIndex]?.selected_name) {
        setCharaValue({ ...pcList1[newIndex], index: newIndex });
        setValue("1");
      }
    } else {
      setCharaValue({ ...pcList1[0], index: 0 });
      setValue("1");
    }
  };

  return (
    <>
      <div
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          fontFamily: "serif",
          marginTop: "2rem",
        }}
      >
        <div style={{ padding: "0, 2rem" }}>
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
