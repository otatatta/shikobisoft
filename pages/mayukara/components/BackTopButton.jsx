import React from 'react';
import { BackTop } from 'antd';
import Image from "next/image";
import Chiyo from "../../static/toTOP.png"
import styles from "./BackTopButton.module.css";
const BackTopButton = () => (
    <div className={styles.wrapper}>
        <BackTop visibilityHeight={0} className={styles.backTop}>
            <Image
                alt="Shikoshiko"
                src={Chiyo}
                objectFit="contain"
                layout={"intrinsic"} />
        </BackTop >
    </div>
);
export default BackTopButton;