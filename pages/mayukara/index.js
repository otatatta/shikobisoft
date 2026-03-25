import React, {useEffect, useState} from 'react';
import Footer from "../component/Footer"
import karankoeTop from "../static/sitekey_3.png"
import Background from "../static/sitoBG2.jpg"
import junbi from "../static/zyunbi.jpg"
import junbi2 from "../static/junbi2.jpg"
import Image from "next/image";
import CarankoeStory from "./story";
import Navigation from "./components/Navigation"
import SectionHeader from "./components/Header"
import FloatButtons from "./components/FloatButtons"
import MayuChara from "./character"
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
            <div style={{position: width > 768 ? "fixed" : "absolute", top: "0px", width: "100%", zIndex: -4545}}>
                <Image
                    alt="Shikoshikoback"
                    src={Background}
                    style={{
                        zIndex: -4545,
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                    }}
                />
            </div >
            {!hideButton && (
                <div style={{position: "fixed", top: "10px", width: "100%", zIndex: 14545}}>
                    <Navigation />
                </div>
            )
            }
            <div style={{position: "absolute", top: "0px", width: "100%", zIndex: 545}}>
                <div style={{}} id="top">
                    <Image
                        alt="key_visual"
                        src={karankoeTop}
                        style={{
                            width: "100%",
                            objectFit: "contain",
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
                        <div >
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
                            <Image
                                alt="Shikoshiko"
                                src={junbi2}
                                style={{
                                    width: "100%",
                                    objectFit: "contain",
                                    maxWidth: '100%',
                                    height: 'auto',
                                }} />
                        </div>

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