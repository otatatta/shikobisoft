import mamoruTxt from "../../static/stands/HP_1mmr.png"
import chiyoTxt from "../../static/stands/HP2cy.png"
import saikaTxt from "../../static/stands/HP3sik.png"
import juriTxt from "../../static/stands/HP4jr.png"
import tsuyuriTxt from "../../static/stands/HP5tyr.png"
import nazunaTxt from "../../static/stands/HP6nzn.png"
import souseiTxt from "../../static/stands/HP7susi.png"
import shitoTxt from "../../static/stands/HP8strs.png"
import ryukoTxt from "../../static/stands/HP9rk.png"
import kyoTxt from "../../static/stands/HP10ku.png"
import kenjiTxt from "../../static/stands/HP11knj.png"
import komariTxt from "../../static/stands/HP12kmr.png"
import usoTxt from "../../static/stands/HP13uso.png"
import umnTxt from "../../static/stands/HP14umn.png"
import higaneTxt from "../../static/stands/HP15hgn.png"

export default function CharaTxtImg(selected) {

    switch (selected) {
        case "Mamoru":
            return (mamoruTxt)
        case "Chiyo":
            return (chiyoTxt)
        case "Saika":
            return (saikaTxt)
        case "Juri":
            return (juriTxt)
        case "Tsuyuri":
            return (tsuyuriTxt)
        case "Nazuna":
            return (nazunaTxt)
        case "Sousei":
            return (souseiTxt)
        case "Shitorasu":
            return (shitoTxt)
        case "Ryuko":
            return (ryukoTxt)
        case "Ryou":
            return (kyoTxt)
        case "Kenji":
            return (kenjiTxt)
        case "Komari":
            return (komariTxt)
        case "Ushio":
            return (usoTxt)
        case "Umino":
            return (umnTxt)
        case "Higane":
            return (higaneTxt)
    }
}
