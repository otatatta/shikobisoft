import React from 'react';
import { Tooltip, Button } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
const FloatButtons = () => (
    <div>
        <Tooltip placement="bottomLeft" title={"Tiwwter"}>
            <a href="https://twitter.com/intent/tweet?text=しこしこソフト%0d『繭イのカランコエ』公式ページです%0dhttps://shikobisoft.vercel.app/mayukara/">
                <Button type="primary" shape="circle" icon={<TwitterOutlined />} />
            </a>
        </Tooltip>
    </div >
);
export default FloatButtons;