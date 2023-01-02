import React from 'react';
import { BackTop } from 'antd';
import Image from "next/image";
import Chiyo from "../../static/toTOP.png"
const BackTopButton = () => (
    <div
        style={{
            textAlign: "right"
        }}
    >
        <BackTop visibilityHeight={0} style={{ width: "80px", height: "80px" }}>
            <Image
                alt="Shikoshiko"
                src={Chiyo}
                objectFit="contain"
                layout={"intrinsic"} />
        </BackTop >
    </div>
);
export default BackTopButton;