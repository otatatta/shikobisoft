import Header from "./components/Header"
import Footer from "../component/Footer"
import karankoeTop from "../static/karankoe.jpg"
import Image from "next/image";
import { Typography } from 'antd';
import Link from "next/link";

export default function Carankoe() {
    const { Title } = Typography;
    return (
        <>
            <div style={{ width: "100%", backgroundColor: "#fff", position: "fixed", zIndex: 4545}}>
                <div style={{ paddingLeft: "2rem", marginBottom: "1rem" }} >
                    <Link href="./" >
                        <a className="headerLink">
                            <Title>SHIKOSHIKOSOFT 1st PROJECT</Title>
                        </a>
                    </Link>
                </div>
            </div>
            <div>
                <div style={{ height: "4rem" }} />
                <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                    <Image
                        alt="Shikoshiko"
                        src={karankoeTop}
                        objectFit="contain"
                        layout={"intrinsic"} />
                    <Header />
                    <div style={{ padding: "1rem", height:"10rem" }}>
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                    </div>
                    <div style={{ padding: "1rem", height:"10rem" }}>
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                    </div>
                    <div style={{ padding: "1rem", height:"10rem" }}>
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                        最新情報
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}