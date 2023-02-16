import { List, Image as AntdImage, Button, Modal, Row, Col } from "antd";
import React, { useMemo, useState, useRef } from "react";
import Image from "next/image";
import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";
// import NoImage from "../../static/mayuimage.jpg";
const noimg =
  "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/0283dcaf2e624790ae5274ed6d351c56/mayuimage.jpg?w=300";

const data = [
  {
    modal_index: "0",
    title: "cg_1",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/ff5671d6171049b28ac72cd61d3b8557/sample01a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/0576b995807a45c4b1ba834c4bafb9c3/sample01b.png",
  },
  {
    modal_index: "1",
    title: "Noimg",
    path: noimg,
  },
  {
    modal_index: "2",
    title: "cg_3",
    path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/3958dd47eb2a4d5b898ab227c16da9f6/sample03a.png",
    path2:
      "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/eadb3530556b4f0097e96e937747e9a8/sample03b.png",
  },
  {
    title: "Noimg",
    path: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
  },
  {
    title: "Noimg",
    path: noimg,
  },
];

const Graphics = ({ width }) => {
  const [open, setOpen] = useState(false);
  const [imgData, setImgData] = useState({
    modal_index: "1",
    title: "cg_1",
    path: noimg,
    path2: noimg,
  });
  const height = useMemo(() => {
    if (width >= 1032) {
      return 562.5;
    }
    if (768 < width < 1032) {
      return ((width - 32) * 9) / 16;
    }
    return ((width - 16) * 9) / 16;
  }, [width]);

  const [isHover, setIsHover] = useState(false);
  const ref = useRef(null);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const showImg = useMemo(() => {
    if (isHover && imgData.path2) {
      return imgData.path2;
    }
    return imgData.path;
  }, [imgData.path, imgData.path2, isHover]);

  const onchangeCG = () => {
    if (imgData.modal_index === "0") {
      setImgData(data[2]);
    }
    if (imgData.modal_index === "2") {
      setImgData(data[0]);
    }
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
        dataSource={data}
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
        onCancel={() => setOpen(false)}
        bodyStyle={{ height: `${height}px` }}
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
          onClick={() => setIsHover(!isHover)}
          onTouchStart={(e) => flickStart(e)}
          onTouchMove={(e) => flicking(e)}
          onTouchEnd={(e) => flickEnd(e)}
        >
          {showImg && (
            <Image
              alt="Shikoshikoback"
              src={showImg}
              sizes="(max-width: 1000px) 100vw"
              fill
            />
          )}
          {width > 768 && (
            <Row
              justify="space-around"
              align="middle"
              style={{ height: "100%" }}
            >
              <Col flex={1} align="">
                <Button
                  type="text"
                  style={{ width: "40px", height: "120px" }}
                  onClick={() => onchangeCG()}
                >
                  <LeftOutlined
                    style={{
                      fontSize: "70px",
                      color: "#fff",
                      position: "relative",
                      left: "-40px",
                    }}
                  />
                </Button>
              </Col>
              <Col flex={1} style={{ textAlign: "right" }}>
                <Button
                  type="text"
                  style={{ width: "40px", height: "120px" }}
                  onClick={() => onchangeCG()}
                >
                  <RightOutlined
                    style={{
                      fontSize: "70px",
                      color: "#fff",
                      position: "relative",
                      left: "-30px",
                    }}
                  />
                </Button>
              </Col>
            </Row>
          )}
        </div>
      </Modal>
    </>
  );
};
export default Graphics;
