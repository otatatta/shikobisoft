import Image from 'next/image'
import mamoru1 from "../../static/stands/HP1mmr1.png"
import mamoru2 from "../../static/stands/HP1mmr2.png"
import chiyo1 from "../../static/stands/HP2cy1.png"
import chiyo2 from "../../static/stands/HP2cy2.png"
import saika1 from "../../static/stands/HP3sik1.png"
import saika2 from "../../static/stands/HP3sik2.png"
import juri1 from "../../static/stands/HP4jr1.png"
import juri2 from "../../static/stands/HP4jr2.png"
import tsuyuri1 from "../../static/stands/HP5tyr1.png"
import tsuyuri2 from "../../static/stands/HP5tyr2.png"
import nazuna1 from "../../static/stands/HP6nzn1.png"
import nazuna2 from "../../static/stands/HP6nzn2.png"
import sousei1 from "../../static/stands/HP7susi1.png"
import sousei2 from "../../static/stands/HP7susi2.png"
import sitoras1 from "../../static/stands/HP8strs1.png"
import sitoras2 from "../../static/stands/HP8strs2.png"
import ryuko1 from "../../static/stands/HP9rk1.png"
import ryuko2 from "../../static/stands/HP9rk2.png"
import ryo1 from "../../static/stands/HP10ku1.png"
import ryo2 from "../../static/stands/HP10ku2.png"
import kenji1 from "../../static/stands/HP11knj1.png"
import kenji2 from "../../static/stands/HP11knj2.png"
import komari1 from "../../static/stands/HP12kmr1.png"
import komari2 from "../../static/stands/HP12kmr2.png"
import ushio1 from "../../static/stands/HP13uso1.png"
import ushio2 from "../../static/stands/HP13uso2.png"
import umino1 from "../../static/stands/HP14umn1.png"
import umino2 from "../../static/stands/HP14umn2.png"
import resuna1 from "../../static/stands/HP15rsn1.png"
import resuna2 from "../../static/stands/HP15rsn2.png"

export default function CharaStandsMobile(selected, value, width, height) {
    const imgArea = (src) => {
        if (src) {
            return (
                <Image
                    src={src}
                    style={{ display: "inline-block" , width:"auto"}}
                    alt="Image" />
            )
        } return <></>
    }
    switch (selected) {
        case "Mamoru":
            return (
                <>
                    {value === "1" && (
                        imgArea(mamoru1)
                    )}
                    {value === "2" && (
                        imgArea(mamoru2)
                    )}
                </>
            )
        case "Chiyo":
            return (
                <>
                    {value === "1" && (
                        imgArea(chiyo1)
                    )}
                    {value === "2" && (
                        imgArea(chiyo2)
                    )}
                </>
            )
        case "Saika":
            return (
                <>
                    {value === "1" && (
                        imgArea(saika1)
                    )}
                    {value === "2" && (
                        imgArea(saika2)
                    )}
                </>
            )
        case "Juri":
            return (
                <>
                    {value === "1" && (
                        imgArea(juri1)

                    )}
                    {value === "2" && (
                        imgArea(juri2)
                    )}
                </>
            )
        case "Tsuyuri":
            return (
                <>
                    {value === "1" && (
                        imgArea(tsuyuri1)

                    )}
                    {value === "2" && (
                        imgArea(tsuyuri2)
                    )}
                </>
            )
        case "Nazuna":
            return (
                <>
                    {value === "1" && (
                        imgArea(nazuna1)

                    )}
                    {value === "2" && (
                        imgArea(nazuna2)
                    )}
                </>
            )
        case "Sousei":
            return (
                <>
                    {value === "1" && (
                        imgArea(sousei1)

                    )}
                    {value === "2" && (
                        imgArea(sousei2)
                    )}
                </>
            )
        case "Shitorasu":
            return (
                <>
                    {value === "1" && (
                        imgArea(sitoras1)

                    )}
                    {value === "2" && (
                        imgArea(sitoras2)
                    )}
                </>
            )
        case "Ryuko":
            return (
                <>
                    {value === "1" && (
                        imgArea(ryuko1)

                    )}
                    {value === "2" && (
                        imgArea(ryuko2)
                    )}
                </>
            )
        case "Ryou":
            return (
                <>
                    {value === "1" && (
                        imgArea(ryo1)

                    )}
                    {value === "2" && (
                        imgArea(ryo2)
                    )}
                </>
            )
        case "Kenji":
            return (
                <>
                    {value === "1" && (
                        imgArea(kenji1)

                    )}
                    {value === "2" && (
                        imgArea(kenji2)
                    )}
                </>
            )
        case "Komari":
            return (
                <>
                    {value === "1" && (
                        imgArea(komari1)

                    )}
                    {value === "2" && (
                        imgArea(komari2)
                    )}
                </>
            )
        case "Ushio":
            return (
                <>
                    {value === "1" && (
                        imgArea(ushio1)

                    )}
                    {value === "2" && (
                        imgArea(ushio2)
                    )}
                </>
            )
        case "Umino":
            return (
                <>
                    {value === "1" && (
                        imgArea(umino1)

                    )}
                    {value === "2" && (
                        imgArea(umino2)
                    )}
                </>
            )
        case "Resuna":
            return (
                <>
                    {value === "1" && (
                        imgArea(resuna1)

                    )}
                    {value === "2" && (
                        imgArea(resuna2)
                    )}
                </>
            )
    }
}
