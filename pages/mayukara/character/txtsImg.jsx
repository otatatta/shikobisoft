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

const txtImgLookup = {
    Mamoru: mamoruTxt,
    Chiyo: chiyoTxt,
    Saika: saikaTxt,
    Juri: juriTxt,
    Tsuyuri: tsuyuriTxt,
    Nazuna: nazunaTxt,
    Sousei: souseiTxt,
    Shitorasu: shitoTxt,
    Ryuko: ryukoTxt,
    Ryou: kyoTxt,
    Kenji: kenjiTxt,
    Komari: komariTxt,
    Ushio: usoTxt,
    Umino: umnTxt,
    Higane: higaneTxt,
};

export default function CharaTxtImg(selected) {
    return txtImgLookup[selected];
}
