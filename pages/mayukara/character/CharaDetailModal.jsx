import { Col, Row, Modal, Segmented, Button, Spin } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Background from "../../static/hp1_bg.png";
import CharaTxt from "./txts";
import CharaTxtImg from "./txtsImg";

export default function CharaDetailModal({
  isMobile,
  charaStand,
  charatxt,
  charaValue,
  value,
  setValue,
  open,
  onCancel,
  onchangeChara,
}) {
  return (
    <Modal
      centered
      closeIcon={
        !isMobile ? (
          <></>
        ) : (
          <CloseOutlined
            style={{
              fontSize: "48px",
              padding: "4px",
            }}
          />
        )
      }
      open={open}
      onCancel={onCancel}
      style={{
        overflowX: "scroll",
        position: "relative",
      }}
      width={!isMobile ? "1720px" : "95%"}
      bodyStyle={{ height: !isMobile ? `880px` : `820px` }}
      cancelText="閉じる"
      zIndex={194545}
      footer={<></>}
    >
      {!isMobile ? (
        <>
          {charaStand ? (
            <>
              <Row
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "-40px",
                  width: "1720px",
                  height: "980px",
                  backgroundColor: "#fff",
                }}
              >
                <Image
                  alt="Shikoshikoback"
                  src={Background}
                  style={{
                    width: "1720px",
                    height: "980px",
                    opacity: 0.25,
                  }}
                />
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24 }}
                align="middle"
                style={{
                  fontFamily: "Hannari",
                  position: "absolute",
                  width: "1680px",
                  height: "860px",
                  top: "35px",
                  zIndex: "198585",
                }}
                fill
              >
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
                  ></Row>
                </Col>
              </Row>
              {charaValue?.index > 0 && (
                <Button
                  type="text"
                  onClick={() => onchangeChara(charaValue.index - 1)}
                  style={{
                    position: "fixed",
                    left: "30px",
                    top: "45%",
                    zIndex: "198585",
                  }}
                  icon={
                    <LeftOutlined
                      style={{
                        fontSize: "120px",
                        color: "#fff",
                        backgroundColor: "rgba(168,178,178,.6)",
                      }}
                      block
                    />
                  }
                ></Button>
              )}
              {charaValue?.index !== undefined && (
                <Button
                  type="text"
                  onClick={() => onchangeChara(charaValue.index + 1)}
                  style={{
                    position: "fixed",
                    right: "40px",
                    top: "45%",
                    zIndex: "198585",
                  }}
                  icon={
                    <RightOutlined
                      style={{
                        fontSize: "120px",
                        color: "#fff",
                        backgroundColor: "rgba(168,178,178,.6)",
                      }}
                      block
                    />
                  }
                ></Button>
              )}
              <Button
                style={{
                  position: "absolute",
                  right: "5%",
                  top: "85%",
                  zIndex: "198585",
                }}
                onClick={onCancel}
              >
                閉じる
              </Button>
            </>
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
              bottom: "70vh",
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
  );
}
