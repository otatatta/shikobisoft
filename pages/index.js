import React, { useLayoutEffect, useMemo } from 'react';
import Head from 'next/head'
import Footer from "./component/Footer";
import { Modal, Empty } from 'antd';



export default function Home() {

  const LocalizedModal = () => {
    const [open, setOpen] = useState(true);

    const showModal = () => {
      setOpen(true);
    };

    const hideModal = () => {
      setOpen(false);
    };

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          open={open}
          onOk={hideModal}
          onCancel={hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </>
    );
  };

  useLayoutEffect(() => {
    Modal.warning({
      title: '年齢確認',
      content: (<p style={{ fontSize: "12px", textAlign: "left" }}>
        このサイトには18歳未満の方にが回覧できないコンテンツが含まれています。<br />
        あなたは18歳以上ですか<br />
      </p>),
      okText: 'はい',
      cancelText: 'いいえ',
    });
  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
      <Head>
        <title>しこしこソフト | SHIKOSHIKO SOFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ textAlign: "center", width: "100%" }}>
        <h2>BlogS</h2>
        <p>
          しこスタッフが日常を綴る <br />
          しこログ不定期更新
        </p>
        <Empty />
      </div>
      <Footer />
    </div >
  );
}