import React from 'react';
import { Tooltip } from 'antd';
import Image from "next/image";
import tori from "../../static/alpha_dl.png"

const DlFloatButtons = () => (
    <div>
        <Tooltip placement="bottomLeft" >
            <a href="https://uuy.mydns.jp/4545soft/karankoe.html" style={{ display: "block", width: "400px" }}>
                <Image
                    alt="titlelogo"
                    src={tori}
                    style={{ display: "block", width: "500px" }}
                />
            </a>
        </Tooltip>
    </div >
);
export default DlFloatButtons;