import OtherHeader from "../components/OtherHeader"
import Footer from "../../component/Footer"
import { Col, Row, Modal, Segmented } from 'antd';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Background from "../../static/hp1_bg.png"
import mamoru1 from "../../static/stands/HP1mmr.png"
import mamoru2 from "../../static/stands/HP1mmr2.png"
import iconMamoru from "../../static/icons/iconmmr.png"
import iconChiyo from "../../static/icons/icon2ty.png"
import iconSaika from "../../static/icons/icon3sik.png"
import iconJuri from "../../static/icons/icon4jr.png"
import iconTsuyuri from "../../static/icons/icon5tyr.png"
import chiyo1 from "../../static/stands/HP2cy.png"
import saika1 from "../../static/stands/HP3sik.png"
import juri1 from "../../static/stands/HP4jr.png"
import juri2 from "../../static/stands/HP4jr2.png"
import tsuyuri1 from "../../static/stands/HP5tyr.png"
import tsuyuri2 from "../../static/stands/HP5tyr2.png"
import CharaTxt from "./txts";

const mamoru = {
    names: "犬無 守琉",
    selected_name: "Mamoru",
    icon: iconMamoru,
    stand_1: mamoru1,
    stand_2: mamoru2,
    options: ['1', "2"]
}

const chiyo = {
    names: "砂羽村 千代",
    selected_name: "Chiyo",
    icon: iconChiyo,
    stand_1: chiyo1,
    options: ['1']
}
const saika = {
    names: "砂羽村 才花",
    selected_name: "Saika",
    icon: iconSaika,
    stand_1: saika1,
    options: ['1']
}

const juri = {
    names: "砂羽村 樹里",
    selected_name: "Juri",
    icon: iconJuri,
    stand_1: juri1,
    stand_2: juri2,
    options: ['1', "2"]
}

const tsuyuri = {
    names: "白草 栗花落",
    selected_name: "Tsuyuri",
    icon: iconTsuyuri,
    stand_1: tsuyuri1,
    stand_2: tsuyuri2,
    options: ['1', "2"]
}
const pcList1 = [mamoru, chiyo, saika, juri, tsuyuri]


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
                    {width > 768 ? (
                        <Row
                            gutter={16} align="middle"
                        >
                            {pcList1?.map((list, index) =>
                            (
                                <div style={{ width: "20%", textAlign: "center" }} key={`aaaa_${index}`}>
                                    <button type="primary" onClick={() => onClickButton(list)}>
                                        <Image
                                            src={list?.icon}
                                            alt="Image"
                                            width={150}
                                            height={150} />,
                                    </button>
                                    <div>
                                        {list?.names}
                                    </div>
                                </div>)
                            )}
                        </Row>
                    ) : (
                        <Row
                            gutter={{
                                xs: 8,
                                sm: 16
                            }} align="middle"
                        >
                            {pcList1?.map((list, index) =>
                            (
                                <Col span={8} key={`aaaa_${index}`}>
                                    <button type="primary" onClick={() => onClickButton(list)}>
                                        <Image
                                            src={list?.icon}
                                            alt="Image"
                                            width={100}
                                            height={100} />,
                                    </button>
                                    <div>
                                        {list?.names}
                                    </div>
                                </Col>)
                            )}
                        </Row>
                    )}
                    <Modal
                        centered
                        visible={mamoruOpen}
                        onCancel={() => {
                            setMamoruOpen(false)
                            setCharaValue(undefined)
                            setValue("1")
                        }}
                        width={"95%"}
                        bodyStyle={{ height: `${height}px` }}
                        cancelText="閉じる"
                        zIndex={14545}
                        footer={<></>}
                    >
                        {width > 768 ? (
                            <><Image
                                alt="Shikoshikoback"
                                src={Background}
                                style={{ opacity: 0.33 }}
                                layout={`fill`}
                                objectFit={`cover`} />
                                <Row
                                    gutter={{ xs: 8, sm: 16, md: 24, }} align="middle"
                                >
                                    <Col span={8}>
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
                                                    {CharaTxt(charaValue?.selected_name) ?? ""}
                                                </div>
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                            </>) : (
                            <>
                                <Image
                                    alt="Shikoshikoback"
                                    src={Background}
                                    style={{ opacity: 0.33 }}
                                    layout={`fill`}
                                    objectFit={`cover`} />
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
                                <div style={{
                                    position: "relative", bottom: "280px", backgroundColor: "rgba(255, 255, 255, .6)"
                                }}>
                                    <div style={{
                                        fontSize: "32px", marginLeft: "1rem"
                                    }}>
                                        {charaValue?.names}
                                    </div>
                                    <div style={{
                                        height: "200px",
                                        overflowY: "scroll",
                                        zIndex: 194545,
                                        marginLeft: "1rem"
                                    }}>
                                        {CharaTxt(charaValue?.selected_name) ?? ""}
                                    </div>
                                    <Segmented options={charaValue?.options ?? ["1"]} value={value} onChange={setValue} size={"middle"} />
                                </div>

                            </>
                        )}
                    </Modal>
                </div>
                <Footer />
            </div>
        </>
    );
}