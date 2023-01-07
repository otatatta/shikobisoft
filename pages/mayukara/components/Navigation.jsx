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
import { Link as Scroll } from 'react-scroll';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(!open);
  };

  const menuList = (src) => (
    <Image
      alt="titlelogo"
      src={src}
      style={{ objectFit: "contain" }}
      layout={"intrinsic"}
    />)

  // const scrollWindow = (elem) => {
  //     const element = document.getElementById(elem);
  //     const rect = element.getBoundingClientRect();
  //     const elemtop = rect.top + window.pageYOffset;
  //     document.documentElement.scrollTop = elemtop;
  //     setOpen(false);
  // }

  const onClose = () => {
    setOpen(false);
  };

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
          <Scroll to="top" smooth={true} duration={600} onClick={onClose} saveHashHistory>
            <Image
              alt="titlelogo"
              src={TitleLogo}
              style={{ objectFit: "contain" }}
            />
          </Scroll>
        </div>
        <div style={{ borderTop: "thick double #fff", color: "#fff" }} />
        <Scroll to="story" smooth={true} duration={600} onClick={onClose} saveHashHistory>
          {menuList(story)}
        </Scroll>
        <Scroll to="character" smooth={true} duration={600} onClick={onClose} saveHashHistory>
          {menuList(jinbutsu)}
        </Scroll>
        <Scroll to="illust" smooth={true} duration={600} onClick={onClose} saveHashHistory>
          {menuList(garou)}
        </Scroll>
        <Scroll to="novel" smooth={true} duration={600} onClick={onClose} saveHashHistory>
          {menuList(kobanashi)}
        </Scroll>
        <Scroll to="update" smooth={true} duration={600} onClick={onClose} saveHashHistory>
          {menuList(denpou)}
        </Scroll>
      </Drawer></>
  );
};
export default Navigation;