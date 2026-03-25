import Image from 'next/image'
import { standsMap } from "./characterData";

export default function CharaStands(selected, value) {
    const variants = standsMap[selected];
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
