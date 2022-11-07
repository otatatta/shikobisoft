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

const mamoru = {
    names: "犬無 守琉",
    selected_name: "Mamoru",
    txt: (
        <p style={{ fontSize: "14px" }}>
            『 ――全部が全部、気色が悪いよな…… 』<br />
            本作の主人公である十九歳の青年。<br />
            舞台である繭ノ葉町を、実母と共に幼い頃に外へと連れ出た。しかし母の消息不明を機に、十四年振りに町へと帰省することとなる。<br />
            無愛想気味だが本人なりには人を気遣おうとする故に、困る人などを放っておくことができない気質。<br />
            繭ノ葉町《御三家》の【神来社家】出自であり、長男ゆえ本来は当主を引き継ぐ立場であるのだが、外の世界で育ったため実家への思い入れなどは何も無い。<br />
            <br />
            キャラクター原画: ぎゃばん<br />
            キャラクター彩色: 麩幸地<br />
            キャラクターデザイン原案: 麻木ななみ
        </p>
    ),
    icon: iconMamoru,
    stand_1: mamoru1,
    stand_2: mamoru2,
    options: ['1', "2"]
}

const chiyo = {
    names: "砂羽村 千代",
    selected_name: "Chiyo",
    txt: (
        <p style={{ fontSize: "14px" }}>
            《 砂羽村 千代 》<br />
            Sawamura Chiyo<br />
            『 町の外のこと、いっぱいウチに教えて欲しいんだぁ 』<br />
            砂羽村三姉妹の次女。<br />
            色々な事が気になったり、気に入らなかったりな年頃で悩みが尽きないらしい少女。<br />
            姉妹への愛情が強く、特に妹である樹里を溺愛している。<br />
            性への抵抗などは皆無。欲望には従順であり、興味津々ですらある。<br />
            町の外から訪れた守琉には、外の世界についての話をねだっては聞きため、交流を持ちたがってくる。<br />
            キャラクターデザイン・原画: よしな<br />
            キャラクター彩色: りりー<br />
        </p>
    ),
    icon: iconChiyo,
    stand_1: chiyo1,
    options: ['1']
}
const saika = {
    names: "砂羽村 才花",
    selected_name: "Saika",
    txt: (
        <p style={{ fontSize: "14px" }}>
            《 砂羽村 才花 》<br />
            Sawamura Saika<br />
            『 まったく、アナタという人は……本当に…… 』<br />
            砂羽村三姉妹の長女。<br />
            旅館である 孵縲不ノ館 -かえらずのやかた- では女将を務めている。<br />
            旅館の若旦那である司斗羅栖とは夫婦関係であるが、業務以上の感情は非常に薄い。<br />
            妹である千代を溺愛しているのだが、その想いは……？<br />
            本当は女将の仕事も性に合っておらず、妹たちのためと日々を自分に向かないコトへ勤しんでは、<br />
            心を徐々にと擦り減らし続けている。<br />
            キャラクターデザイン・原画: りりー<br />
            キャラクター彩色: 夏紀ゆう<br />
        </p>
    ),
    icon: iconSaika,
    stand_1: saika1,
    options: ['1']
}

const juri = {
    names: "砂羽村 樹里",
    selected_name: "Juri",
    txt: (
        <p style={{ fontSize: "14px" }}>
            《 砂羽村 樹里 》<br />
            Sawamura Juri<br />
            『 ねえさまたちは、ジュリの誇りなのですっ！ 』<br />
            砂羽村三姉妹の末女。<br />
            姉たちのことを心から慕い、その助けになりたいと日々を働く姉たちの手伝いをかって出ている頑張り屋。<br />
            性経験は皆無だが性へ関する羞恥心なども無く、異性を悦ばせられるが為の行いだと捉えている。<br />
            その独特な倫理観ゆえに、とても危うい純粋さを持つが……。<br />
            見た目の幼さのわりに丁寧な言葉遣いをするが、容姿や知識が実年齢にあまり追いついてはいない。<br />
            キャラクターデザイン・原画: 遥<br />
            キャラクター彩色: りりー
        </p>
    ),
    icon: iconJuri,
    stand_1: juri1,
    stand_2: juri2,
    options: ['1', "2"]
}

const tsuyuri = {
    names: "白草 栗花落",
    selected_name: "Tsuyuri",
    txt: (
        <p style={{ fontSize: "14px" }}>
            《 白草 栗花落 》<br />
            Shirakusa Tsuyuri<br />
            『 ワタクシと、そちらさま。きっとご縁がありますわよ 』<br />
            慰安のためと繭ノ葉町を訪れ、守琉と同じ旅館へと宿泊しに来ている女性。<br />
            正体はその声を知る人が聴けば判るほど、有名なラヂオ女優である。<br />
            本人いわく《勘》がとにかく良いらしく、何かと守琉に対して協力的な態度をとる。<br />
            髪は自前で染めている。<br />
            キャラクターデザイン・原画: あるぷすよ<br />
            キャラクター彩色:<br />
        </p>
    ),
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