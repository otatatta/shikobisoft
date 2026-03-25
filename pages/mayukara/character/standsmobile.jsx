import Image from 'next/image'
import { standsMobileMap } from "./characterData";

export default function CharaStandsMobile(selected, value) {
    const variants = standsMobileMap[selected];
    if (!variants) return <></>;

    const idx = Number(value) - 1;
    const src = variants[idx];
    if (!src) return <></>;

    return (
        <Image
            src={src}
            style={{ display: "inline-block", width: "auto" }}
            alt="Image"
        />
    );
}
