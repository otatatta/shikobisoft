import OtherHeader from "../components/OtherHeader"
import Footer from "../../component/Footer"
import { Col, Row, Modal, Segmented } from 'antd';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Background from "../../static/hp1_bg.png"
import { pcList1 } from "./charaInfos"


export default function MayuChara() {
    const [mamoruOpen, setMamoruOpen] = useState(false);
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    }
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const { width, height } = getWindowDimensions();

        setWidth(width);
        setHeight(height);
    }, []);
    useEffect(() => {
        function handleResize() {
            const { width, height } = getWindowDimensions();
            setWidth(width)
            setHeight(height)
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const [charaValue, setCharaValue] = useState();

    const onClickButton = (val) => {
        setCharaValue({
            names: val.names,
            selected_name: val.selected_name,
            txt: val.txt,
            icon: val.icon,
            stand_1: val.stand_1,
            stand_2: val.stand_2,
            options: val.options,
        })
        setMamoruOpen(true)
        setValue("1")
    }

    const [value, setValue] = useState('1');

    console.log(width, height)
    console.log(pcList1)

    return (
        <>
            <OtherHeader />
            <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                <div>
                    <p>キャラクター紹介</p>
                </div>
                <div style={{ padding: "1rem" }}>
                    <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }} align="middle"
                    >
                        {pcList1?.map((list, index) =>
                        (
                            <Col span={3} key={`aaaa_${index}`}>
                                <button type="primary" onClick={() => onClickButton(list)}>
                                    {list?.icon}
                                </button>
                                <div>
                                    {list?.names}
                                </div>
                            </Col>)
                        )}
                    </Row>
                    <Modal
                        centered
                        visible={mamoruOpen}
                        onCancel={() => {
                            setMamoruOpen(false)
                            setCharaValue(undefined)
                            setValue("1")
                        }}
                        width={"90%"}
                        bodyStyle={{ height: `${height * 0.9}px` }}
                        cancelText="閉じる"
                        zIndex={14545}
                        footer={<></>}
                    >
                        <Image
                            alt="Shikoshikoback"
                            src={Background}
                            style={{ opacity: 0.33 }}
                            layout={`fill`}
                            objectFit={`cover`} />

                        <Row
                            gutter={{ xs: 8, sm: 16, md: 24, }} align="middle"
                        >
                            <Col span={8} >
                                <div>
                                    {value === "1" && (
                                        <Image
                                            src={charaValue?.stand_1}
                                            style={{ display: "inline-block" }}
                                            alt="Image" />
                                    )}
                                    {value === "2" && (
                                        <Image
                                            src={charaValue?.stand_2}
                                            style={{ display: "inline-block" }}
                                            alt="Image" />
                                    )}
                                </div>
                            </Col>
                            <Col span={16} align="bottom">
                                <Segmented options={charaValue?.options ?? ["1"]} value={value} onChange={setValue} size={"middle"} />
                                <div>
                                    <p style={{
                                        fontSize: "32px"
                                    }}>
                                        {charaValue?.names}
                                    </p>
                                    {charaValue?.txt && (
                                        <div style={{ zIndex: 194545, color: "black" }}>
                                            {charaValue.txt}
                                        </div>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Modal>
                </div>
                <Footer />
            </div>
        </>
    );
}