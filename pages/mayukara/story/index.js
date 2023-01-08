import Image from "next/image";
import story from "../../static/story.png"
export default function CarankoeStory() {
    return (
        <>
            <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", margin: "2rem" }}>
                <div style={{ height: "100%", width: "100%" }}>
                    <Image
                        alt="Shikoshikoback"
                        src={story}
                        objectFit="contain"
                        layout={"intrinsic"}
                    />
                </div>
            </div>
        </>
    );
}