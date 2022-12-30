import Link from "next/link";
import React from "react";
import 'antd/dist/antd.css';
import { Row } from 'antd';
import Image from "next/image";
import Otogi from "../../static/hp_otogibanasi.png"
import Garou from "../../static/hp_garou.png"
import Zinbutu from "../../static/hp_zinbutu.png"
import Denpou from "../../static/hp_denpou.png"
import Mokuroku from "../../static/hp_mokuroku.png"

export const headerLink = [
  {
    href: "./mayukara/story",
    text:
      <Image
        alt="Shikoshiko1"
        src={Otogi}
        objectFit="contain"
      />
  },
  {
    href: "./mayukara/character",
    text:
      <Image
        alt="Shikoshiko3"
        src={Zinbutu}
        objectFit="contain"
      />
  },
  {
    href: "./mayukara/character",
    text:
      <Image
        alt="Shikoshiko2"
        src={Garou}
        objectFit="contain"
      />
  },
  {
    href: "./mayukara/character",
    text:
      <Image
        alt="Shikoshiko5"
        src={Mokuroku}
        objectFit="contain"
      />
  },
  {
    href: "./mayukara/character",
    text:
      <Image
        alt="Shikoshiko4"
        src={Denpou}
        objectFit="contain"
      />
  },
]

const borderStr = "2px ridge rgba(0, 0, 0, .6)"

function Header() {
  return (
    <header>
      <Row justify="space-around" align="middle" style={{ border: borderStr, backgroundColor: "white" }} >
        {/* <Card> */}
        {headerLink?.map((value, index) => {
          return (
            <div style={{ width: '20%', borderLeft: `${index === 0 ? "0px" : borderStr}` }} key={index}>
              <Link href={value?.href} >
                <a style={{ justifyContent: "center", color: "white" }}>{value?.text}</a>
              </Link>
            </div>
          )
        })}
        {/* </Card> */}
      </Row>
    </header >
  );
}

export default Header;