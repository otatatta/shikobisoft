import Header from "./component/Header"
import Head from 'next/head'
import Footer from "./component/Footer";
import { Carousel, Empty } from 'antd';

const contentStyle = {
  height: '480px',
  color: '#fff',
  lineHeight: '480px',
  textAlign: 'center',
  background: '#364d79',
  fontSize: '36px',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
      <Head>
        <title>しこしこソフト | SHIKOSHIKO SOFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>準備中です</h3>
          </div>
          <div>
            <h3 style={contentStyle}>準備中です</h3>
          </div>
          <div>
            <h3 style={contentStyle}>準備中です</h3>
          </div>
        </Carousel>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2>TOPICS</h2>
          <p>
            ～繭イのカランコエ製作～
          </p>
          <Empty />
        </div>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2>BlogS</h2>
          <p>
            しこスタッフが日常を綴る <br />
            しこログ不定期更新
          </p>
          <Empty />
        </div>
        <Empty />
      </main>

      <Footer />
    </div>
  );
}