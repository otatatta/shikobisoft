import React from 'react';
import { Tooltip } from 'antd';
import Image from "next/image";
import tori from "../../static/alpha_dl.png"
import styles from "./DlButton.module.css";

const DlFloatButtons = () => (
    <div>
        <Tooltip placement="bottomLeft" >
            <a href="https://4545software.booth.pm/items/5716028" className={styles.link}>
                <Image
                    alt="titlelogo"
                    src={tori}
                    className={styles.image}
                />
            </a>
        </Tooltip>
    </div >
);
export default DlFloatButtons;