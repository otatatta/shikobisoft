import Header from "./components/Header"
import Footer from "../component/Footer"
import karankoeTop from "../static/karankoe.jpg"
import Rogo from "../static/rogo.png"
import Background from "../static/hp2_TOP.png"
import Image from "next/image";
import { Typography } from 'antd';
import Link from "next/link";

export default function Carankoe() {
    const { Title } = Typography;
    return (
        <div>
            <Image
                alt="Shikoshikoback"
                src={Background}
                style={{ zIndex: -4545 }}
                width={"100%"}
                height={"100%"}
                layout={`fill`}
                objectFit={`cover`} />
            <div style={{ position: "fixed", zIndex: 4545 }}>
                <div style={{ marginBottom: "0.5rem", backgroundColor: "#fff", height: "8%" }} >
                    <Link href="./" >
                        <a className="headerLink">
                            <Image
                                alt="Shikoshiko"
                                src={Rogo}
                                objectFit="contain"
                                width={""}
                                height={"50px"}
                                style={{ maxWidth: "1280px" }}
                            />
                        </a>
                    </Link>
                </div>
            </div>
            <div>
                <div style={{ height: "40px" }} />
                <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", zIndex: 545 }}>
                    <Image
                        alt="Shikoshiko"
                        src={karankoeTop}
                        objectFit="contain"
                        layout={"intrinsic"} />
                    <Header />
                </div>
            </div>
            <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", zIndex: 545 }}>
                <div style={{ padding: "1rem", height: "10rem" }}>
                    キャラクター情報を更新しました
                </div>
                <div style={{ padding: "1rem", height: "10rem" }}>
                    しこログ更新をしました
                </div>
                <div style={{ padding: "1rem", height: "10rem" }}>
                    画廊を更新しました
                </div>
                <Footer />
            </div>
        </div>
    );
}