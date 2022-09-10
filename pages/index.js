import Header from "./component/Header"
import Head from 'next/head'
import Footer from "./component/Footer";
import { Carousel, Empty } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
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
        <h1 className="text-3xl font-bold underline">
          しこしこそふと（仮）
        </h1>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <p>
          しこスタッフが日常を綴る <br />
          しこログ不定期更新
        </p>
        <Empty />
        <Empty />
      </main>

      <Footer />
    </div>
  );
}