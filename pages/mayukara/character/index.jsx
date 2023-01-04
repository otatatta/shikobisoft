import { Col, Row, Modal, Segmented, Button, Tooltip } from 'antd';
import React, { useEffect, useState, useMemo } from 'react';
import "./font.module.css"
import { LeftOutlined, RightOutlined, DoubleLeftOutlined, DoubleRightOutlined, CloseOutlined } from '@ant-design/icons';
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
import nameMamoru from "../../static/names/mamoru.png"
import nameChiyo from "../../static/names/chiyo.png"
import nameSaika from "../../static/names/saika.png"
import nameJuri from "../../static/names/juri.png"
import nameTsuyuri from "../../static/names/tuyuri.png"
import nameNazuna from "../../static/names/nazuna.png"
import nameSousei from "../../static/names/sousei.png"
import nameShitora from "../../static/names/shitora.png"
import nameRyuko from "../../static/names/ryuko.png"
import nameRyo from "../../static/names/kyou.png"
import nameKenji from "../../static/names/kenji.png"
import nameKomari from "../../static/names/komari.png"
import nameUshio from "../../static/names/ushio.png"
import nameUmino from "../../static/names/umino.png"
import nameResuna from "../../static/names/resuna.png"

const mamoru = {
    names: "犬無 守琉",
    name_sub: "Inunashi Mamoru",
    name_img: nameMamoru,
    selected_name: "Mamoru",
    icon: iconMamoru,
    options: ['1', "2"]
}
const chiyo = {
    names: "砂羽村 千代",
    name_sub: "Sawamura Chiyo",
    name_img: nameChiyo,
    selected_name: "Chiyo",
    icon: iconChiyo,
    options: ['1', "2"]
}
const saika = {
    names: "砂羽村 才花",
    name_img: nameSaika,
    selected_name: "Saika",
    icon: iconSaika,
    options: ['1', "2"]
}
const juri = {
    names: "砂羽村 樹里",
    name_img: nameJuri,
    selected_name: "Juri",
    icon: iconJuri,
    options: ['1', "2"]
}
const tsuyuri = {
    names: "白草 栗花落",
    name_img: nameTsuyuri,
    selected_name: "Tsuyuri",
    icon: iconTsuyuri,
    options: ['1', "2"]
}
const nazuna = {
    names: "淡嶋 なずな",
    name_img: nameNazuna,
    selected_name: "Nazuna",
    icon: iconNazuna,
    options: ['1', "2"]
}
const sousei = {
    names: "梅園 聡晟",
    name_img: nameSousei,
    selected_name: "Sousei",
    icon: iconSousei,
    options: ['1', "2"]
}
const shitorasu = {
    names: "梅園 司斗羅栖",
    name_img: nameShitora,
    selected_name: "Shitorasu",
    icon: iconShito,
    options: ['1', "2"]
}
const ryuko = {
    names: "折戸 流子",
    name_img: nameRyuko,
    selected_name: "Ryuko",
    icon: iconRyuko,
    options: ['1', "2"]
}
const ryou = {
    names: "雨呂鎚 享",
    name_img: nameRyo,
    selected_name: "Ryou",
    icon: iconRyou,
    options: ['1', "2"]
}
const kenji = {
    names: "久留島 健治",
    name_img: nameKenji,
    selected_name: "Kenji",
    icon: iconKenji,
    options: ['1', "2"]
}
const komari = {
    names: "乎鞠",
    name_img: nameKomari,
    selected_name: "Komari",
    icon: iconKomari,
    options: ['1', "2"]
}
const ushio = {
    names: "千絵田 海潮",
    name_img: nameUshio,
    selected_name: "Ushio",
    icon: iconUshi,
    options: ['1', "2"]
}
const umino = {
    names: "千絵田 海乃",
    name_img: nameUmino,
    selected_name: "Umino",
    icon: iconUmi,
    options: ['1', "2"]
}
const resuna = {
    names: "八遠寺 れすな",
    name_img: nameResuna,
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
            name_sub: val.name_sub,
            name_img: val.name_img,
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
            setCharaValue({ ...pcList1[newIndex], index: newIndex })
            setValue("1")
        }
    }

    return (
        <>
            <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontFamily: "serif" }}>
                <div style={{ padding: "1rem" }}>
                    {width > 768 ? (
                        <Row
                            gutter={16} align="middle"
                        >
                            {pcList1?.map((list, index) => (
                                <>
                                    <div style={{ width: "20%", textAlign: "center", paddingTop: "1rem" }} key={`aaaa_${index}`}>

                                        <Tooltip>
                                            <Button type="text" ghost shape="circle" style={{ width: "200x", height: "180px", clipPath: "circle(50%)" }} onClick={() => onClickButton(list, index)}>
                                                <Image
                                                    src={list?.icon}
                                                    alt="Image"
                                                    width={160}
                                                    height={160} />
                                            </Button>
                                            <Button type="text" ghost onClick={() => onClickButton(list, index)}>
                                                <Image
                                                    src={list?.name_img}
                                                    alt="Image"
                                                    height={30} />

                                            </Button>
                                        </Tooltip>
                                    </div>
                                </>
                            ))}
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
                                <Col span={12} key={`aaaa_${index}`}>
                                    <Button type="text" style={{ width: "105px", height: "105px" }} onClick={() => onClickButton(list, index)}>
                                        <Image
                                            src={list?.icon}
                                            alt="Image"
                                            width={100}
                                            height={100} />,
                                    </Button>
                                    <Button type="text" ghost onClick={() => onClickButton(list, index)}>
                                        <Image
                                            src={list?.name_img}
                                            alt="Image"
                                            height={15} />

                                    </Button>
                                </Col>)
                            )}
                        </Row>
                    )}
                    <Modal
                        centered
                        closeIcon={<CloseOutlined style={{ fontSize: "48px", paddingTop: "8px" }} />}
                        open={mamoruOpen}
                        onCancel={onCancel}
                        width={"95%"}
                        bodyStyle={{ height: `820px` }}
                        cancelText="閉じる"
                        zIndex={194545}
                        footer={<></>}
                    >
                        <Image
                            alt="Shikoshikoback"
                            src={Background}
                            style={{ opacity: 0.33 }}
                            fill
                            objectFit={`cover`} />
                        {width > 768 ? (
                            <Row
                                gutter={{ xs: 8, sm: 16, md: 24, }} align="middle" style={{ fontFamily: "Hannari" }}
                            >
                                <Col span={1}>
                                    {charaValue?.index > 0 && (
                                        <Button type="text" onClick={() => onchangeChara(charaValue.index - 1)} icon={<LeftOutlined style={{ fontSize: '120px', color: '#fff', backgroundColor: "rgba(128,128,128,.5)" }} block />}>
                                        </Button>
                                    )}
                                </Col>
                                <Col span={7} style={{ textAlign: "right" }}>
                                    <div style={{ marginBottom: "2rem" }}>
                                        {charaStand}
                                    </div>
                                </Col>
                                <Col span={15} align="bottom">
                                    <Row align="middle" style={{
                                        fontSize: "60px", marginTop: "0rem"
                                    }}>
                                        <DoubleLeftOutlined />
                                        <div style={{ paddingTop: "1.2rem" }}>
                                            <Image
                                                src={charaValue?.name_img}
                                                alt="Image"
                                                height={37} />
                                            <div style={{
                                                fontSize: "20px", position: "relative", bottom: "20px", textAlign: "center", fontFamily: "serif"
                                            }} >{charaValue?.name_sub}</div>
                                        </div>
                                        <DoubleRightOutlined />
                                    </Row>
                                    <div style={{ zIndex: 194545, color: "black", fontFamily: "serif", fontWeight: "bold" }}>
                                        {CharaTxt(charaValue?.selected_name) ?? ""}
                                    </div>
                                    <Row style={{ zIndex: 194545, color: "black", marginTop: "1rem", width: "100%" }} align="middle">
                                        <Segmented options={charaValue?.options ?? ["1"]} value={value} onChange={setValue} size={"large"} />
                                        <div style={{ marginLeft: "auto" }}>
                                            <Button onClick={onCancel}>閉じる</Button>
                                        </div>
                                    </Row>
                                </Col>
                                <Col span={1} align="right">
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