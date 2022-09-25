import Header from "./components/Header"
import Footer from "../component/Footer"
import karankoeTop from "../static/karankoe.jpg"
import Image from "next/image";
import { Typography } from 'antd';

export default function Carankoe() {
    const { Title } = Typography;
    return (
        <>
            <div style={{ width: "100%", backgroundColor: "#31a9ee", position: "fixed", zIndex: 4545 }}>
                <Title>SHIKOSHIKOSOFT 1st PROJECT</Title>
            </div>
            <div>
                <div style={{ height: "5rem" }} />
                <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                    <Image
                        alt="Shikoshiko"
                        src={karankoeTop}
                        objectFit="contain"
                        layout={"intrinsic"} />
                    <Header />
                    <div style={{ padding: "1rem" }}>
                        最新情報
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}