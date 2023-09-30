import React, {useState, useLayoutEffect} from 'react';
import Head from 'next/head'
import Footer from "./component/Footer";
import {Modal} from 'antd';
import Router from 'next/router'



export default function Home() {
  const [open, setOpen] = useState(false);
  useLayoutEffect(() => {
    if (
      localStorage.getItem("shiko") === "isSeijin") {
      Router.push("./mayukara")
    } else {
      setOpen(true)
    }
  }, [])

  const onOk = () => {
    localStorage.setItem("shiko", "isSeijin");
    Router.push("./mayukara")
  };
  const onCancel = () => {
    setOpen(false);
    Router.push("./blog")
  };

  return (
    <><Head>
      <title>しこしこソフト | SHIKOSHIKO SOFT</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
        <Modal
          title="年齢確認"
          open={open}
          onOk={onOk}
          onCancel={onCancel}
          centered
          closable={false}
          okText='はい'
          cancelText='いいえ'
        >
          <p style={{fontSize: "14px", textAlign: "left"}}>
            しこしこソフトへようこそ!!<br /><br />
            このサイトには18歳未満の方にが回覧できないコンテンツが含まれています。<br />
            あなたは18歳以上ですか?<br />
          </p>
        </Modal>
        <Footer />
      </div></>
  );
}