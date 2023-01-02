import Head from 'next/head'
import Footer from "./component/Footer";
import { Empty } from 'antd';



export default function Home() {
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
      <Empty />

      <Footer />
    </div >
  );
}