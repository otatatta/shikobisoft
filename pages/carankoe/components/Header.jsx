import Link from "next/link";
import React from "react";
import 'antd/dist/antd.css';
import { Row } from 'antd';

const headerLink = [
  {
    href: "./carankoe/story",
    text: "物語"
  },
  {
    href: "./blog",
    text: "世界観"
  },
  {
    href: "./blog",
    text: "人物"
  },
  {
    href: "./blog",
    text: "画像"
  },
  {
    href: "./blog",
    text: "製品概要"
  }
]
const borderStr = "2px ridge rgba(211, 220, 50, .6)"

function Header() {
  return (
    <header>
      <Row justify="space-around" align="middle" style={{ border: borderStr }} >
        {/* <Card> */}
        {headerLink?.map((value, index) => {
          return (
            <div style={{ width: '20%', borderLeft: `${index === 0 ? "" : borderStr}`, background: "#fff7e6" }} key={index}>
              <Link href={value?.href} >
                <a className="headerLink" style={{ fontSize: "clamp(14px, 2vw, 28px)", padding: "1rem" }}>{value?.text}</a>
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