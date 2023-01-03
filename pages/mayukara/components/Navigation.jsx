import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { MenuFoldOutlined, CloseOutlined } from '@ant-design/icons';
import Image from "next/image";
import TitleLogo from "../../static/titlelogo_256.png"
import denpou from "../../static/name_denpou.png"
import garou from "../../static/name_garou.png"
import jinbutsu from "../../static/name_jinbutsu.png"
import kobanashi from "../../static/name_kobanashi.png"
import story from "../../static/name_story.png"
import Link from "next/link";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };

  // const borderstyle = {
  //   borderImage: "url('/media/examples/border-florid.svg') round",
  //   borderImageSlice: "calc(50 / 184 * 100 %) calc(80 / 284 * 100 %) fill",
  //   borderImageWidth: "30px 48px"
  // }

  return (
    <>
      <div style={{ textAlign: "right" }}>
        {open ? (
          <Button type="text" onClick={showDrawer} style={{ zIndex: 1919545 }}>
            <Space style={{ color: "#fff", fontSize: "18px" }}>
              <CloseOutlined />
              閉じる
            </Space>
          </Button>
        ) : (
          <>
            <Button shape="round" onClick={showDrawer} style={{ zIndex: 1919545, backgroundColor: "rgb(86,88,84)", height: "40px" }}>
              <Space style={{ color: "#fff", fontSize: "18px", margin: "1rem", marginTop: "0px" }}>
                <MenuFoldOutlined />
                <span>
                  項目
                </span>
              </Space>
            </Button>
          </>
        )}
      </div>
      <Drawer title="" placement="right" onClose={onClose} closable={false} open={open} bodyStyle={{ backgroundColor: "rgb(143,128,44)", fontSize: "48px", textAlign: "center" }}>
        <div>
          <Link href="/mayukara#top" onClick={onClose}>
            <Image
              alt="titlelogo"
              src={TitleLogo}
              objectFit="contain"
              layout={"intrinsic"} />
          </Link>
        </div>
        <Link href="./mayukara#story" onClick={onClose}>
          <div style={{ borderTop: "thick double #fff", color: "#fff" }}>
            <Image
              alt="titlelogo"
              src={story}
              objectFit="contain"
              layout={"intrinsic"} />
          </div>
        </Link>
        <div style={{ borderTop: "thick double #fff", color: "#fff" }} />
        <Link href="./mayukara#character" onClick={onClose}>
          {/* <div style={{ borderTop: "thick double #fff", color: "#fff" }}>
            ー人物ー
          </div> */}
          <Image
            alt="titlelogo"
            src={jinbutsu}
            objectFit="contain"
            layout={"intrinsic"} />
        </Link>
        <div style={{ borderTop: "thick double #fff", color: "#fff" }} />
        <Link href="./mayukara#illust" onClick={onClose} >
          {/* <div style={{ borderTop: "thick double #fff", color: "#fff" }}>
            ー画廊ー
          </div> */}
          <Image
            alt="titlelogo"
            src={garou}
            objectFit="contain"
            layout={"intrinsic"} />
        </Link>
        <div style={{ borderTop: "thick double #fff", color: "#fff" }} />
        <Link href="./mayukara#novel" onClick={onClose} >
          {/* <div style={{ borderTop: "thick double #fff", color: "#fff" }}>
            ー小噺ー
          </div> */}
          <Image
            alt="titlelogo"
            src={kobanashi}
            objectFit="contain"
            layout={"intrinsic"} />
        </Link>
        <div style={{ borderTop: "thick double #fff", color: "#fff" }} />
        <Link href="./mayukara#update" onClick={onClose} >
          {/* <div style={{ borderTop: "thick double #fff", color: "#fff" }}>
            ー電報ー
          </div> */}
          <Image
            alt="titlelogo"
            src={denpou}
            objectFit="contain"
            layout={"intrinsic"} />
        </Link>
        <div style={{ borderTop: "thick double #fff", color: "#fff" }} />
      </Drawer></>
  );
};
export default Navigation;