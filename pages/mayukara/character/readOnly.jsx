import mamoru1 from "../../static/stands/HP1mmr.png";
import mamoru2 from "../../static/stands/HP1mmr2.png";
import iconMamoru from "../../static/icons/iconmmr.png";

class CharaData {
  static Mamoru = {
    names: "犬無 守琉",
    selected_name: "Mamoru",
    txt: (
      <p style={{ fontSize: "14px" }}>
        『 ――全部が全部、気色が悪いよな…… 』<br />
        本作の主人公である十九歳の青年。
        <br />
        舞台である繭ノ葉町を、実母と共に幼い頃に外へと連れ出た。しかし母の消息不明を機に、十四年振りに町へと帰省することとなる。
        <br />
        無愛想気味だが本人なりには人を気遣おうとする故に、困る人などを放っておくことができない気質。
        <br />
        繭ノ葉町《御三家》の【神来社家】出自であり、長男ゆえ本来は当主を引き継ぐ立場であるのだが、外の世界で育ったため実家への思い入れなどは何も無い。
        <br />
        <br />
        キャラクター原画: ぎゃばん
        <br />
        キャラクター彩色: 麩幸地
        <br />
        キャラクターデザイン原案: 麻木ななみ
      </p>
    ),
    icon: iconMamoru,
    stand_1: mamoru1,
    stand_2: mamoru2,
    options: ["1", "2"],
  };
}

export default CharaData;
