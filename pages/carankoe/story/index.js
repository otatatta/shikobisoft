import OtherHeader from "../components/OtherHeader"
import Footer from "../../component/Footer"
// import { Typography } from 'antd';

export default function CarankoeStory() {
    // const { Title } = Typography;
    return (
        <>
            <OtherHeader />
            <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}>
                <div>
                    <div style={{ height: "5rem" }} />
                    <div style={{ padding: "1rem" }}>
                        物語
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}