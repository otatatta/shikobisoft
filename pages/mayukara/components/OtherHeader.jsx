
import Link from "next/link";
import React from "react";
import 'antd/dist/antd.css';
import { Row } from 'antd';
import { Typography } from 'antd';
import { headerLink } from "./Header"
import Image from "next/image";
import Rogo from "../../static/rogo.png"

const borderStr = "2px ridge rgba(0, 0, 0, .6)"

function OtherHeader() {
    const { Title } = Typography;
    return (
        <header>
            <div style={{ width: "100%", backgroundColor: "#fff", position: "fixed", zIndex: 4545 }}>
                <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                    <Link href="./" >
                        <a className="headerLink">
                            <Image
                                alt="Shikoshiko"
                                src={Rogo}
                                objectFit="contain"
                                width={""}
                                height={"50px"}
                                style={{ maxWidth: "1280px" }}
                                layout={"intrinsic"} />
                        </a>
                    </Link>
                </div>
            </div>
            <div style={{ height: "50px" }} />

            <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>

                <Row justify="space-around" align="middle" style={{ border: borderStr }} >
                    {/* <Card> */}
                    {headerLink?.map((value, index) => {
                        return (
                            <div style={{ width: '20%', borderLeft: `${index === 0 ? "0px" : borderStr}`, background: "#fff" }} key={index}>
                                <Link href={value?.href} >
                                    <a className="headerLink" style={{ color: "black" }}>{value?.text}</a>
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