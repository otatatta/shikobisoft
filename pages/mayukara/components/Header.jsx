import Link from "next/link";
import React from "react";
import 'antd/dist/antd.css';
import { Row } from 'antd';

const headerLink = [
  {
    href: "./mayukara/story",
    text: "物語"
  },
  {
    href: "./mayukara/story",
    text: "世界観"
  },
  {
    href: "./mayukara/story",
    text: "人物"
  },
  {
    href: "./mayukara/story",
    text: "画像"
  },
  {
    href: "./mayukara/story",
    text: "製品概要"
  }
]
const borderStr = "2px ridge rgba(0, 0, 0, .6)"

function Header() {
  return (
    <header>
      <Row justify="space-around" align="middle" style={{ border: borderStr }} >
        {/* <Card> */}
        {headerLink?.map((value, index) => {
          return (
            <div style={{ width: '20%', borderLeft: `${index === 0 ? "" : borderStr}`, background: "#000" }} key={index}>
              <Link href={value?.href} >
                <a className="headerLink" style={{ fontSize: "clamp(14px, 2vw, 28px)", padding: "1rem", color: "white" }}>{value?.text}</a>
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