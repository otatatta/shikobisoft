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
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/3315faa9252d45b585a7e7c33f9db29b/sample01a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/e701f811f9284b2badfe32ce817286e8/sample01b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/00d8a637f99e45ba856b39bec521cfa8/sample01c.png",
  },
  {
    modal_index: "1",
    title: "cg_2",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/955991f25c094de0a70cc0978241b563/sample02a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/bf16e1e6455148068ebac5070970ac46/sample02b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/8be2e894f5794e2d95c450e4a99de554/sample02c.png",
  },
  {
    modal_index: "2",
    title: "cg_3",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/7e685f583d4e4e3fbbb5d80659e8c46f/sample03a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/d94647c2ea364dd589a7104f7cd89335/sample03b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/e30705d7b62240319a586c9a67b6cc1f/sample03c.png",
  },
  {
    modal_index: "3",
    title: "cg_4",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/104fbeea545b462884b18d48ef1d505f/sample04a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/91c59a3e46be4b43927646471283ff3a/sample04b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/02f664984b5d4694b73e96c5f6d35c93/sample04c.png",
  },
  {
    modal_index: "4",
    title: "cg_5",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/bfa2b5462f7e4046a08cd92a6334152e/sample05a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/17c3add082c4428c993e7969f7a8c28d/sample05b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/923905668b3c4e60b9fb90f373519772/sample05c.png",
  },
  {
    title: "Noimg",
    path: noimg,
    path2: noimg,
    path3: noimg,
  },
  {
    modal_index: "5",
    title: "cg_7",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/9cac9dbd73ef44d7ac672d3360fb1512/sample07a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/1f57743ddf404108b658f1aedf46b531/sample07b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/5bfa562383d04ee4a5ddc56ed221012e/sample07c.png",
  },
  {
    title: "Noimg",
    path: noimg,
    path2: noimg,
    path3: noimg,
  },
  {
    modal_index: "6",
    title: "cg_9",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/dc9b4c4d03324345a226a45bf69e71fb/sample09a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/5c8e134163a1427ab60df2bab8a140e9/sample09b.png",
    path3: noimg,
  },
  {
    modal_index: "7",
    title: "cg_10",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/485520c82a5a4ab79a3d57b4bb67eae5/sample10a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/910c3907dd7f4f98aadfc757ff4d3aaa/sample10b.png",
    path3:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/60f98b4cbac74cd1836dc3364e4ccb74/sample10c.png",
  },
  {
    title: "Noimg",
    path: noimg,
    path2: noimg,
    path3: noimg,
  },
  {
    modal_index: "8",
    title: "cg_12",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/63212a3cf1d74682ac82ca0980dd05d6/sample12a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/3e009196c7d845eca3789a18da05ae4f/sample12b.png",
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
      if (imgData?.path2 !== noimg) {
        return imgData.path2;
      }
    } else if (cgNo === "3") {
      if (imgData?.path3 !== noimg) {
        return imgData.path3;
      }
    }
    return imgData?.path;
  }, [cgNo, imgData?.path, imgData?.path2, imgData?.path3]);

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
    if (imgData?.modal_index === "0") {
      setImgData(data[data?.length - 1]);
      return;
    }
    setImgData(data[Number(imgData.modal_index) - 1]);
  };
  const onchangeNextCG = () => {
    setCgNo("1");
    if (imgData?.modal_index === `${data?.length - 1}`) {
      setImgData(data[0]);
      return;
    }
    setImgData(data[Number(imgData?.modal_index) + 1]);
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
