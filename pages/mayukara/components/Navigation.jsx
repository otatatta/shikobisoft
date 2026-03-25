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
import { Link as Scroll } from 'react-scroll';
import { Z_INDEX } from "../../../consts/layout";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(!open);
  };

  const menuList = (src) => (
    <Image
      alt="titlelogo"
      src={src}
      className={styles.menuImage}
      layout={"intrinsic"}
    />)

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.navWrapper}>
        {open ? (
          <Button type="text" onClick={showDrawer} style={{ zIndex: Z_INDEX.NAV_BUTTON }}>
            <Space className={styles.closeButtonContent}>
              <CloseOutlined />
              閉じる
            </Space>
          </Button>
        ) : (
          <>
            <Button shape="round" onClick={showDrawer} className={styles.menuButton} style={{ zIndex: Z_INDEX.NAV_BUTTON }}>
              <Space className={styles.menuButtonContent}>
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
              className={styles.menuImage}
            />
          </Scroll>
        </div>
        <div className={styles.divider} />
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