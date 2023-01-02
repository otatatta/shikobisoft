import React from 'react';
import { Tooltip, Button } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
const FloatButtons = () => (
    <div>
        <Tooltip placement="bottomLeft" title={"Tiwwter"}>
            <a href="https://twitter.com/intent/tweet?text=しこしこソフト%0d繭ィのカランコエ公式ページです%0dhttps://shikobisoft.vercel.app/mayukara/">
                <Button type="primary" shape="circle" icon={<TwitterOutlined />} />
            </a>
        </Tooltip>
        {/* <span style={{ margin: "10px" }}></span> */}
        {/* <Tooltip placement="bottom" title={"instagram"}>
            <Button type="primary" shape="circle" icon={<InstagramOutlined />} />
        </Tooltip>
        <span style={{ margin: "10px" }}></span> */}
        {/* <Tooltip placement="bottom" title={"LINE"}>
            <Button type="primary" shape="circle">
                LINE
            </Button>
        </Tooltip> */}
    </div >
);
export default FloatButtons;