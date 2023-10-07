import { List, Image as AntdImage, Button, Modal, Row, Col } from "antd";
import React, { useMemo, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";
// import NoImage from "../../static/mayuimage.jpg";
const noimg =
  "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/0283dcaf2e624790ae5274ed6d351c56/mayuimage.jpg?w=300";

const imageData = [
  {
    modal_index: "0",
    title: "cg_1",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/ff5671d6171049b28ac72cd61d3b8557/sample01a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/0576b995807a45c4b1ba834c4bafb9c3/sample01b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/2751b6c6a90a4f218044a91ed7c05fd9/sample01c.png",
  },
  {
    modal_index: "1",
    title: "cg_2",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/e31054fede2c4f319e42e7e692599738/sample02a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/a2f26c1de17a40b39b5534c1d4e509ab/sample02b.png",
    path3: noimg,
  },
  {
    modal_index: "2",
    title: "cg_3",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/3958dd47eb2a4d5b898ab227c16da9f6/sample03a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/eadb3530556b4f0097e96e937747e9a8/sample03b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/2b18958538f0461cb8bdcb1659602615/sample03c.png",
  },
  {
    modal_index: "3",
    title: "cg_4",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/8d177000b33044e1a8d12eed8a2864de/sample04a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/139a38353bf344ddb2fa6b6020f3bcff/sample04b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/2de210e624904dd182babe5b4f78a739/sample04c.png",
  },
  {
    title: "Noimg",
    path: noimg,
    path2: noimg,
    path3: noimg,
  },
  {
    modal_index: "4",
    title: "cg_6",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/ef30e7ab71b947179aa365ae187a0025/sample06.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/c7ede46debe64201b1e2835458bf239a/sample06b.png",
    path3: noimg,
  },
  {
    modal_index: "5",
    title: "cg_7",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/51a5a60205bf4d90870fdc81116c075e/sample07a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/4915e7e008ba465ca1c65390231ae9b0/sample07b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/db25a6f4cfa44f2988dfc43783c28c96/sample07c.png",
  },
  {
    title: "Noimg",
    path: noimg,
    path2: noimg,
    path3: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
    path2: noimg,
    path3: noimg,
  },
  {
    modal_index: "6",
    title: "cg_10",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/170b19a30dc049d2824bcc039d1c0c5b/sample10a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/8ebdb5ea5bc94fefbfcad699ffd39425/sample10b.png",
    path3: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
    path2: noimg,
    path3: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
    path2: noimg,
    path3: noimg,
  },
];

const Graphics = ({ width }) => {
  const data = useMemo(() => imageData?.filter((i) => i?.modal_index), []);
  const [open, setOpen] = useState(false);
  const [imgData, setImgData] = useState({
    modal_index: "0",
    title: "cg_1",
    path: noimg,
    path2: noimg,
    path3: noimg,
  });
  const height = useMemo(() => {
    if (width >= 1032) {
      return 562.5;
    }
    if (768 < width < 1032) {
      return (((width - 32) * 9) / 16) * 0.9628;
    }
    return (((width - 32) * 9) / 16) * 0.95;
  }, [width]);

  const [cgNo, setCgNo] = useState("1");
  const ref = useRef(null);
  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {};

  const showImg = useMemo(() => {
    if (cgNo === "2") {
      if (imgData.path2 !== noimg) {
        return imgData.path2;
      }
    } else if (cgNo === "3") {
      if (imgData?.path3 !== noimg) {
        return imgData.path3;
      }
    }
    return imgData.path;
  }, [cgNo, imgData.path, imgData.path2, imgData.path3]);

  const onClickCg = useCallback(() => {
    if (cgNo === "3") {
      setCgNo("1");
    } else if (cgNo === "2" && imgData?.path3 !== noimg) {
      setCgNo("3");
    } else if (cgNo === "1" && imgData?.path2 !== noimg) {
      setCgNo("2");
    } else {
      setCgNo("1");
    }
  }, [cgNo, imgData?.path2, imgData?.path3]);

  const onchangeBeforeCG = () => {
    setCgNo("1");
    if (imgData.modal_index === "0") {
      setImgData(data[data?.length - 1]);
      return;
    }
    setImgData(data[Number(imgData.modal_index) - 1]);
  };
  const onchangeNextCG = () => {
    setCgNo("1");
    if (imgData.modal_index === `${data?.length - 1}`) {
      setImgData(data[0]);
      return;
    }
    setImgData(data[Number(imgData.modal_index) + 1]);
  };

  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const flickStart = (e) => {
    setStartX(e.touches[0].pageX);
  };

  const flicking = (e) => {
    setEndX(e.touches[0].pageX);
  };

  const flickEnd = (e) => {
    // if (50 < endX || endX < -50) {
    //   if (-50 < startX - endX < 50) {
    //   } else {
    //     onchangeCG();
    //   }
    // }
    // setStartX(0);
    // setEndX(0);
  };

  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        itemLayout="vertical"
        dataSource={imageData}
        renderItem={(item, index) => (
          <>
            <List.Item
              colStyle={{
                textAlign: "center",
                marginTop: "2rem",
                height: "140px",
              }}
              key={`cg_${index}`}
            >
              <Col key={`aaaa_${index}`}>
                {item.title !== "Noimg" ? (
                  <Button
                    type="text"
                    onClick={() => {
                      setOpen(true);
                      setImgData(item);
                    }}
                  >
                    <AntdImage
                      width={200}
                      height={120}
                      src={item.path}
                      alt={`cg_${index}`}
                      placeholder={<p>place</p>}
                      preview={false}
                    />
                  </Button>
                ) : (
                  <AntdImage
                    width={200}
                    height={120}
                    src={item.path}
                    preview={item.title !== "Noimg"}
                    alt={"noIMG"}
                  />
                )}
              </Col>
            </List.Item>
          </>
        )}
      />
      <Modal
        centered
        confirmLoading
        open={open}
        onOk={() => setModal1Open(false)}
        onCancel={() => {
          setOpen(false);
          setCgNo("1");
        }}
        bodyStyle={{ height: `${height * 0.9625}px` }}
        width={1000}
        footer={<></>}
        closeIcon={
          <CloseOutlined
            style={{
              fontSize: "64px",
              paddingTop: "8px",
              color: "#fff",
              position: "relative",
              top: "-80px",
              right: "10px",
            }}
          />
        }
      >
        <div
          style={{ zIndex: "999999", height: "100%" }}
          id="test"
          ref={ref}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          onTouchStart={(e) => flickStart(e)}
          onTouchMove={(e) => flicking(e)}
          onTouchEnd={(e) => flickEnd(e)}
        >
          {showImg && (
            <Image
              alt="Shikoshikoback"
              src={showImg}
              sizes="(max-width: 1000px) 100vh"
              fill
              onClick={onClickCg}
            />
          )}
          {width > 768 && (
            <>
              <Button
                type="text"
                style={{
                  width: "40px",
                  height: "120px",
                  position: "relative",
                  top: "40%",
                  left: "-15%",
                }}
                onClick={() => onchangeBeforeCG()}
              >
                <LeftOutlined
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    position: "relative",
                  }}
                />
              </Button>
              <Button
                type="text"
                style={{
                  width: "40px",
                  height: "120px",
                  position: "relative",
                  left: "100%",
                  top: "40%",
                }}
                onClick={() => onchangeNextCG()}
              >
                <RightOutlined
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    position: "relative",
                  }}
                />
              </Button>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};
export default Graphics;
