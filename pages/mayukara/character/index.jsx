import { Col, Row, Modal, Segmented, Button, Spin } from "antd";
import React, { useState, useMemo } from "react";
import {
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Background from "../../static/hp1_bg.png";
import { characterList } from "./characterData";
import CharaTxt from "./txts";
import CharaTxtImg from "./txtsImg";
import CharaStands from "./stands";
import CharaStandsMobile from "./standsmobile";

export default function MayuChara({ width }) {
  const [mamoruOpen, setMamoruOpen] = useState(false);
  const [charaValue, setCharaValue] = useState();
  const [value, setValue] = useState("1");

  const onClickButton = (val, index) => {
    setCharaValue({ ...val, index });
    setMamoruOpen(true);
    setValue("1");
  };

  const charaStand = useMemo(() => {
    if (width > 768) {
      return CharaStands(charaValue?.selected_name, value);
    } else {
      return CharaStandsMobile(charaValue?.selected_name, value);
    }
  }, [charaValue?.selected_name, value, width]);

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
    if (newIndex !== undefined && characterList[newIndex]?.selected_name) {
      setCharaValue({ ...characterList[newIndex], index: newIndex });
      setValue("1");
    } else {
      setCharaValue({ ...characterList[0], index: 0 });
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
          {width > 768 ? (
            <Row gutter={16} md="4" lg="4" xl="4" xxl="4" align="middle">
              {characterList?.map((list, index) => (
                <div
                  style={{
                    width: "255px",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                  key={`chara_${index}`}
                >
                  <div>
                    <Button
                      type="text"
                      shape="circle"
                      style={{
                        width: "180x",
                        height: "180px",
                        clipPath: "circle(50%)",
                      }}
                      onClick={() => onClickButton(list, index)}
                    >
                      <Image
                        src={list?.icon}
                        alt="Image"
                        width={160}
                        height={160}
                      />
                    </Button>
                  </div>
                  <div>
                    <Button
                      type="text"
                      onClick={() => onClickButton(list, index)}
                    >
                      <Image src={list?.name_img} alt="Image" height={30} />
                    </Button>
                  </div>
                </div>
              ))}
            </Row>
          ) : (
            <Row
              gutter={{
                xs: 8,
                sm: 16,
              }}
              align="middle"
            >
              {characterList?.map((list, index) => (
                <Col span={12} key={`chara_${index}`}>
                  <div>
                    <Button
                      type="text"
                      style={{ width: "105px", height: "105px" }}
                      onClick={() => onClickButton(list, index)}
                    >
                      <Image
                        src={list?.icon}
                        alt="Image"
                        width={100}
                        height={100}
                      />
                    </Button>
                  </div>
                  <div>
                    <Button
                      type="text"
                      onClick={() => onClickButton(list, index)}
                    >
                      <Image src={list?.name_img} alt="Image" height={15} />
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          )}
          <Modal
            centered
            closeIcon={
              <CloseOutlined style={{ fontSize: "48px", paddingTop: "8px" }} />
            }
            open={mamoruOpen}
            onCancel={onCancel}
            width={"95%"}
            bodyStyle={{ height: `820px` }}
            cancelText="閉じる"
            zIndex={194545}
            footer={<></>}
          >
            {width > 768 ? (
              <>
                <Image
                  alt="Shikoshikoback"
                  src={Background}
                  style={{ opacity: 0.25, objectFit: "cover" }}
                  fill
                />
                {charaStand ? (
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24 }}
                    align="middle"
                    style={{ fontFamily: "Hannari" }}
                  >
                    <Col span={1}>
                      {charaValue?.index > 0 && (
                        <Button
                          type="text"
                          onClick={() => onchangeChara(charaValue.index - 1)}
                          icon={
                            <LeftOutlined
                              style={{
                                fontSize: "120px",
                                color: "#fff",
                                backgroundColor: "rgba(128,128,128,.5)",
                              }}
                              block
                            />
                          }
                        ></Button>
                      )}
                    </Col>
                    <Col span={6} style={{ textAlign: "right" }}>
                      <Row>
                        <div style={{ position: "relative", bottom: "40px" }}>
                          {charaStand}
                        </div>
                        <span
                          style={{
                            position: "relative",
                            bottom: "12vh",
                            left: "45vh",
                            zIndex: "19194545",
                            border: "2px solid rgba(50, 50, 50, .9)",
                          }}
                        >
                          <Segmented
                            style={{ border: "2px" }}
                            options={charaValue?.options ?? ["1"]}
                            value={value}
                            onChange={setValue}
                            size={"large"}
                          />
                        </span>
                      </Row>
                    </Col>
                    <Col span={16} align="top">
                      {charatxt}
                      <Row
                        style={{
                          zIndex: 194545,
                          color: "black",
                          width: "100%",
                          position: "relative",
                          bottom: "6vh",
                        }}
                        align="middle"
                      >
                        <div
                          style={{ marginLeft: "auto", paddingRight: "100px" }}
                        >
                          <Button onClick={onCancel}>閉じる</Button>
                        </div>
                      </Row>
                    </Col>
                    <Col span={1} align="right">
                      {charaValue?.index !== undefined && (
                        <Button
                          type="text"
                          onClick={() => onchangeChara(charaValue.index + 1)}
                          icon={
                            <RightOutlined
                              style={{
                                fontSize: "120px",
                                color: "#fff",
                                backgroundColor: "rgba(128,128,128,.5)",
                              }}
                              block
                            />
                          }
                        ></Button>
                      )}
                    </Col>
                  </Row>
                ) : (
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 32 }} spin />
                    }
                  />
                )}
              </>
            ) : (
              <>
                <Image
                  alt="Shikoshikoback"
                  src={Background}
                  style={{ opacity: 0.25, objectFit: "cover" }}
                  fill
                />
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {charaStand}
                </div>
                <Row
                  justify={"space-between"}
                  style={{
                    position: "relative",
                    bottom: "60vh",
                  }}
                >
                  {charaValue?.index > 0 ? (
                    <Button
                      type="text"
                      onClick={() => onchangeChara(charaValue.index - 1)}
                      icon={
                        <LeftOutlined
                          style={{
                            fontSize: "120px",
                            color: "#fff",
                            backgroundColor: "rgba(128,128,128,.5)",
                          }}
                        />
                      }
                    ></Button>
                  ) : (
                    <div></div>
                  )}

                  {charaValue?.index !== undefined && (
                    <Button
                      type="text"
                      onClick={() => onchangeChara(charaValue.index + 1)}
                      icon={
                        <RightOutlined
                          style={{
                            fontSize: "120px",
                            color: "#fff",
                            backgroundColor: "rgba(128,128,128,.5)",
                          }}
                        />
                      }
                    ></Button>
                  )}
                </Row>
                <div
                  style={{
                    position: "relative",
                    bottom: "340px",
                    backgroundColor: "rgba(255, 255, 255, .8)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      marginLeft: "1rem",
                    }}
                  >
                    《{charaValue?.names}》
                    <div
                      style={{
                        fontSize: "16px",
                        marginLeft: "1rem",
                      }}
                    >
                      ー{charaValue?.name_sub}ー
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "1rem",
                      height: "200px",
                      overflowY: "scroll",
                      zIndex: 194545,
                      marginLeft: "1rem",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {CharaTxt(charaValue?.selected_name) ?? ""}
                  </div>
                  <div style={{ textAlign: "center", margin: "1rem" }}>
                    <Segmented
                      options={charaValue?.options ?? ["1"]}
                      value={value}
                      onChange={setValue}
                      size={"middle"}
                    />
                  </div>
                </div>
              </>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
}
