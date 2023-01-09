import React, { useEffect, useState } from 'react';
import Footer from "../component/Footer"
import karankoeTop from "../static/siteKEY.png"
import Background from "../static/hp2_TOP.jpg"
import junbi from "../static/zyunbi.jpg"
import Image from "next/image";
import CarankoeStory from "./story";
import Navigation from "./components/Navigation"
import SectionHeader from "./components/Header"
import FloatButtons from "./components/FloatButtons"
import MayuChara from "./character"
import { Col, Row } from 'antd';
import Script from 'next/script'
import BackTopButton from "./components/BackTopButton"
import Graphics from "./graphics"
import DlFloatButtons from "./components/DlButton"


export default function Carankoe() {
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

    return (
        <>
            <div style={{ position: "fixed", top: "0px", zIndex: -4545 }}>
                <div style={{ height: "100%", width: "100%" }}>
                    <Image
                        alt="Shikoshikoback"
                        src={Background}
                        width="100%"
                        objectFit="contain"
                        layout={"intrinsic"}
                        style={{ zIndex: -4545 }}
                    />
                </div>
            </div>
            <div style={{ position: "fixed", top: "10px", width: "100%", zIndex: 14545 }}>
                <Navigation />
            </div>
            <div style={{ position: "absolute", top: "0px", width: "100%", zIndex: 545 }}>
                <div style={{}} id="top">
                    <Image
                        alt="Shikoshiko"
                        src={karankoeTop}
                        style={{ width: "100%" }}
                        objectFit="contain"
                        layout={"intrinsic"} />
                </div>
                <div style={{ background: "rgba(242, 222, 182, .9)" }}>
                    <div style={{ height: "20px" }}>

                    </div>
                    <div id="story" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                        <SectionHeader text="御噺" />
                        <CarankoeStory />
                    </div>
                    <div id="character" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", marginTop: "3rem" }}>
                        <SectionHeader text="人物" />
                        <MayuChara width={width} />
                    </div>
                    <div id="illust" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", marginTop: "4rem" }}>
                        <SectionHeader text="画廊" />
                        <div style={{ padding: "2rem", marginTop: "2rem" }}>
                            <Graphics />
                        </div>
                    </div>
                    {width > 768 && (
                        <div style={{ position: "relative", top: "40px" }}>
                            <DlFloatButtons />
                        </div>
                    )}
                    <div id="novel" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                        <SectionHeader text="小噺" />
                        <div style={{ padding: "2rem", marginTop: "2rem" }}>
                            <Image
                                alt="Shikoshiko"
                                src={junbi}
                                style={{ width: "100%" }}
                                objectFit="contain"
                                layout={"intrinsic"} />
                        </div>

                    </div>
                    <div id="update" style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", fontFamily: "cursive" }}>
                        <SectionHeader text="電報" />
                        <Row gutter={16} style={{ margin: "2rem" }} justify="space-between">
                            <Col xs={24} sm={11} md={11} lg={11} xl={10} style={{ background: "rgba(232, 212, 172, .6)" }} >
                                <div style={{ borderBottom: "solid rgb(99,99,99)", fontSize: "28px" }}>
                                    更新情報
                                </div>
                                <div
                                    style={{
                                        height: "500px",
                                        overflowY: "scroll",
                                        marginTop: "2rem",
                                        fontSize: "16px"
                                    }}>
                                    <p>
                                        ・<span style={{ color: "#222" }}>2023.01.09</span> <span style={{ paddingLeft: "1rem" }}>サイトオープンしました</span>
                                    </p>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12} xl={10} style={{ background: "rgba(232, 212, 172, .6)" }}>
                                <div style={{ borderBottom: "solid rgb(99,99,99)", fontSize: "28px" }}>
                                    Twitter
                                </div>
                                <div
                                    style={{
                                        height: "500px",
                                        overflowY: "scroll",
                                        marginTop: "2rem"
                                    }}>
                                    <a className="twitter-timeline" href="https://twitter.com/4545software?ref_src=twsrc%5Etfw">Tweets by 4545software</a> <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></Script>

                                </div>
                            </Col>
                        </Row>
                        <Row gutter={16} justify="center" >
                        </Row>
                    </div>
                    <BackTopButton />
                    <div id="share" style={{ textAlign: "center" }}>
                        <FloatButtons />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}