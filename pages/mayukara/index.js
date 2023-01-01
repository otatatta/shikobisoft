import React from 'react';
import Footer from "../component/Footer"
import karankoeTop from "../static/karankoe.jpg"
import Background from "../static/hp2_TOP.jpg"
import Image from "next/image";
import CarankoeStory from "./story";
import Navigation from "./components/Navigation"
import SectionHeader from "./components/Header"
import MayuChara from "./character"
import { Col, Row } from 'antd';
import Script from 'next/script'
import BackTopButton from "./components/BackTopButton"
// import { Button } from 'antd';

export default function Carankoe() {
    return (
        <>
            <div style={{ position: "fixed", top: "0px", zIndex: -4545 }}>
                <div style={{ height: "100%", width: "100%" }}>
                    <Image
                        alt="Shikoshikoback"
                        src={Background}
                        height="1080px"
                        width="1920px"
                        style={{ zIndex: -4545 }}
                    />
                </div>
            </div>
            <div style={{ position: "fixed", top: "10px", width: "100%", zIndex: 14545 }}>
                <Navigation />
            </div>
            <div style={{ position: "absolute", top: "0px", width: "100%", zIndex: 545 }}>
                <div style={{ marginLeft: "auto", marginRight: "auto" }} id="top">
                    <Image
                        alt="Shikoshiko"
                        src={karankoeTop}
                        objectFit="contain"
                        layout={"intrinsic"} />
                </div>
                <div style={{ background: "rgba(242, 222, 182, .8);" }}>
                    <div style={{ height: "40px" }}>

                    </div>
                    <div id="story" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                        <SectionHeader text="御噺" />
                        <CarankoeStory />
                    </div>
                    <div id="character" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                        <SectionHeader text="人物" />
                        <MayuChara />
                    </div>
                    <div id="illust" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                        <SectionHeader text="画廊" />
                        サンプルCG
                    </div>
                    <div id="novel" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                        <SectionHeader text="小噺" />
                        小説公開中
                    </div>
                    <div id="update" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                        <SectionHeader text="電報" />
                        <Row gutter={16} style={{ margin: "20px", fontSize: "24px" }} justify="center">
                            <Col xs={24} sm={12} md={12} lg={12} xl={10}>
                                更新情報
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12} xl={10}>
                                Twitter
                            </Col>
                        </Row>
                        <Row gutter={16} justify="center" >
                            <Col xs={24} sm={12} md={12} lg={12} xl={10}>
                                ・<span>2023.01.04</span> サイトオープンしました
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12} xl={10}
                                style={{
                                    height: "600px",
                                    overflowY: "scroll",
                                }}>
                                <a class="twitter-timeline" href="https://twitter.com/4545software?ref_src=twsrc%5Etfw">Tweets by 4545software</a> <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></Script>

                            </Col>
                        </Row>
                    </div>
                    <BackTopButton />
                    <Footer />
                </div>
            </div>
        </>
    );
}