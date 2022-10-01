
import Link from "next/link";
import React from "react";
import 'antd/dist/antd.css';
import { Row } from 'antd';
import { Typography } from 'antd';

const headerLink = [
    {
        href: "./story",
        text: "物語"
    },
    {
        href: "./character",
        text: "人物"
    },
    {
        href: "./blog",
        text: "画像"
    },
    {
        href: "./blog",
        text: "ダウンロード"
    },
    {
        href: "./blog",
        text: "製品概要"
    }
]

const borderStr = "2px ridge rgba(211, 220, 50, .6)"

function OtherHeader() {
    const { Title } = Typography;
    return (
        <header>
            <div style={{ width: "100%", backgroundColor: "#31a9ee", position: "fixed", zIndex: 4545 }}>
                <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                    <Title>SHIKOSHIKOSOFT 1st PROJECT</Title>
                </div>
            </div>
            <div style={{ height: "5rem" }} />

            <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>

                <Row justify="space-around" align="middle" style={{ border: borderStr }} >
                    {/* <Card> */}
                    {headerLink?.map((value, index) => {
                        return (
                            <div style={{ width: '20%', borderLeft: `${index === 0 ? "" : borderStr}`, background: "#fff7e6" }} key={index}>
                                <Link href={value?.href} >
                                    <a className="headerLink" style={{ fontSize: "clamp(14px, 2vw, 28px)", padding: "1rem" }}>{value?.text}</a>
                                </Link>
                            </div>
                        )
                    })}
                    {/* </Card> */}
                </Row>
            </div>
        </header >
    );
}

export default OtherHeader;