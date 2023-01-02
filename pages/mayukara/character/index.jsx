import { Col, Row, Modal, Segmented, Button } from 'antd';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';
import Image from 'next/image'
import Background from "../../static/hp1_bg.png"
import iconMamoru from "../../static/icons/iconmmr.png"
import iconChiyo from "../../static/icons/icon2ty.png"
import iconSaika from "../../static/icons/icon3sik.png"
import iconJuri from "../../static/icons/icon4jr.png"
import iconTsuyuri from "../../static/icons/icon5tyr.png"
import iconNazuna from "../../static/icons/icon6nzn.png"
import iconSousei from "../../static/icons/icon7susi.png"
import iconShito from "../../static/icons/icon8strs.png"
import iconRyuko from "../../static/icons/icon9rk.png"
import iconRyou from "../../static/icons/icon10ku.png"
import iconKenji from "../../static/icons/icon11knj.png"
import iconKomari from "../../static/icons/icon12kmr.png"
import iconUshi from "../../static/icons/icon13uso.png"
import iconUmi from "../../static/icons/icon14umn.png"
import iconResuna from "../../static/icons/icon15rsn.png"
import CharaTxt from "./txts";
import CharaStands from "./stands";

const mamoru = {
    names: "犬無 守琉",
    selected_name: "Mamoru",
    icon: iconMamoru,
    options: ['1', "2"]
}
const chiyo = {
    names: "砂羽村 千代",
    selected_name: "Chiyo",
    icon: iconChiyo,
    options: ['1', "2"]
}
const saika = {
    names: "砂羽村 才花",
    selected_name: "Saika",
    icon: iconSaika,
    options: ['1', "2"]
}
const juri = {
    names: "砂羽村 樹里",
    selected_name: "Juri",
    icon: iconJuri,
    options: ['1', "2"]
}
const tsuyuri = {
    names: "白草 栗花落",
    selected_name: "Tsuyuri",
    icon: iconTsuyuri,
    options: ['1', "2"]
}
const nazuna = {
    names: "淡嶋 なずな",
    selected_name: "Nazuna",
    icon: iconNazuna,
    options: ['1', "2"]
}
const sousei = {
    names: "梅園 聡晟",
    selected_name: "Sousei",
    icon: iconSousei,
    options: ['1', "2"]
}
const shitorasu = {
    names: "梅園 司斗羅栖",
    selected_name: "Shitorasu",
    icon: iconShito,
    options: ['1', "2"]
}
const ryuko = {
    names: "折戸 流子",
    selected_name: "Ryuko",
    icon: iconRyuko,
    options: ['1', "2"]
}
const ryou = {
    names: "雨呂鎚 享",
    selected_name: "Ryou",
    icon: iconRyou,
    options: ['1', "2"]
}
const kenji = {
    names: "久留島 健治",
    selected_name: "Kenji",
    icon: iconKenji,
    options: ['1', "2"]
}
const komari = {
    names: "乎鞠",
    selected_name: "Komari",
    icon: iconKomari,
    options: ['1', "2"]
}
const ushio = {
    names: "千絵田 海潮",
    selected_name: "Ushio",
    icon: iconUshi,
    options: ['1', "2"]
}
const umino = {
    names: "千絵田 海乃",
    selected_name: "Umino",
    icon: iconUmi,
    options: ['1', "2"]
}
const resuna = {
    names: "八遠寺 れすな",
    selected_name: "Resuna",
    icon: iconResuna,
    options: ['1', "2"]
}
const pcList1 = [mamoru, chiyo, saika, juri, tsuyuri, nazuna, sousei, shitorasu, ryuko, ryou, kenji, komari, ushio, umino, resuna]


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

    const onClickButton = (val, index) => {
        setCharaValue({
            names: val.names,
            selected_name: val.selected_name,
            icon: val.icon,
            options: val.options,
            index: index,
        })
        setMamoruOpen(true)
        setValue("1")
    }

    const [value, setValue] = useState('1');
    const charaStand = useMemo(() => {
        return CharaStands(charaValue?.selected_name, value)
    }, [charaValue?.selected_name, value])

    const onCancel = () => {
        setMamoruOpen(false)
        setCharaValue(undefined)
        setValue("1")
    }

    const onchangeChara = (newIndex) => {
        if (newIndex !== undefined && pcList1[newIndex]?.selected_name) {
            console.log(pcList1[newIndex])
            setCharaValue({ ...pcList1[newIndex], index: newIndex })
            setValue("1")
        }
    }

    return (
        <>
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
                                    <Button style={{ width: "150x", height: "155px" }} onClick={() => onClickButton(list, index)}>
                                        <Image
                                            src={list?.icon}
                                            alt="Image"
                                            width={150}
                                            height={150} />,
                                    </Button>
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
                                    <Button style={{ width: "105px", height: "105px" }} onClick={() => onClickButton(list, index)}>
                                        <Image
                                            src={list?.icon}
                                            alt="Image"
                                            width={100}
                                            height={100} />,
                                    </Button>
                                    <div>
                                        {list?.names}
                                    </div>
                                </Col>)
                            )}
                        </Row>
                    )}
                    <Modal
                        centered
                        closeIcon={<CloseOutlined style={{ fontSize: "48px", paddingTop: "8px" }} />}
                        visible={mamoruOpen}
                        onCancel={onCancel}
                        width={"95%"}
                        bodyStyle={{ height: `${height}px` }}
                        cancelText="閉じる"
                        zIndex={194545}
                        footer={<></>}
                    >
                        <Image
                            alt="Shikoshikoback"
                            src={Background}
                            style={{ opacity: 0.33 }}
                            layout={`fill`}
                            objectFit={`cover`} />
                        {width > 768 ? (
                            <Row
                                gutter={{ xs: 8, sm: 16, md: 24, }} align="middle"
                            >
                                <Col span={2}>
                                    {charaValue?.index && (
                                        <Button type="text" onClick={() => onchangeChara(charaValue.index - 1)} icon={<LeftOutlined style={{ fontSize: '120px', color: '#fff', backgroundColor: "rgba(128,128,128,.5)" }} block />}>
                                        </Button>
                                    )}
                                </Col>
                                <Col span={8}>
                                    <div style={{ marginBottom: "2rem" }}>
                                        {charaStand}
                                    </div>
                                </Col>
                                <Col span={12} align="bottom">
                                    <Segmented options={charaValue?.options ?? ["1"]} value={value} onChange={setValue} size={"middle"} />
                                    <div>
                                        <p style={{
                                            fontSize: "32px"
                                        }}>
                                            {charaValue?.names}
                                        </p>
                                        <div style={{ zIndex: 194545, color: "black" }}>
                                            {CharaTxt(charaValue?.selected_name) ?? ""}
                                        </div>
                                        <Button onClick={onCancel}>閉じる</Button>
                                    </div>
                                </Col>
                                <Col span={2} align="right">
                                    {charaValue?.index !== undefined && (
                                        <Button type="text" onClick={() => onchangeChara(charaValue.index + 1)} icon={<RightOutlined style={{ fontSize: '120px', color: '#fff', backgroundColor: "rgba(128,128,128,.5)" }} block />}>
                                        </Button>)}
                                </Col>
                            </Row>
                        ) : (
                            <>
                                <div>
                                    {charaStand}
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
            </div>
        </>
    );
}