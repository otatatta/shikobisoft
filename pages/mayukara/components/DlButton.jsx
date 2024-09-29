import React from 'react';
import { Tooltip } from 'antd';
import Image from "next/image";
import tori from "../../static/alpha_dl.png"

const DlFloatButtons = () => (
    <div>
        <Tooltip placement="bottomLeft" >
            <a href="https://4545software.booth.pm/items/5716028" style={{ display: "block", width: "400px" }}>
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