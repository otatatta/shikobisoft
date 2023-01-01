import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import Image from "next/image";
import TitleLogo from "../../static/titlelogo_256.png"


const Navigation = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!open && (
        <div style={{ textAlign: "right" }}>
          <Button type="primary" onClick={showDrawer} style={{ marginLeft: "auto", zIndex: 1919545 }}>
            <MenuFoldOutlined />
            MENU
          </Button>
        </div>
      )}
      <Drawer title="" placement="right" onClose={onClose} open={open}>
        <div>
          <Image
            alt="titlelogo"
            src={TitleLogo}
            objectFit="contain"
            layout={"intrinsic"} />

        </div>
      </Drawer></>
  );
};
export default Navigation;