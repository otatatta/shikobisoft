import OtherHeader from "../components/OtherHeader"
import Footer from "../../component/Footer"
import { Modal } from 'antd';
import React, { useState } from 'react';
import Image from 'next/image'
import Background from "../../static/hp1_bg.png"
import iconMamoru from "../../static/icons/iconmmr.png"
import mamoru1 from "../../static/stands/HP1mmr.png"
import mamoru2 from "../../static/stands/HP1mmr2.png"
// import iconMamoru from "../../static/stands/"
// import iconMamoru from "../../static/stands/"
// import iconMamoru from "../../static/stands/"
// import iconMamoru from "../../static/stands/"
// import iconMamoru from "../../static/stands/"
// import iconMamoru from "../../static/stands/"
// import iconMamoru from "../../static/stands/"
// import iconMamoru from "../../static/stands/"

const mamoru = {
    names: "犬無 守琉",
    name_kana: "Inunashi Mamoru",
    txt: (
        <div>
            <p>
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
        </div>
    ),
    icon: <Image
        src={iconMamoru}
        alt="Image"
        width={100}
        height={100} />,
    stand_1: <Image
        src={mamoru1}
        alt="Image" />,
    stand_2: <Image
        src={mamoru2}
        alt="Image" />,
}

// export const charaList = [
//     mamoru
// ]

export default function MayuChara() {
    const [mamoruOpen, setMamoruOpen] = useState(false);
    return (
        <>
            <OtherHeader />
            <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                <div>
                    <div style={{ padding: "1rem" }}>
                        <button type="primary" onClick={() => setMamoruOpen(true)}>
                            {mamoru?.icon}
                        </button>
                        <Modal
                            title=""
                            centered
                            visible={mamoruOpen}
                            onOk={() => setMamoruOpen(false)}
                            onCancel={() => setMamoruOpen(false)}
                            width={"90%"}
                        >
                            <Image
                                alt="Shikoshikoback"
                                src={Background}
                                style={{ position: "fixed", zIndex: 4545 }}
                                width={"100%"}
                                height={"100%"}
                                layout={`fill`}
                                objectFit={`cover`} />
                            <div style={{ height: "auto" }}></div>
                            {mamoru.txt}
                        </Modal>
                        <div>
                            {mamoru?.names}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}