import React, {useEffect, useState, useMemo} from 'react';
import Footer from "../component/Footer"
import karankoeTop from "../static/sitekey_3.png"
import Background from "../static/hp2_TOP.jpg"
import junbi from "../static/zyunbi.jpg"
import Image from "next/image";
import CarankoeStory from "./story";
import Navigation from "./components/Navigation"
import SectionHeader from "./components/Header"
import FloatButtons from "./components/FloatButtons"
import MayuChara from "./character"
import {Col, Row} from 'antd';
import Script from 'next/script'
import BackTopButton from "./components/BackTopButton"
import Graphics from "./graphics"
import {DefaultSeo} from 'next-seo';
import Head from "next/head"
import DlFloatButtons from "./components/DlButton"


export default function Carankoe() {
    function getWindowDimensions() {
        const {innerWidth: width, innerHeight: height} = window;
        return {
            width,
            height,
        };
    }
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [hideButton, setHideButton] = useState(0);

    useEffect(() => {
        const {width, height} = getWindowDimensions();

        setWidth(width);
        setHeight(height);
    }, []);
    useEffect(() => {
        function handleResize() {
            const {width, height} = getWindowDimensions();
            setWidth(width)
            setHeight(height)
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const updateHistory = useMemo(() => [
        {date: "2023.03.15", txt: "新規CGを追加しました。"},
        {date: "2023.03.14", txt: "キービジュアルを更新しました。"},
        {date: "2023.02.14", txt: "新規CGを2枚を追加しました。"},
        {date: "2023.01.29", txt: "キービジュアルを更新しました。"},
        {date: "2023.01.09", txt: "サイトオープンしました。"}
    ], [])

    const updated = useMemo(() => updateHistory?.map((val, index) => (
        <p key={`updated_${index}`}>
            ・<span style={{color: "#222"}}>{val.date}</span> <span style={{paddingLeft: "1rem"}}>{val.txt}</span>
        </p>
    )
    ), [updateHistory])

    return (
        <>
            <Head>
                <title>繭イのカランコエ top</title>
                <meta charSet="utf-8" />
                <meta name="keyword" content="しこしこソフト,繭イのカランコエ,UUY,無灯華,同人サークル,同人ゲーム" />
                <meta name="description" content="繭イのカランコエ(まよいのからんこえ)トップページです" />
            </Head>
            <DefaultSeo
                defaultTitle="しこしこソフト繭イのカランコエTop"
                description="しこしこソフト繭イのカランコエ(まよいのからんこえ)トップページです"
                openGraph={{
                    type: "website",
                    title: "しこしこソフト繭イのカランコエ",
                    description: "しこしこソフト繭イのカランコエ",
                    site_name: "繭イのカランコエHP",
                    url: "https://shikobisoft.vercel.app/mayukara",
                }}
                twitter={{
                    handle: "4545software",
                    site: "4545software",
                    cardType: 'summary',
                }}
            />
            <div style={{position: "fixed", top: "0px", zIndex: -4545}}>
                <div style={{height: "100%", width: "100%"}}>
                    <Image
                        alt="Shikoshikoback"
                        src={Background}
                        width="100%"
                        layout={"intrinsic"}
                        style={{zIndex: -4545, objectFit: "cover"}}
                    />
                </div>
            </div>
            {!hideButton && (
                <div style={{position: "fixed", top: "10px", width: "100%", zIndex: 14545}}>
                    <Navigation />
                </div>
            )}
            <div style={{position: "absolute", top: "0px", width: "100%", zIndex: 545}}>
                <div style={{}} id="top">
                    <Image
                        alt="key_visual"
                        src={karankoeTop}
                        style={{
                            width: "100%",
                            objectFit: "contain",
                            maxWidth: '100%',
                            height: 'auto',
                        }} />
                </div>
                <div style={{background: "rgba(242, 222, 182, .9)"}}>
                    <div style={{height: "20px"}}>

                    </div>
                    <div id="story" style={{maxWidth: "1280px", marginLeft: "auto", marginRight: "auto"}}>
                        <SectionHeader text="御噺" />
                        <CarankoeStory />
                    </div>
                    <div id="character" style={{maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", marginTop: "3rem"}}>
                        <SectionHeader text="人物" />
                        <MayuChara width={width} />
                    </div>
                    <div id="illust" style={{maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", marginTop: "4rem"}}>
                        <SectionHeader text="画廊" />
                        <div style={{padding: "2rem"}}>
                            <Graphics setHideButton={setHideButton} width={width} />
                        </div>
                    </div>
                    {width > 768 && (
                        <div style={{position: "relative", top: "20px"}}>
                            <DlFloatButtons />
                        </div>
                    )}
                    <div id="novel" style={{maxWidth: "1280px", marginLeft: "auto", marginRight: "auto"}}>
                        <SectionHeader text="小噺" />
                        <div style={{padding: "2rem", marginTop: "2rem"}}>
                            <Image
                                alt="Shikoshiko"
                                src={junbi}
                                style={{
                                    width: "100%",
                                    objectFit: "contain",
                                    maxWidth: '100%',
                                    height: 'auto',
                                }} />
                        </div>

                    </div>
                    <div id="update" style={{maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", fontFamily: "cursive"}}>
                        <SectionHeader text="電報" />
                        <Row gutter={16} style={{margin: "2rem"}} justify="space-between">
                            <Col xs={24} sm={11} md={11} lg={11} xl={10} style={{background: "rgba(232, 212, 172, .6)"}} >
                                <div style={{borderBottom: "solid rgb(99,99,99)", fontSize: "28px"}}>
                                    更新情報
                                </div>
                                <div
                                    style={{
                                        height: "500px",
                                        overflowY: "scroll",
                                        marginTop: "2rem",
                                        fontSize: "16px"
                                    }}>
                                    {updated}
                                </div>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12} xl={10} style={{background: "rgba(232, 212, 172, .6)"}}>
                                <div style={{borderBottom: "solid rgb(99,99,99)", fontSize: "28px"}}>
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
                    <div id="share" style={{textAlign: "center"}}>
                        <FloatButtons />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}