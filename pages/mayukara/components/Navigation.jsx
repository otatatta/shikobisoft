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
  const menuList = (src) => (
    // <div style={{ borderTop: "thick double #fff", color: "#fff" }} >
    <Image
      alt="titlelogo"
      src={src}
      style={{ objectFit: "contain" }}
      layout={"intrinsic"}
    />
    // </div >
  )

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
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        <div style={{ borderTop: "thick double #fff", color: "#fff" }} />
        <Link href="./mayukara#story" onClick={onClose}>
          {menuList(story)}
        </Link>
        <Link href="./mayukara#character" onClick={onClose}>
          {menuList(jinbutsu)}
          {/* <Image
            alt="titlelogo"
            src={jinbutsu}
            objectFit="contain"
            layout={"intrinsic"} /> */}
        </Link>
        <Link href="./mayukara#illust" onClick={onClose} >
          {menuList(garou)}
        </Link>
        <Link href="./mayukara#novel" onClick={onClose} >
          {menuList(kobanashi)}
        </Link>
        <Link href="./mayukara#update" onClick={onClose} >
          {menuList(denpou)}
        </Link>
      </Drawer></>
  );
};
export default Navigation;