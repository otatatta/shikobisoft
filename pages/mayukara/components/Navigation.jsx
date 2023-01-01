import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuFoldOutlined, CloseOutlined } from '@ant-design/icons';
import Image from "next/image";
import TitleLogo from "../../static/titlelogo_256.png"


const Navigation = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ textAlign: "right" }}>
        <Button type="primary" onClick={showDrawer} style={{ marginLeft: "auto", zIndex: 1919545 }}>
          {open ? (
            <>
              <CloseOutlined />
              閉じる
            </>
          ) : (
            <>
              <MenuFoldOutlined />
              項目
            </>
          )}
        </Button>
      </div>
      <Drawer title="" placement="right" onClose={onClose} closable={false} open={open} bodyStyle={{ backgroundColor: "rgb(123,213,111)", fontSize: "48px", textAlign: "center" }}>
        <div>
          <Image
            alt="titlelogo"
            src={TitleLogo}
            objectFit="contain"
            layout={"intrinsic"} />
        </div>
        <div style={{ borderTop: "thick double #32a1ce" }}>
          ー御噺ー
        </div>
        <div style={{ borderTop: "thick double #32a1ce" }}>
          ー人物ー
        </div>
        <div style={{ borderTop: "thick double #32a1ce" }}>
          ー画廊ー
        </div>
        <div style={{ borderTop: "thick double #32a1ce" }}>
          ー小噺ー
        </div>
        <div style={{ borderTop: "thick double #32a1ce" }}>
          ー電報ー
        </div>
        <div style={{ borderTop: "thick double #32a1ce" }}>
        </div>
      </Drawer></>
  );
};
export default Navigation;