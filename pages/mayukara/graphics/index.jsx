import { List, Image as AntdImage, Button, Modal, Col } from "antd";
import React, { useMemo, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";
import { imagesData, noimg } from "../../../consts/Images";
import { BREAKPOINT_MOBILE, Z_INDEX } from "../../../consts/layout";
import styles from "./graphics.module.css";

const Graphics = ({ width }) => {
  const data = useMemo(
    () =>
      imagesData
        ?.filter((i) => i?.title !== "Noimg")
        .map((data, index) => ({ modal_index: String(index), ...data })),
    []
  );
  const [open, setOpen] = useState(false);
  const [imgData, setImgData] = useState({
    modal_index: "0",
    title: "cg_0",
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

  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 2,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        itemLayout="vertical"
        dataSource={imagesData}
        renderItem={(item, index) => (
          <>
            <List.Item
              colStyle={{
                paddingLeft: "0px",
                paddingRight: "0px",
                textAlign: "center",
                marginTop: width > BREAKPOINT_MOBILE ? "2rem" : "1rem",
                height: width > BREAKPOINT_MOBILE ? "140px" : "120px",
              }}
              key={`cg_${index}`}
            >
              <Col key={`aaaa_${index}`}>
                <Button
                  type="text"
                  disabled={item.title === "Noimg"}
                  onClick={() => {
                    setOpen(true);
                    setImgData(item);
                  }}
                >
                  <AntdImage
                    width={width > BREAKPOINT_MOBILE ? 200 : 150}
                    height={width > BREAKPOINT_MOBILE ? 120 : 90}
                    src={item.path}
                    alt={`cg_${index}`}
                    placeholder={<p>place</p>}
                    preview={false}
                  />
                </Button>
              </Col>
            </List.Item>
          </>
        )}
      />
      <Modal
        centered
        confirmLoading
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => {
          setOpen(false);
          setCgNo("1");
        }}
        bodyStyle={{ height: `${height * 0.9625}px` }}
        width={1000}
        footer={<></>}
        closeIcon={
          <CloseOutlined
            className={styles.closeIcon}
          />
        }
      >
        <div
          className={styles.modalContent}
          style={{ zIndex: Z_INDEX.MODAL_OVERLAY }}
          id="test"
          ref={ref}
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
          {width > BREAKPOINT_MOBILE && (
            <>
              <Button
                type="text"
                className={styles.navButtonLeft}
                onClick={() => onchangeBeforeCG()}
              >
                <LeftOutlined
                  className={styles.navIcon}
                />
              </Button>
              <Button
                type="text"
                className={styles.navButtonRight}
                onClick={() => onchangeNextCG()}
              >
                <RightOutlined
                  className={styles.navIcon}
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
