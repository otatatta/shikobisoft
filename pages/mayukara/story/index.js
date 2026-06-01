import Image from "next/image";
import story from "../../static/story.png"
import styles from "./story.module.css";
export default function CarankoeStory() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        alt="Shikoshikoback"
                        src={story}
                        className={styles.storyImage}
                    />
                </div>
            </div>
        </>
    );
}