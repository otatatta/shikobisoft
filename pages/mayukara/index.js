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
import { BREAKPOINT_MOBILE, Z_INDEX } from "../../consts/layout"
import styles from "./mayukara.module.css"


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
            <div style={{position: width > BREAKPOINT_MOBILE ? "fixed" : "absolute", top: "0px", width: "100%", zIndex: Z_INDEX.BACKGROUND}}>
                <Image
                    alt="Shikoshikoback"
                    src={Background}
                    className={styles.backgroundImage}
                    style={{
                        zIndex: Z_INDEX.BACKGROUND,
                    }}
                />
            </div >
            {!hideButton && (
                <div style={{position: "fixed", top: "10px", width: "100%", zIndex: Z_INDEX.NAVIGATION_BAR}}>
                    <Navigation />
                </div>
            )
            }
            <div style={{position: "absolute", top: "0px", width: "100%", zIndex: Z_INDEX.CONTENT}}>
                <div id="top">
                    <Image
                        alt="key_visual"
                        src={karankoeTop}
                        className={styles.keyVisual}
                    />
                </div>
                <div className={styles.contentBackground}>
                    <div className={styles.spacer}>

                    </div>
                    <div id="story" className={styles.sectionContainer}>
                        <SectionHeader text="御噺" />
                        <CarankoeStory />
                    </div>
                    <div id="character" className={styles.characterSection}>
                        <SectionHeader text="人物" />
                        <MayuChara width={width} />
                    </div>
                    <div id="illust" className={styles.illustSection}>
                        <SectionHeader text="画廊" />
                        <div >
                            <Graphics setHideButton={setHideButton} width={width} />
                        </div>
                    </div>
                    {width > BREAKPOINT_MOBILE && (
                        <div className={styles.dlButtonWrapper}>
                            <DlFloatButtons />
                        </div>
                    )}
                    <div id="novel" className={styles.sectionContainer}>
                        <SectionHeader text="小噺" />
                        <div className={styles.novelContent}>
                            <Image
                                alt="Shikoshiko"
                                src={junbi}
                                className={styles.novelImage}
                            />
                            <Image
                                alt="Shikoshiko"
                                src={junbi2}
                                className={styles.novelImage}
                            />
                        </div>

                    </div>
                    <BackTopButton />
                    <div id="share" className={styles.shareSection}>
                        <FloatButtons />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}