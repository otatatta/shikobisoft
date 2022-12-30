import Image from "next/image";
import Link from "next/link";
import React from "react";
import shikoIcon from "../static/1500x500.jpg"
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';

const headerLink = [
  {
    href: "./blog",
    text: "Blog"
  },
  {
    href: "./blog",
    text: "Staff"
  },
  {
    href: "./mayukara",
    text: "Product"
  },
  {
    href: "./blog",
    text: "Special"
  }
]
const borderStr = "2px ridge rgba(211, 220, 50, .6)"

function Header() {
  return (
    <header>
      <Link href="/">
        <div className="opacity-75 transition hover:opacity-100">
          <Image
            alt="Shikoshiko"
            src={shikoIcon}
            objectFit="contain"
            height={120}
          />
        </div>
      </Link>
      <Row justify="space-around" align="middle" style={{ border: borderStr }} >
        {/* <Card> */}
        {headerLink?.map((value, index) => {
          return (
            <div style={{ width: '25%', borderLeft: `${index === 0 ? undefined : borderStr}`, background: "#fff" }} key={`header_${index}`}>
              <Link href={value?.href} >
                <Col span={4}>
                  <a className="headerLink" style={{ fontSize: "clamp(15px, 2vw, 32px)", padding: "1rem" }}>{value?.text}</a>
                </Col>
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