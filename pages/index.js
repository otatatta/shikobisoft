import Header from "./component/Header"
import Head from 'next/head'
import { Footer } from "./component/Footer";

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

      </main>

      <Footer />
    </div>
  );
}