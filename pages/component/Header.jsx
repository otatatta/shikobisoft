import Image from "next/image";
import Link from "next/link";
import React from "react";
import shikoIcon from "../static/shikoIcon.png"
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
    href: "./blog",
    text: "Product"
  },
  {
    href: "./blog",
    text: "Contact"
  }
]

function Header() {
  return (
    <header>
      <div style={{ justifyContent: "space-between", display: "flex" }} >
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              alt="Shikoshiko"
              src={shikoIcon}
              objectFit="contain"
              width={100}
              height={100}
            />
          </div>
        </Link>
        <span >SHIKOSHIKOSOFT OFFICAL WEBSITE</span>
        <span ></span>
      </div>
      <Row justify="space-around" align="middle">
        {headerLink?.map((value) => {
          return (
            <Link href={value?.href}>
              <Col span={4}>
                <a className="headerLink">{value?.text}</a>
              </Col>
            </Link>
          )
        })}
      </Row>
    </header>
  );
}

export default Header;