import OtherHeader from "../components/OtherHeader"
import Footer from "../../component/Footer"
import Image from 'next/image'
import storyImg from "../../static/story.png"
// import { Typography } from 'antd';

export default function CarankoeStory() {
    // const { Title } = Typography;
    return (
        <>
            <OtherHeader />
            <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                <div>
                    <div style={{ padding: "1rem" }}>
                        <Image
                            src={storyImg}
                            alt="Image" />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}