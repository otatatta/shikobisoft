import { Col, Row, Modal, Segmented, Button, Tooltip, Spin } from 'antd';
import React, { useState, useMemo } from 'react';
import { LeftOutlined, RightOutlined, CloseOutlined, LoadingOutlined } from '@ant-design/icons';
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
import CharaTxtImg from "./txtsImg";
import CharaStands from "./stands";
import CharaStandsMobile from "./standsmobile";
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
    names: "?????? ??????",
    name_sub: "Inunashi???Mamoru",
    name_img: nameMamoru,
    selected_name: "Mamoru",
    icon: iconMamoru,
    options: ['1', "2"]
}
const chiyo = {
    names: "????????? ??????",
    name_sub: "Sawamura???Chiyo",
    name_img: nameChiyo,
    selected_name: "Chiyo",
    icon: iconChiyo,
    options: ['1', "2"]
}
const saika = {
    names: "????????? ??????",
    name_sub: "Sawamura???Saika",
    name_img: nameSaika,
    selected_name: "Saika",
    icon: iconSaika,
    options: ['1', "2"]
}
const juri = {
    names: "????????? ??????",
    name_sub: "Sawamura???Juri",
    name_img: nameJuri,
    selected_name: "Juri",
    icon: iconJuri,
    options: ['1', "2"]
}
const tsuyuri = {
    names: "?????? ?????????",
    name_sub: "Shirakusa???Tsuyuri",
    name_img: nameTsuyuri,
    selected_name: "Tsuyuri",
    icon: iconTsuyuri,
    options: ['1', "2"]
}
const nazuna = {
    names: "?????? ?????????",
    name_sub: "Awashima Nazuna",
    name_img: nameNazuna,
    selected_name: "Nazuna",
    icon: iconNazuna,
    options: ['1', "2"]
}
const sousei = {
    names: "?????? ??????",
    name_sub: "Umezono Sousei",
    name_img: nameSousei,
    selected_name: "Sousei",
    icon: iconSousei,
    options: ['1', "2"]
}
const shitorasu = {
    names: "?????? ????????????",
    name_sub: "Umezono Shitorasu",
    name_img: nameShitora,
    selected_name: "Shitorasu",
    icon: iconShito,
    options: ['1', "2"]
}
const ryuko = {
    names: "?????? ??????",
    name_sub: "Orito Ryuko",
    name_img: nameRyuko,
    selected_name: "Ryuko",
    icon: iconRyuko,
    options: ['1', "2"]
}
const ryou = {
    names: "????????? ???",
    name_sub: "Urotuti Kyou",
    name_img: nameRyo,
    selected_name: "Ryou",
    icon: iconRyou,
    options: ['1', "2"]
}
const kenji = {
    names: "????????? ??????",
    name_sub: "Kurushima Kenji",
    name_img: nameKenji,
    selected_name: "Kenji",
    icon: iconKenji,
    options: ['1', "2"]
}
const komari = {
    names: "??????",
    name_sub: "Komari",
    name_img: nameKomari,
    selected_name: "Komari",
    icon: iconKomari,
    options: ['1', "2"]
}
const ushio = {
    names: "????????? ??????",
    name_sub: "Chieda Ushio",
    name_img: nameUshio,
    selected_name: "Ushio",
    icon: iconUshi,
    options: ['1', "2"]
}
const umino = {
    names: "????????? ??????",
    name_sub: "Chieda Umino",
    name_img: nameUmino,
    selected_name: "Umino",
    icon: iconUmi,
    options: ['1', "2"]
}
const resuna = {
    names: "????????? ?????????",
    name_sub: "Hachionji Resuna",
    name_img: nameResuna,
    selected_name: "Resuna",
    icon: iconResuna,
    options: ['1', "2"]
}
const pcList1 = [mamoru, chiyo, saika, juri, tsuyuri, nazuna, sousei, shitorasu, ryuko, ryou, kenji, komari, ushio, umino, resuna]


export default function MayuChara({ width }) {

    const [mamoruOpen, setMamoruOpen] = useState(false);


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
        if (width > 768) {
            return CharaStands(charaValue?.selected_name, value)
        } else { return CharaStandsMobile(charaValue?.selected_name, value) }
    }, [charaValue?.selected_name, value])

    const charatxt = useMemo(() =>
        <Image
            src={CharaTxtImg(charaValue?.selected_name)}
            style={{ display: "inline-block" }}
            alt="charatxt"
        />
        , [charaValue?.selected_name,])


    const onCancel = () => {
        setMamoruOpen(false)
        setCharaValue(undefined)
        setValue("1")
    }

    const onchangeChara = (newIndex) => {
        if (newIndex !== undefined && pcList1[newIndex]?.selected_name) {
            if (pcList1[newIndex]?.selected_name) {
                setCharaValue({ ...pcList1[newIndex], index: newIndex })
                setValue("1")
            }
        } else {
            setCharaValue({ ...pcList1[0], index: 0 })
            setValue("1")
        }
    }

    return (
        <>
            <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontFamily: "serif", marginTop: "2rem" }}>
                <div style={{ padding: "0, 2rem" }}>
                    {width > 768 ? (
                        <Row
                            gutter={16} align="middle"
                        >
                            {pcList1?.map((list, index) => (
                                <div style={{ width: "20%", textAlign: "center", marginTop: "20px" }} key={`aaaa_${index}`}>
                                    <Tooltip>
                                        <div>
                                            <Button type="text" ghost shape="circle" style={{ width: "200x", height: "180px", clipPath: "circle(50%)" }} onClick={() => onClickButton(list, index)}>
                                                <Image
                                                    src={list?.icon}
                                                    alt="Image"
                                                    width={160}
                                                    height={160} />
                                            </Button>
                                        </div>
                                        <div>
                                            <Button type="text" ghost onClick={() => onClickButton(list, index)}>
                                                <Image
                                                    src={list?.name_img}
                                                    alt="Image"
                                                    height={30} />
                                            </Button>
                                        </div>
                                    </Tooltip>
                                </div>
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
                                    <div>
                                        <Button type="text" style={{ width: "105px", height: "105px" }} onClick={() => onClickButton(list, index)}>
                                            <Image
                                                src={list?.icon}
                                                alt="Image"
                                                width={100}
                                                height={100} />
                                        </Button>
                                    </div>
                                    <div>
                                        <Button type="text" ghost onClick={() => onClickButton(list, index)}>
                                            <Image
                                                src={list?.name_img}
                                                alt="Image"
                                                height={15} />

                                        </Button>
                                    </div>
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
                        cancelText="?????????"
                        zIndex={194545}
                        footer={<></>}
                    >
                        {width > 768 ? (
                            <><Image
                                alt="Shikoshikoback"
                                src={Background}
                                style={{ opacity: 0.25 }}
                                fill
                                objectFit={`cover`} />
                                {charaStand ? (
                                    <Row
                                        gutter={{ xs: 8, sm: 16, md: 24, }} align="middle" style={{ fontFamily: "Hannari" }}
                                    >

                                        <Col span={1}>
                                            {charaValue?.index > 0 && (
                                                <Button type="text" onClick={() => onchangeChara(charaValue.index - 1)} icon={<LeftOutlined style={{ fontSize: '120px', color: '#fff', backgroundColor: "rgba(128,128,128,.5)" }} block />}>
                                                </Button>
                                            )}
                                        </Col>
                                        <Col span={6} style={{ textAlign: "right" }}>
                                            <Row>
                                                <div style={{ position: "relative", bottom: "40px" }}>
                                                    {charaStand}
                                                </div>
                                                <span style={{ position: "relative", bottom: "12vh", left: "48vh", zIndex: "19194545", border: "2px solid rgba(50, 50, 50, .9)" }}>
                                                    <Segmented style={{ border: "2px" }} options={charaValue?.options ?? ["1"]} value={value} onChange={setValue} size={"large"} />
                                                </span>
                                            </Row>
                                        </Col>
                                        <Col span={16} align="top">
                                            {charatxt}
                                            <Row style={{ zIndex: 194545, color: "black", width: "100%", position: "relative", bottom: "6vh" }} align="middle">
                                                <div style={{ marginLeft: "auto", paddingRight: "100px" }}>
                                                    <Button onClick={onCancel}>?????????</Button>
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
                                    <Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} spin />} />
                                )}
                            </>
                        ) : (
                            <>
                                <Image
                                    alt="Shikoshikoback"
                                    src={Background}
                                    style={{ opacity: 0.25 }}
                                    fill
                                    objectFit={`cover`} />
                                <div style={{ position: "relative", display: "flex", justifyContent: "center", width: "" }}>
                                    {charaStand}
                                </div>
                                <Row justify={"space-between"} style={{
                                    position: "relative", bottom: "60vh"
                                }}>
                                    {charaValue?.index > 0 ? (
                                        <Button type="text" onClick={() => onchangeChara(charaValue.index - 1)} icon={<LeftOutlined style={{ fontSize: '120px', color: '#fff', backgroundColor: "rgba(128,128,128,.5)" }} />}>
                                        </Button>
                                    ) : (<div></div>)}

                                    {charaValue?.index !== undefined && (
                                        <Button type="text" onClick={() => onchangeChara(charaValue.index + 1)} icon={<RightOutlined style={{ fontSize: '120px', color: '#fff', backgroundColor: "rgba(128,128,128,.5)" }} />}>
                                        </Button>)}
                                </Row>
                                <div style={{
                                    position: "relative", bottom: "340px", backgroundColor: "rgba(255, 255, 255, .8)"
                                }}>
                                    <div style={{
                                        fontSize: "32px", marginLeft: "1rem"
                                    }}>
                                        ???{charaValue?.names}???
                                        <div style={{
                                            fontSize: "16px", marginLeft: "1rem"
                                        }}>
                                            ???{charaValue?.name_sub}???
                                        </div>
                                    </div>
                                    <div style={{
                                        marginTop: "1rem",
                                        height: "200px",
                                        overflowY: "scroll",
                                        zIndex: 194545,
                                        marginLeft: "1rem",
                                        fontSize: "16px",
                                        lineHeight: "24px"
                                    }}>{CharaTxt(charaValue?.selected_name) ?? ""}
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <Segmented options={charaValue?.options ?? ["1"]} value={value} onChange={setValue} size={"middle"} />
                                    </div>
                                </div>

                            </>
                        )}
                    </Modal>
                </div>
            </div>
        </>
    );
}